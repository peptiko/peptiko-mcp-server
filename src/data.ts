export interface Product {
  id: string;
  name: string;
  nick: string;
  abbr: string;
  category: string;
  searchTerms: string;
  price: number;
  unit: string;
  desc: string;
  mechanism: string;
  purity: string;
  storage: string;
  cas: string;
  formats: string[];
}

export interface ShippingZone {
  code: string;
  label: string;
  cost: number;
  days: string;
  countries: string[];
}

export const PRODUCTS: Product[] = [
  {
    "id": "bpc-tb",
    "name": "BPC-157 + TB-500",
    "nick": "The Wolverine",
    "abbr": "BPC·TB",
    "category": "recovery",
    "searchTerms": "bpc-157 tb-500 wolverine recovery восстановление recuperare",
    "price": 94,
    "unit": "20mg lyophilised",
    "desc": "The definitive healing blend. Synergistic repair of tendons, ligaments, and connective tissue.",
    "mechanism": "BPC-157 activates growth hormone receptors and promotes angiogenesis. TB-500 up-regulates thymosin beta-4, facilitating cell migration, differentiation, and connective tissue repair.",
    "purity": "≥99% HPLC-MS verified",
    "storage": "−20 °C, protect from light. ≥24 months.",
    "cas": "137525-51-0 · 107761-42-2",
    "formats": [
      "5mg vial",
      "10mg vial",
      "20mg vial (stack)"
    ]
  },
  {
    "id": "ghk-cu",
    "name": "GHK-Cu",
    "nick": "The Weaver",
    "abbr": "GHK-Cu",
    "category": "recovery",
    "searchTerms": "ghk-cu copper peptide weaver recovery медный пептид recuperare",
    "price": 50,
    "unit": "100mg lyophilised",
    "desc": "Copper peptide stimulating collagen, elastin, and glycosaminoglycan synthesis for tissue remodelling.",
    "mechanism": "GHK-Cu binds copper ions and activates over 4,000 genes involved in collagen production, antioxidant defense, wound healing, and anti-inflammatory pathways.",
    "purity": "≥99% HPLC-MS verified",
    "storage": "−20 °C. Reconstituted: 4 °C, ≤2 weeks.",
    "cas": "49557-75-7",
    "formats": [
      "50mg vial",
      "100mg vial",
      "200mg bulk"
    ]
  },
  {
    "id": "ta1",
    "name": "Thymosin Alpha-1",
    "nick": "The Shield",
    "abbr": "Tα-1",
    "category": "recovery",
    "searchTerms": "thymosin alpha-1 shield immune recovery иммунитет imunitate",
    "price": 86,
    "unit": "10mg lyophilised",
    "desc": "Potent immunomodulator. Enhances T-cell activity, NK cell function, and antiviral response.",
    "mechanism": "Thymosin α1 enhances T-cell maturation and differentiation, upregulates MHC class I expression, and modulates cytokine production to restore immune homeostasis.",
    "purity": "≥99% HPLC-MS verified",
    "storage": "−20 °C, avoid freeze-thaw cycles.",
    "cas": "62304-98-7",
    "formats": [
      "1mg vial",
      "5mg vial",
      "10mg vial"
    ]
  },
  {
    "id": "semaglutide",
    "name": "Semaglutide",
    "nick": "",
    "abbr": "GLP-1",
    "category": "metabolic",
    "searchTerms": "semaglutide glp-1 metabolic метаболизм metabolic",
    "price": 81,
    "unit": "10mg lyophilised",
    "desc": "GLP-1 receptor agonist. Research into appetite regulation, insulin secretion, and metabolic pathways.",
    "mechanism": "Semaglutide mimics glucagon-like peptide-1 (GLP-1), stimulating insulin secretion, suppressing glucagon, slowing gastric emptying, and signaling satiety via hypothalamic pathways.",
    "purity": "≥99% HPLC-MS verified",
    "storage": "−20 °C lyophilised. 4 °C after reconstitution, ≤28 days.",
    "cas": "910463-68-2",
    "formats": [
      "2mg vial",
      "5mg vial",
      "10mg vial"
    ]
  },
  {
    "id": "tirzepatide",
    "name": "Tirzepatide",
    "nick": "The Dual Agonist",
    "abbr": "GIP·GLP",
    "category": "metabolic",
    "searchTerms": "tirzepatide dual agonist metabolic двойной агонист",
    "price": 161,
    "unit": "40mg lyophilised",
    "desc": "Dual GIP/GLP-1 receptor agonist. Superior metabolic and weight regulation research compound.",
    "mechanism": "Tirzepatide activates both GIP and GLP-1 receptors simultaneously, producing additive effects on insulin secretion, appetite suppression, and fat oxidation beyond single-agonist compounds.",
    "purity": "≥99% HPLC-MS verified",
    "storage": "−20 °C. ≥18 months lyophilised.",
    "cas": "2023788-19-2",
    "formats": [
      "5mg vial",
      "10mg vial",
      "40mg bulk"
    ]
  },
  {
    "id": "tesamorelin",
    "name": "Tesamorelin",
    "nick": "The GH Releaser",
    "abbr": "GHRH",
    "category": "metabolic",
    "searchTerms": "tesamorelin gh releaser ghrh metabolic гормон роста",
    "price": 86,
    "unit": "10mg lyophilised",
    "desc": "GHRH analogue. FDA-approved backbone compound for growth hormone secretion research.",
    "mechanism": "Tesamorelin is a synthetic GHRH analogue that binds pituitary GHRH receptors, stimulating pulsatile GH release without suppressing the hypothalamic-pituitary axis.",
    "purity": "≥99% HPLC-MS verified",
    "storage": "−20 °C, light-sensitive. Do not shake.",
    "cas": "218949-48-9",
    "formats": [
      "2mg vial",
      "5mg vial",
      "10mg vial"
    ]
  },
  {
    "id": "cjc-ipa",
    "name": "CJC-1295 + Ipamorelin",
    "nick": "The Architects",
    "abbr": "CJC·IPA",
    "category": "performance",
    "searchTerms": "cjc-1295 ipamorelin architects gh performance производительность",
    "price": 49,
    "unit": "10mg (5+5) lyophilised",
    "desc": "Gold-standard GH optimization blend. Sustained pulsatile growth hormone release without cortisol spike.",
    "mechanism": "CJC-1295 (DAC) extends GHRH half-life to ~8 days via DAC technology. Ipamorelin selectively stimulates GH release via ghrelin receptor without elevating cortisol or prolactin.",
    "purity": "≥99% HPLC-MS verified",
    "storage": "−20 °C. ≥24 months lyophilised.",
    "cas": "863288-34-0 · 170851-70-4",
    "formats": [
      "5+5mg vial set",
      "10+10mg vial set"
    ]
  },
  {
    "id": "pt141",
    "name": "PT-141",
    "nick": "The Desire",
    "abbr": "PT-141",
    "category": "performance",
    "searchTerms": "pt-141 bremelanotide desire performance желание",
    "price": 49,
    "unit": "10mg lyophilised",
    "desc": "Bremelanotide — MC3R/MC4R agonist for sexual function and arousal research pathways.",
    "mechanism": "PT-141 activates melanocortin MC3R and MC4R receptors in the CNS, modulating dopamine activity and neural pathways governing sexual arousal independent of vascular mechanisms.",
    "purity": "≥99% HPLC-MS verified",
    "storage": "−20 °C. Light-sensitive.",
    "cas": "189691-06-3",
    "formats": [
      "5mg vial",
      "10mg vial"
    ]
  },
  {
    "id": "semax",
    "name": "Semax",
    "nick": "The Edge",
    "abbr": "SEMAX",
    "category": "performance",
    "searchTerms": "semax edge nootropic bdnf performance ноотроп когнитивный",
    "price": 36,
    "unit": "5mg lyophilised",
    "desc": "ACTH-derived nootropic. Elevates BDNF, enhances memory consolidation and cognitive resilience.",
    "mechanism": "Semax (ACTH 4-7 analogue) upregulates BDNF and NGF expression in the hippocampus, enhancing synaptic plasticity and neuroprotection under stress conditions.",
    "purity": "≥99% HPLC-MS verified",
    "storage": "−20 °C. ≥12 months lyophilised.",
    "cas": "80714-61-0",
    "formats": [
      "1mg vial",
      "5mg vial"
    ]
  },
  {
    "id": "epithalon",
    "name": "Epithalon",
    "nick": "The Clock",
    "abbr": "EPT",
    "category": "longevity",
    "searchTerms": "epithalon clock telomerase longevity долголетие longevitate telomer",
    "price": 36,
    "unit": "10mg lyophilised",
    "desc": "Tetrapeptide from pineal gland. Activates telomerase, extends telomere length in aging research.",
    "mechanism": "Epithalon (Ala-Glu-Asp-Gly) activates telomerase via p53 pathway modulation, restoring telomere length in senescent cells. Also regulates melatonin synthesis and circadian rhythm.",
    "purity": "≥99% HPLC-MS verified",
    "storage": "−20 °C. Reconstituted: 4 °C, ≤7 days.",
    "cas": "307297-39-8",
    "formats": [
      "5mg vial",
      "10mg vial",
      "20mg vial"
    ]
  },
  {
    "id": "selank",
    "name": "Selank",
    "nick": "The Calm",
    "abbr": "SELANK",
    "category": "longevity",
    "searchTerms": "selank calm anxiolytic gaba longevity анксиолитик стресс anxiolitic",
    "price": 36,
    "unit": "5mg lyophilised",
    "desc": "Anxiolytic heptapeptide. GABA and serotonin modulation without sedation. Stress resilience research.",
    "mechanism": "Selank modulates GABAergic, serotonergic, and dopaminergic systems, increasing BDNF expression and enkephalinase activity without receptor downregulation or dependence potential.",
    "purity": "≥99% HPLC-MS verified",
    "storage": "−20 °C. ≥18 months lyophilised.",
    "cas": "129954-34-3",
    "formats": [
      "2mg vial",
      "5mg vial"
    ]
  },
  {
    "id": "mots-c",
    "name": "MOTS-c",
    "nick": "",
    "abbr": "MOTS-c",
    "category": "longevity",
    "searchTerms": "mots-c longevity mitochondria ampk митохондрии долголетие",
    "price": 61,
    "unit": "10mg lyophilised",
    "desc": "Mitochondrial-encoded peptide activating AMPK. Metabolic flexibility and longevity pathway research.",
    "mechanism": "MOTS-c is encoded in mitochondrial 12S rRNA. Under metabolic stress it translocates to the nucleus, activating AMPK and Nrf2 pathways to promote mitochondrial biogenesis and insulin sensitivity.",
    "purity": "≥99% HPLC-MS verified",
    "storage": "−20 °C. ≥24 months lyophilised.",
    "cas": "1448672-61-4",
    "formats": [
      "5mg vial",
      "10mg vial"
    ]
  },
  {
    "id": "retatrutide",
    "name": "Retatrutide",
    "nick": "The Triple",
    "abbr": "GGG",
    "category": "metabolic",
    "searchTerms": "retatrutide triple agonist gip glp gcg metabolic тройной агонист",
    "price": 189,
    "unit": "10mg lyophilised",
    "desc": "Triple GIP/GLP-1/Glucagon receptor agonist. Next-generation metabolic compound with three synergistic pathways.",
    "mechanism": "Retatrutide simultaneously activates GIP, GLP-1, and glucagon receptors. The triple agonism produces additive effects on energy expenditure via glucagon, appetite suppression via GLP-1, and insulin sensitivity via GIP — exceeding dual-agonist compounds in metabolic pathway modulation.",
    "purity": "≥99% HPLC-MS verified",
    "storage": "−20 °C lyophilised. 4 °C after reconstitution, ≤14 days.",
    "cas": "2381089-83-2",
    "formats": [
      "3mg vial",
      "5mg vial",
      "10mg vial"
    ]
  },
  {
    "id": "pinealon",
    "name": "Pinealon",
    "nick": "The Sentinel",
    "abbr": "PIN",
    "category": "longevity",
    "searchTerms": "pinealon brain neuroprotection sentinel мозг нейропротекция creier neuroprotecție",
    "price": 42,
    "unit": "20mg lyophilised",
    "desc": "Tripeptide (Glu-Asp-Arg) isolated from pineal gland extracts. Studied for neuroprotective and cognitive-supporting properties in brain tissue models.",
    "mechanism": "Pinealon is a synthetic tripeptide (Glu-Asp-Arg) originally derived from pineal gland peptide bioregulators. In cellular models, it has been shown to penetrate cell membranes and nuclear envelopes, interacting with DNA to regulate gene expression related to antioxidant defense and neuronal survival. Studies suggest it may modulate melatonin synthesis pathways and protect neurons against oxidative stress-induced apoptosis.",
    "purity": "≥98% HPLC verified",
    "storage": "2–8 °C, protect from light. ≥24 months.",
    "cas": "157115-85-0",
    "formats": [
      "10mg vial",
      "20mg vial"
    ]
  },
  {
    "id": "aod-9604",
    "name": "AOD-9604",
    "nick": "The Sculptor",
    "abbr": "AOD",
    "category": "metabolic",
    "searchTerms": "aod-9604 fat loss sculptor metabolism метаболизм жиросжигание pierdere grăsime",
    "price": 52,
    "unit": "5mg lyophilised",
    "desc": "Modified fragment (176–191) of human growth hormone. Studied for its role in lipid metabolism without affecting IGF-1 or insulin levels.",
    "mechanism": "AOD-9604 mimics the lipolytic region of growth hormone without activating the full GH receptor. It stimulates lipolysis and inhibits lipogenesis in adipose tissue models, acting through a distinct mechanism that does not elevate IGF-1 levels or affect glucose metabolism.",
    "purity": "≥99% HPLC-MS verified",
    "storage": "−20 °C lyophilised. 4 °C after reconstitution, ≤21 days.",
    "cas": "221231-10-3",
    "formats": [
      "2mg vial",
      "5mg vial"
    ]
  },
  {
    "id": "dsip",
    "name": "DSIP",
    "nick": "The Sandman",
    "abbr": "DSIP",
    "category": "recovery",
    "searchTerms": "dsip delta sleep inducing peptide sandman сон sleep somn",
    "price": 38,
    "unit": "5mg lyophilised",
    "desc": "Delta Sleep-Inducing Peptide. Studied for modulation of sleep architecture, stress resilience, and neuroendocrine regulation.",
    "mechanism": "DSIP modulates sleep-wake cycles by influencing delta-wave sleep patterns through interaction with central GABAergic and serotonergic pathways. Research indicates it may also regulate ACTH and cortisol secretion, contributing to stress adaptation and circadian rhythm normalization.",
    "purity": "≥98% HPLC verified",
    "storage": "−20 °C lyophilised. 2–8 °C after reconstitution, ≤14 days.",
    "cas": "62568-57-4",
    "formats": [
      "2mg vial",
      "5mg vial"
    ]
  },
  {
    "id": "kpv",
    "name": "KPV",
    "nick": "The Peacekeeper",
    "abbr": "KPV",
    "category": "recovery",
    "searchTerms": "kpv anti-inflammatory peacekeeper противовоспалительный antiinflamator",
    "price": 45,
    "unit": "10mg lyophilised",
    "desc": "C-terminal tripeptide of alpha-MSH. Studied for potent anti-inflammatory activity in gut and skin tissue models.",
    "mechanism": "KPV (Lys-Pro-Val) is derived from the C-terminus of alpha-melanocyte-stimulating hormone. It inhibits NF-κB activation and reduces pro-inflammatory cytokine production (TNF-α, IL-6, IL-1β) in cellular models. Studies show activity in gut epithelial and dermal fibroblast assays without melanocortin receptor-mediated pigmentation effects.",
    "purity": "≥98% HPLC verified",
    "storage": "−20 °C lyophilised. 2–8 °C after reconstitution, ≤14 days.",
    "cas": "67727-97-3",
    "formats": [
      "5mg vial",
      "10mg vial"
    ]
  },
  {
    "id": "cerebrolysin",
    "name": "Cerebrolysin",
    "nick": "The Architect",
    "abbr": "CERE",
    "category": "longevity",
    "searchTerms": "cerebrolysin brain neuropeptide architect мозг нейропептид creier neuropeptidă",
    "price": 68,
    "unit": "5ml ampoule",
    "desc": "Porcine brain-derived neuropeptide preparation. Extensively studied in CIS/EU for neurotrophic support, cognitive function, and neuronal plasticity.",
    "mechanism": "Cerebrolysin is a mixture of low-molecular-weight neuropeptides and free amino acids derived from porcine brain tissue. It mimics the action of endogenous neurotrophic factors (BDNF, GDNF, NGF), promoting neuronal survival, synaptic plasticity, and neurogenesis. Studies demonstrate modulation of GSK-3β and CDK5 pathways relevant to neuroprotection.",
    "purity": "Standardised peptide content per pharmacopoeia",
    "storage": "2–8 °C, protect from light. Do not freeze.",
    "cas": "12656-61-0",
    "formats": [
      "5ml ampoule",
      "10ml ampoule"
    ]
  },
  {
    "id": "ll-37",
    "name": "LL-37",
    "nick": "The Guardian",
    "abbr": "LL-37",
    "category": "recovery",
    "searchTerms": "ll-37 antimicrobial immune guardian антимикробный иммунитет antimicrobian imunitate",
    "price": 58,
    "unit": "5mg lyophilised",
    "desc": "Human cathelicidin antimicrobial peptide. Studied for broad-spectrum antimicrobial, immunomodulatory, and wound-healing properties.",
    "mechanism": "LL-37 is the only human cathelicidin-derived antimicrobial peptide. It disrupts microbial membranes through electrostatic interactions with negatively charged lipid bilayers. Beyond direct antimicrobial activity, it modulates innate immunity by promoting chemotaxis of immune cells, neutralizing endotoxins (LPS), and enhancing wound closure through keratinocyte and fibroblast migration.",
    "purity": "≥95% HPLC verified",
    "storage": "−20 °C lyophilised. Avoid repeated freeze-thaw.",
    "cas": "154947-66-7",
    "formats": [
      "1mg vial",
      "5mg vial"
    ]
  },
  {
    "id": "ss-31",
    "name": "SS-31 (Elamipretide)",
    "nick": "The Reactor",
    "abbr": "SS-31",
    "category": "longevity",
    "searchTerms": "ss-31 elamipretide mitochondria reactor митохондрии mitocondrii",
    "price": 72,
    "unit": "5mg lyophilised",
    "desc": "Mitochondria-targeted tetrapeptide. Studied for restoration of bioenergetic function, reduction of oxidative stress, and cellular rejuvenation.",
    "mechanism": "SS-31 (D-Arg-Dmt-Lys-Phe-NH₂) selectively concentrates in the inner mitochondrial membrane by binding to cardiolipin. This interaction optimizes electron transport chain efficiency, reduces electron leak and ROS generation, and stabilizes cytochrome c interactions. Studies demonstrate restoration of ATP production and protection against ischemia-reperfusion injury in cardiac and renal tissue models.",
    "purity": "≥98% HPLC-MS verified",
    "storage": "−20 °C lyophilised. 2–8 °C after reconstitution, ≤7 days.",
    "cas": "736992-21-5",
    "formats": [
      "1mg vial",
      "5mg vial"
    ]
  },
  {
    "id": "dihexa",
    "name": "Dihexa",
    "nick": "The Synapse",
    "abbr": "DHX",
    "category": "longevity",
    "searchTerms": "dihexa cognitive synapse neurotrophic когнитивный нейротрофический cognitiv neurotrofic",
    "price": 65,
    "unit": "10mg lyophilised",
    "desc": "Angiotensin IV analog. Studied for extraordinary neurotrophic potency — up to 10⁷× more active than BDNF in promoting synaptic connectivity.",
    "mechanism": "Dihexa (N-hexanoic-Tyr-Ile-(6) aminohexanoic amide) is a stable, blood-brain-barrier-penetrant analog of angiotensin IV. It activates hepatocyte growth factor (HGF/c-Met) signaling, promoting dendritic spine formation and synaptic connectivity. In animal models, it demonstrated cognitive enhancement at picomolar concentrations — orders of magnitude more potent than BDNF.",
    "purity": "≥98% HPLC verified",
    "storage": "−20 °C, protect from light and moisture.",
    "cas": "1401708-83-5",
    "formats": [
      "5mg vial",
      "10mg vial"
    ]
  },
  {
    "id": "gonadorelin",
    "name": "Gonadorelin",
    "nick": "The Regulator",
    "abbr": "GnRH",
    "category": "performance",
    "searchTerms": "gonadorelin gnrh regulator gonadotropin гонадотропин gonadotropină",
    "price": 35,
    "unit": "2mg lyophilised",
    "desc": "Synthetic GnRH decapeptide. Studied for pulsatile stimulation of LH and FSH release from the anterior pituitary.",
    "mechanism": "Gonadorelin (pGlu-His-Trp-Ser-Tyr-Gly-Leu-Arg-Pro-Gly-NH₂) is identical to endogenous gonadotropin-releasing hormone. It binds GnRH receptors on anterior pituitary gonadotropes, triggering release of luteinizing hormone (LH) and follicle-stimulating hormone (FSH). Pulsatile administration maintains hypothalamic-pituitary-gonadal axis function, while continuous exposure leads to receptor desensitization.",
    "purity": "≥99% HPLC-MS verified",
    "storage": "−20 °C lyophilised. 2–8 °C after reconstitution, ≤14 days.",
    "cas": "33515-09-2",
    "formats": [
      "2mg vial"
    ]
  },
  {
    "id": "humanin",
    "name": "Humanin",
    "nick": "The Shield",
    "abbr": "HNG",
    "category": "longevity",
    "searchTerms": "humanin mitochondrial shield cytoprotection цитопротекция citoprotecție",
    "price": 78,
    "unit": "5mg lyophilised",
    "desc": "Mitochondria-encoded micropeptide. Studied alongside MOTS-c for cytoprotective, anti-apoptotic, and metabolic signaling properties.",
    "mechanism": "Humanin is a 24-amino-acid peptide encoded by mitochondrial DNA (MT-RNR2). It binds the trimeric receptor complex (CNTFR/WSX-1/gp130) and activates STAT3 signaling, promoting cell survival. It also binds IGFBP-3 and Bax, inhibiting intrinsic apoptosis. The S14G analog (HNG) shows enhanced potency. Studied in models of neurodegeneration, ischemia, and metabolic dysfunction.",
    "purity": "≥95% HPLC verified",
    "storage": "−20 °C lyophilised. Avoid repeated freeze-thaw cycles.",
    "cas": "330936-69-1",
    "formats": [
      "1mg vial",
      "5mg vial"
    ]
  },
  {
    "id": "5-amino-1mq",
    "name": "5-Amino-1MQ",
    "nick": "The Furnace",
    "abbr": "5A1MQ",
    "category": "metabolic",
    "searchTerms": "5-amino-1mq nnmt inhibitor furnace метаболизм metabolism",
    "price": 55,
    "unit": "50mg capsules (30ct)",
    "desc": "Selective NNMT inhibitor. Studied for activation of cellular energy expenditure and reduction of lipid accumulation in adipocyte models.",
    "mechanism": "5-Amino-1MQ is a small-molecule inhibitor of nicotinamide N-methyltransferase (NNMT), an enzyme upregulated in adipose tissue during obesity. NNMT inhibition increases intracellular NAD+ and SAM concentrations, boosting cellular energy expenditure via sirtuin activation. In diet-induced obesity models, it reduced fat mass without affecting lean mass or food intake.",
    "purity": "≥99% HPLC verified",
    "storage": "Room temperature, dry place. Protect from light.",
    "cas": "82575-32-8",
    "formats": [
      "50mg × 30 capsules",
      "50mg × 60 capsules"
    ]
  },
  {
    "id": "nad-plus",
    "name": "NAD+",
    "nick": "The Battery",
    "abbr": "NAD+",
    "category": "longevity",
    "searchTerms": "nad+ nicotinamide battery energy aging старение îmbătrânire",
    "price": 85,
    "unit": "500mg lyophilised",
    "desc": "Nicotinamide adenine dinucleotide. Essential coenzyme studied for cellular energy metabolism, DNA repair, and sirtuin-mediated longevity pathways.",
    "mechanism": "NAD+ is a central coenzyme in redox metabolism, serving as an electron carrier in glycolysis, the TCA cycle, and oxidative phosphorylation. It is also a required substrate for sirtuins (SIRT1–7), PARPs, and CD38 — enzymes governing DNA repair, epigenetic regulation, and circadian rhythm. Intracellular NAD+ declines with age; supplementation studies show restoration of mitochondrial function and activation of longevity-associated gene networks.",
    "purity": "≥98% enzymatic grade",
    "storage": "−20 °C lyophilised. Protect from light and moisture.",
    "cas": "53-84-9",
    "formats": [
      "250mg vial",
      "500mg vial",
      "1g vial"
    ]
  },
  {
    "id": "cagrisema",
    "name": "CagriSema",
    "nick": "The Catalyst",
    "abbr": "CGRS",
    "category": "metabolic",
    "searchTerms": "cagrisema cagrilintide semaglutide catalyst metabolic метаболический",
    "price": 145,
    "unit": "5mg lyophilised",
    "desc": "Co-formulation of cagrilintide (amylin analog) and semaglutide (GLP-1 agonist). Studied for dual-pathway appetite and metabolic regulation surpassing single-agent approaches.",
    "mechanism": "CagriSema combines two distinct mechanisms: cagrilintide is a long-acting amylin analog that activates amylin and calcitonin receptors in the area postrema and nucleus tractus solitarius, promoting satiety and slowing gastric emptying. Semaglutide activates GLP-1 receptors, enhancing glucose-dependent insulin secretion and central appetite suppression. The dual agonism produces additive effects on energy intake reduction and glycaemic control that exceed either agent alone in preclinical and clinical models.",
    "purity": "≥98% HPLC-MS verified",
    "storage": "−20 °C lyophilised. 2–8 °C after reconstitution, ≤14 days.",
    "cas": "2601842-66-4 · 910463-68-2",
    "formats": [
      "3mg vial",
      "5mg vial"
    ]
  },
  {
    "id": "bam15",
    "name": "BAM15",
    "nick": "The Uncoupler",
    "abbr": "BAM",
    "category": "metabolic",
    "searchTerms": "bam15 uncoupler mitochondria fat metabolism метаболизм жиросжигание",
    "price": 48,
    "unit": "50mg powder",
    "desc": "Selective mitochondrial protonophore. Studied for uncoupling oxidative phosphorylation to increase energy expenditure without raising core body temperature.",
    "mechanism": "BAM15 is a mitochondria-selective protonophore that dissipates the proton gradient across the inner mitochondrial membrane, uncoupling electron transport from ATP synthesis. Unlike classical uncouplers (DNP), BAM15 does not depolarize the plasma membrane, avoiding off-target toxicity. In rodent models, it increased fatty acid oxidation, reduced fat mass, improved insulin sensitivity, and decreased hepatic lipid accumulation — all without hyperthermia or reduced food intake.",
    "purity": "≥99% HPLC verified",
    "storage": "−20 °C, dry, protect from light.",
    "cas": "210538-09-5",
    "formats": [
      "25mg vial",
      "50mg vial"
    ]
  },
  {
    "id": "trevogrumab",
    "name": "Trevogrumab (Regeneron)",
    "nick": "The Titan",
    "abbr": "TREVO",
    "category": "performance",
    "searchTerms": "trevogrumab regeneron myostatin anti-myostatin muscle мышцы mușchi",
    "price": 195,
    "unit": "Research reference, inquire",
    "desc": "Anti-myostatin monoclonal antibody developed by Regeneron. Studied for inhibition of GDF-8 signaling to promote skeletal muscle hypertrophy and prevent muscle wasting.",
    "mechanism": "Trevogrumab is a fully human IgG4 monoclonal antibody that binds and neutralizes myostatin (GDF-8), a TGF-β superfamily member that negatively regulates skeletal muscle mass. By blocking myostatin from binding its receptor ActRIIB, trevogrumab removes the endogenous brake on muscle protein synthesis, enabling increased myofiber size and number. Preclinical and clinical studies have explored its potential in sarcopenia, muscular dystrophy, and cachexia models.",
    "purity": "Recombinant, ≥95% SDS-PAGE",
    "storage": "2–8 °C. Do not freeze. Protect from light.",
    "cas": "Proprietary (Regeneron REGN1033)",
    "formats": [
      "Research vial — contact for availability"
    ]
  },
  {
    "id": "apitegromab",
    "name": "Apitegromab (Scholar Rock)",
    "nick": "The Liberator",
    "abbr": "SRK-015",
    "category": "performance",
    "searchTerms": "apitegromab scholar rock srk-015 myostatin muscle мышцы mușchi",
    "price": 185,
    "unit": "Research reference, inquire",
    "desc": "Anti-pro/latent myostatin antibody developed by Scholar Rock. Selectively blocks myostatin activation rather than the mature ligand, offering a targeted approach to muscle growth.",
    "mechanism": "Apitegromab (SRK-015) is a monoclonal antibody with a novel mechanism: it binds pro-myostatin and latent myostatin, preventing proteolytic activation by furin and BMP-1/tolloid proteases. Unlike antibodies targeting mature myostatin, apitegromab acts upstream — blocking the conversion of inactive precursors to the active growth-inhibiting ligand. This selectivity avoids interference with other TGF-β family members (GDF-11, activins). Currently in clinical trials for spinal muscular atrophy (SMA) and muscle wasting conditions.",
    "purity": "Recombinant, ≥95% SDS-PAGE",
    "storage": "2–8 °C. Do not freeze. Protect from light.",
    "cas": "Proprietary (Scholar Rock SRK-015)",
    "formats": [
      "Research vial — contact for availability"
    ]
  }
];

export const SHIPPING_ZONES: ShippingZone[] = [
  { code: 'MD', label: 'Moldova (Domestic)', cost: 0, days: '1–2 business days', countries: ['Moldova'] },
  { code: 'RO', label: 'Romania', cost: 5, days: '3–5 business days', countries: ['Romania'] },
  { code: 'UA', label: 'Ukraine', cost: 8, days: '5–10 business days', countries: ['Ukraine'] },
  { code: 'CIS', label: 'CIS Countries', cost: 10, days: '7–14 business days', countries: ['Russia', 'Belarus', 'Kazakhstan', 'Armenia', 'Georgia', 'Azerbaijan', 'Uzbekistan', 'Kyrgyzstan'] },
  { code: 'EU', label: 'European Union', cost: 12, days: '5–10 business days', countries: ['Germany', 'France', 'Italy', 'Spain', 'Poland', 'Czech Republic', 'Hungary', 'Bulgaria', 'Austria', 'Netherlands', 'Belgium', 'Sweden', 'Greece', 'Portugal', 'Other EU'] },
  { code: 'INTL', label: 'International', cost: 18, days: '10–21 business days', countries: ['UK', 'USA', 'Canada', 'Australia', 'Other'] },
];
