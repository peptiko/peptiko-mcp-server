# Peptiko MCP Server

MCP server for **Peptiko** — research-grade peptide catalog serving Moldova, CIS & EU markets.

## Tools

| Tool | Description |
|------|-------------|
| `search_peptides` | Search catalog by name, abbreviation, category, or keyword |
| `get_product_details` | Full product info — mechanism, purity, CAS, formats, pricing |
| `reconstitution_calculator` | Calculate draw volume, syringe units, and doses per vial |
| `shipping_info` | Shipping rates and delivery times by country/region |
| `list_categories` | Browse all product categories with counts |

## Resources

| Resource | Description |
|----------|-------------|
| `peptiko://catalog` | Complete product catalog |
| `peptiko://compliance` | RUO legal disclaimers |

## Installation

### Claude Desktop

Add to `~/Library/Application Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "peptiko": {
      "command": "npx",
      "args": ["-y", "peptiko-mcp-server"]
    }
  }
}
```

### From source

```bash
git clone https://github.com/your-username/peptiko-mcp-server
cd peptiko-mcp-server
npm install && npm run build
node dist/index.js
```

## Example Queries

- "What peptides do you have for recovery?"
- "Give me details on BPC-157"
- "How do I reconstitute a 5mg vial with 2ml BAC water for a 250mcg dose?"
- "What's the shipping cost to Romania?"
- "List all metabolic peptides"

## About Peptiko

Peptiko supplies lab-grade research peptides from Chișinău, Moldova. 28+ compounds, ≥98% HPLC purity, third-party COA.

Website: [peptiko.xyz](https://peptiko.xyz)
Contact: peptiko@protonmail.com

*All products are for research use only. Not for human consumption.*
