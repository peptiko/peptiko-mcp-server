#!/usr/bin/env node
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { PRODUCTS, SHIPPING_ZONES, type Product } from "./data.js";

const server = new McpServer({
  name: "peptiko-mcp",
  version: "1.0.0",
  description:
    "Peptiko — research-grade peptide catalog for Moldova, CIS & EU. Search products, check pricing, calculate reconstitution doses, and view shipping info.",
});

/* ── TOOL: search_peptides ── */
server.tool(
  "search_peptides",
  "Search the Peptiko peptide catalog by name, category, or keyword. Returns matching products with price, purity, and description.",
  {
    query: z
      .string()
      .optional()
      .describe("Search term — compound name, abbreviation, or keyword (e.g. 'BPC-157', 'recovery', 'fat loss')"),
    category: z
      .enum(["recovery", "metabolic", "performance", "longevity", "all"])
      .optional()
      .describe("Filter by category"),
    max_results: z
      .number()
      .min(1)
      .max(50)
      .optional()
      .describe("Maximum results to return (default 10)"),
  },
  async ({ query, category, max_results }) => {
    let results = [...PRODUCTS];

    if (category && category !== "all") {
      results = results.filter((p) => p.category === category);
    }

    if (query) {
      const q = query.toLowerCase();
      results = results.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.abbr.toLowerCase().includes(q) ||
          p.id.includes(q) ||
          p.desc.toLowerCase().includes(q) ||
          p.searchTerms.toLowerCase().includes(q)
      );
    }

    const limit = max_results ?? 10;
    results = results.slice(0, limit);

    if (results.length === 0) {
      return {
        content: [
          {
            type: "text" as const,
            text: `No peptides found matching "${query || ""}". Try a different search term or browse all with category "all".`,
          },
        ],
      };
    }

    const formatted = results
      .map(
        (p) =>
          `**${p.name}** (${p.abbr}) — €${p.price}\n` +
          `  Category: ${p.category} | Purity: ${p.purity}\n` +
          `  Unit: ${p.unit}\n` +
          `  ${p.desc}\n` +
          `  CAS: ${p.cas} | Storage: ${p.storage}\n` +
          `  Formats: ${p.formats.join(", ")}`
      )
      .join("\n\n");

    return {
      content: [
        {
          type: "text" as const,
          text: `Found ${results.length} peptide${results.length !== 1 ? "s" : ""}:\n\n${formatted}`,
        },
      ],
    };
  }
);

/* ── TOOL: get_product_details ── */
server.tool(
  "get_product_details",
  "Get full details for a specific peptide including mechanism of action, storage, CAS number, available formats, and pricing.",
  {
    product_id: z
      .string()
      .describe("Product ID or abbreviation (e.g. 'bpc-tb', 'GHK-Cu', 'semaglutide')"),
  },
  async ({ product_id }) => {
    const q = product_id.toLowerCase();
    const product = PRODUCTS.find(
      (p) =>
        p.id === q ||
        p.abbr.toLowerCase() === q ||
        p.name.toLowerCase().includes(q)
    );

    if (!product) {
      return {
        content: [
          {
            type: "text" as const,
            text: `Product "${product_id}" not found. Use search_peptides to browse the catalog.`,
          },
        ],
      };
    }

    const detail =
      `# ${product.name} "${product.nick}"\n\n` +
      `**Category:** ${product.category}\n` +
      `**Price:** €${product.price} per ${product.unit}\n` +
      `**Purity:** ${product.purity}\n` +
      `**CAS:** ${product.cas}\n` +
      `**Storage:** ${product.storage}\n\n` +
      `## Description\n${product.desc}\n\n` +
      `## Mechanism of Action\n${product.mechanism}\n\n` +
      `## Available Formats\n${product.formats.map((f) => `- ${f}`).join("\n")}\n\n` +
      `---\n*All products are for research use only. Not for human consumption.*`;

    return {
      content: [{ type: "text" as const, text: detail }],
    };
  }
);

/* ── TOOL: reconstitution_calculator ── */
server.tool(
  "reconstitution_calculator",
  "Calculate peptide reconstitution — draw volume, syringe units, and doses per vial based on vial size, water volume, and desired dose.",
  {
    vial_mg: z.number().positive().describe("Peptide vial size in milligrams"),
    water_ml: z
      .number()
      .positive()
      .describe("Bacteriostatic water added in milliliters"),
    dose_mcg: z
      .number()
      .positive()
      .describe("Desired dose in micrograms"),
    syringe_ml: z
      .number()
      .positive()
      .optional()
      .describe("Syringe size in ml — 0.3, 0.5, or 1.0 (default 0.5)"),
  },
  async ({ vial_mg, water_ml, dose_mcg, syringe_ml }) => {
    const syringe = syringe_ml ?? 0.5;
    const syringeUnits = syringe * 100; // 0.3ml = 30u, 0.5ml = 50u, 1.0ml = 100u
    const concentration = (vial_mg * 1000) / water_ml; // mcg/ml
    const drawMl = dose_mcg / concentration;
    const drawUnits = drawMl * (syringeUnits / syringe);
    const dosesPerVial = Math.floor((vial_mg * 1000) / dose_mcg);
    const overflow = drawMl > syringe;

    const result =
      `## Reconstitution Calculation\n\n` +
      `| Parameter | Value |\n|---|---|\n` +
      `| Vial size | ${vial_mg} mg |\n` +
      `| BAC water | ${water_ml} ml |\n` +
      `| Concentration | ${concentration.toFixed(0)} mcg/ml |\n` +
      `| Desired dose | ${dose_mcg} mcg |\n` +
      `| **Draw volume** | **${drawMl.toFixed(4)} ml** |\n` +
      `| **Syringe units** | **${drawUnits.toFixed(1)} units** (${syringe}ml / ${syringeUnits}u syringe) |\n` +
      `| Doses per vial | ${dosesPerVial} |\n` +
      (overflow
        ? `\n⚠️ **Warning:** Draw volume exceeds syringe capacity (${syringe} ml). Use a larger syringe or reduce the dose.\n`
        : "") +
      `\n*For research use only. Always verify calculations.*`;

    return {
      content: [{ type: "text" as const, text: result }],
    };
  }
);

/* ── TOOL: shipping_info ── */
server.tool(
  "shipping_info",
  "Get Peptiko shipping rates, delivery times, and available regions. Peptiko ships from Moldova to CIS and EU countries.",
  {
    country: z
      .string()
      .optional()
      .describe("Country name or code (e.g. 'Moldova', 'MD', 'Romania', 'EU')"),
  },
  async ({ country }) => {
    if (country) {
      const q = country.toLowerCase();
      const zone = SHIPPING_ZONES.find(
        (z) =>
          z.code.toLowerCase() === q ||
          z.label.toLowerCase().includes(q) ||
          z.countries.some((c) => c.toLowerCase().includes(q))
      );

      if (zone) {
        return {
          content: [
            {
              type: "text" as const,
              text:
                `## Shipping to ${zone.label}\n\n` +
                `- **Cost:** ${zone.cost === 0 ? "Free" : `€${zone.cost}`}\n` +
                `- **Delivery:** ${zone.days}\n` +
                `- **Countries:** ${zone.countries.join(", ")}\n\n` +
                `All orders include tracking. Temperature-sensitive items ship with cold packs.`,
            },
          ],
        };
      }
    }

    const allZones = SHIPPING_ZONES.map(
      (z) =>
        `**${z.label}** — ${z.cost === 0 ? "Free" : `€${z.cost}`} (${z.days})\n  ${z.countries.join(", ")}`
    ).join("\n\n");

    return {
      content: [
        {
          type: "text" as const,
          text: `## Peptiko Shipping Zones\n\n${allZones}\n\n*All orders include tracking. Ships from Chișinău, Moldova.*`,
        },
      ],
    };
  }
);

/* ── TOOL: list_categories ── */
server.tool(
  "list_categories",
  "List all peptide categories and the number of products in each.",
  {},
  async () => {
    const cats: Record<string, number> = {};
    for (const p of PRODUCTS) {
      cats[p.category] = (cats[p.category] || 0) + 1;
    }
    const lines = Object.entries(cats)
      .sort((a, b) => b[1] - a[1])
      .map(([cat, count]) => `- **${cat}**: ${count} products`);

    return {
      content: [
        {
          type: "text" as const,
          text: `## Peptiko Catalog Categories\n\nTotal: ${PRODUCTS.length} peptides\n\n${lines.join("\n")}\n\nUse \`search_peptides\` with a category filter to browse.`,
        },
      ],
    };
  }
);

/* ── RESOURCE: catalog summary ── */
server.resource(
  "peptiko://catalog",
  "Complete Peptiko peptide catalog — all products with prices and descriptions",
  async () => {
    const catalog = PRODUCTS.map(
      (p) => `${p.name} (${p.abbr}) | €${p.price} | ${p.category} | ${p.purity} | ${p.desc}`
    ).join("\n");

    return {
      contents: [
        {
          uri: "peptiko://catalog",
          mimeType: "text/plain",
          text: `Peptiko Research Peptide Catalog — ${PRODUCTS.length} products\nAll products ship from Chișinău, Moldova. Research use only.\n\n${catalog}`,
        },
      ],
    };
  }
);

/* ── RESOURCE: compliance ── */
server.resource(
  "peptiko://compliance",
  "Peptiko RUO compliance and legal disclaimers",
  async () => {
    return {
      contents: [
        {
          uri: "peptiko://compliance",
          mimeType: "text/plain",
          text:
            "RESEARCH USE ONLY — PEPTIKO COMPLIANCE NOTICE\n\n" +
            "All products sold by Peptiko are intended strictly for laboratory research, " +
            "in-vitro testing, and educational purposes only.\n\n" +
            "Peptiko does not promote, condone, or support the use of any product for human " +
            "or animal consumption, therapeutic application, or any purpose other than lawful research.\n\n" +
            "All sales are final. No returns or refunds. See peptiko.xyz/terms for full terms.\n\n" +
            "Contact: peptiko@protonmail.com\nWebsite: https://peptiko.xyz",
        },
      ],
    };
  }
);

/* ── START ── */
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Peptiko MCP server started");
}

main().catch(console.error);
