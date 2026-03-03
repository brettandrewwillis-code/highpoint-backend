export interface TradeProfile {
  id: string;
  name: string;
  icon: string;
  tagline: string;
  searchTerms: string[];
  services: {
    standard: { label: string; range: [number, number] };
    highValue: { label: string; range: [number, number] };
  };
  cpc: {
    standard: [number, number];
    highIntent: [number, number];
  };
  leadCost: [number, number];
  conversionRate: number;
  insights: string[];
  targetKeywords: { keyword: string; intent: "high" | "medium" | "low"; value: string }[];
}

export const tradeProfiles: TradeProfile[] = [
  {
    id: "plumber",
    name: "Plumber",
    icon: "Wrench",
    tagline: "Emergency & Maintenance Plumbing",
    searchTerms: ["Plumber", "Emergency Plumber", "Plumbing"],
    services: {
      standard: { label: "Call-out / Blocked Drain", range: [120, 600] },
      highValue: { label: "Hot Water / Pipe Relining / Reno", range: [1800, 20000] },
    },
    cpc: { standard: [16, 35], highIntent: [40, 55] },
    leadCost: [40, 90],
    conversionRate: 0.20,
    insights: [
      "Emergency keywords convert 3x higher than general plumbing searches",
      "Pipe relining is the highest-margin service — target it specifically",
      "Storm season spikes demand by 40-60% — increase budget accordingly",
    ],
    targetKeywords: [
      { keyword: "Emergency plumber [Suburb]", intent: "high", value: "$40–$55 CPC" },
      { keyword: "Blocked drain [Suburb]", intent: "high", value: "$35–$50 CPC" },
      { keyword: "Hot water system install", intent: "medium", value: "$20–$35 CPC" },
      { keyword: "Plumber near me", intent: "high", value: "$30–$45 CPC" },
      { keyword: "Pipe relining [Suburb]", intent: "medium", value: "$25–$40 CPC" },
      { keyword: "Leaking tap repair", intent: "low", value: "$16–$25 CPC" },
    ],
  },
  {
    id: "electrician",
    name: "Electrician",
    icon: "Zap",
    tagline: "Residential & Commercial Electrical",
    searchTerms: ["Electrician", "Sparky", "Electrical"],
    services: {
      standard: { label: "Safety Check / Power Points", range: [150, 500] },
      highValue: { label: "Switchboard / EV Charger / Rewire", range: [1800, 12000] },
    },
    cpc: { standard: [12, 25], highIntent: [28, 45] },
    leadCost: [35, 75],
    conversionRate: 0.22,
    insights: [
      "EV charger installs are the fastest-growing search trend in 2026",
      "Switchboard upgrades have strong margins — use as primary ad target",
      "Summer AC season drives 50%+ more sparky searches",
    ],
    targetKeywords: [
      { keyword: "Emergency electrician [Suburb]", intent: "high", value: "$28–$45 CPC" },
      { keyword: "EV charger installer", intent: "high", value: "$30–$42 CPC" },
      { keyword: "Switchboard upgrade [Suburb]", intent: "high", value: "$25–$40 CPC" },
      { keyword: "Electrician near me", intent: "high", value: "$22–$38 CPC" },
      { keyword: "Safety switch install", intent: "medium", value: "$15–$25 CPC" },
      { keyword: "House rewire cost", intent: "low", value: "$12–$20 CPC" },
    ],
  },
  {
    id: "roofer",
    name: "Roofer",
    icon: "Home",
    tagline: "Repairs, Restorations & Re-Roofing",
    searchTerms: ["Roofer", "Roofing", "Roof Repair"],
    services: {
      standard: { label: "Leak Repair / Gutter Clean", range: [800, 2500] },
      highValue: { label: "Full Restoration / Re-Roof", range: [4500, 50000] },
    },
    cpc: { standard: [15, 30], highIntent: [45, 65] },
    leadCost: [100, 180],
    conversionRate: 0.15,
    insights: [
      "One re-roof job pays for 3-6 months of your entire ad spend",
      "High competition — use long-tail keywords like 'tile to Colorbond conversion'",
      "Storm season creates massive demand spikes — pre-plan budget increases",
    ],
    targetKeywords: [
      { keyword: "Roof repair [Suburb]", intent: "high", value: "$45–$65 CPC" },
      { keyword: "Roof restoration near me", intent: "high", value: "$40–$60 CPC" },
      { keyword: "Tile to Colorbond conversion", intent: "high", value: "$50–$65 CPC" },
      { keyword: "Gutter replacement [Suburb]", intent: "medium", value: "$20–$35 CPC" },
      { keyword: "Roof leak emergency", intent: "high", value: "$45–$60 CPC" },
      { keyword: "Re-roofing cost", intent: "low", value: "$15–$28 CPC" },
    ],
  },
  {
    id: "landscaper",
    name: "Landscaper",
    icon: "Trees",
    tagline: "Garden Design & Hardscape Construction",
    searchTerms: ["Landscaper", "Landscaping", "Garden Design"],
    services: {
      standard: { label: "Garden Refresh / Turf", range: [2000, 7000] },
      highValue: { label: "Retaining Walls / Decks / Full Build", range: [20000, 100000] },
    },
    cpc: { standard: [8, 15], highIntent: [20, 40] },
    leadCost: [50, 110],
    conversionRate: 0.18,
    insights: [
      "Target 'retaining wall' and 'deck build' — not 'lawn mowing' for high-margin jobs",
      "Portfolio imagery is critical for conversion — showcase completed projects",
      "Spring is peak season — ramp ads from August onwards",
    ],
    targetKeywords: [
      { keyword: "Retaining wall [Suburb]", intent: "high", value: "$25–$40 CPC" },
      { keyword: "Landscaper near me", intent: "high", value: "$20–$35 CPC" },
      { keyword: "Deck builder [Suburb]", intent: "high", value: "$22–$38 CPC" },
      { keyword: "Garden design [Suburb]", intent: "medium", value: "$15–$28 CPC" },
      { keyword: "Turf laying service", intent: "low", value: "$8–$15 CPC" },
      { keyword: "Backyard renovation ideas", intent: "low", value: "$10–$18 CPC" },
    ],
  },
  {
    id: "builder",
    name: "Builder",
    icon: "HardHat",
    tagline: "New Builds, Renovations & Extensions",
    searchTerms: ["Builder", "Home Builder", "Building"],
    services: {
      standard: { label: "Reno / Extension", range: [15000, 80000] },
      highValue: { label: "New Build / Custom Home", range: [250000, 800000] },
    },
    cpc: { standard: [12, 22], highIntent: [18, 38] },
    leadCost: [80, 150],
    conversionRate: 0.12,
    insights: [
      "Longest lead-to-sale cycle (60-180 days) — nurture sequences are critical",
      "Target 'home extension' and 'granny flat' for highest-converting keywords",
      "Portfolio and reviews are the #1 trust factor for builders",
    ],
    targetKeywords: [
      { keyword: "Home extension [Suburb]", intent: "high", value: "$22–$38 CPC" },
      { keyword: "Granny flat builder [Suburb]", intent: "high", value: "$25–$35 CPC" },
      { keyword: "Custom home builder", intent: "high", value: "$20–$32 CPC" },
      { keyword: "Builder near me", intent: "medium", value: "$18–$30 CPC" },
      { keyword: "Renovation builder [Suburb]", intent: "medium", value: "$15–$28 CPC" },
      { keyword: "House extension cost", intent: "low", value: "$12–$22 CPC" },
    ],
  },
  {
    id: "tiler",
    name: "Tiler",
    icon: "Grid3x3",
    tagline: "Bathroom, Floor & Splashback Tiling",
    searchTerms: ["Tiler", "Tiling", "Tile Layer"],
    services: {
      standard: { label: "Splashback / Small Area", range: [400, 1500] },
      highValue: { label: "Full Bathroom / Floor Tiling", range: [4000, 12000] },
    },
    cpc: { standard: [10, 22], highIntent: [18, 35] },
    leadCost: [45, 80],
    conversionRate: 0.20,
    insights: [
      "Waterproofing is a high-margin upsell — mention it in ad copy",
      "Before/after photos drive the highest click-through rates",
      "Target 'bathroom tiler' over generic 'tiler' for better lead quality",
    ],
    targetKeywords: [
      { keyword: "Bathroom tiler [Suburb]", intent: "high", value: "$18–$35 CPC" },
      { keyword: "Tiler near me", intent: "high", value: "$15–$28 CPC" },
      { keyword: "Splashback tiling", intent: "medium", value: "$12–$22 CPC" },
      { keyword: "Floor tiler [Suburb]", intent: "medium", value: "$14–$25 CPC" },
      { keyword: "Waterproofing tiler", intent: "high", value: "$18–$30 CPC" },
      { keyword: "Tile repair near me", intent: "low", value: "$10–$18 CPC" },
    ],
  },
  {
    id: "flooring",
    name: "Flooring",
    icon: "Layers",
    tagline: "Timber, Vinyl & Hybrid Flooring",
    searchTerms: ["Flooring", "Floor Layer", "Timber Flooring"],
    services: {
      standard: { label: "Single Room Install", range: [1500, 3000] },
      highValue: { label: "Whole House / Commercial", range: [8000, 25000] },
    },
    cpc: { standard: [12, 25], highIntent: [20, 38] },
    leadCost: [50, 95],
    conversionRate: 0.19,
    insights: [
      "Hybrid flooring installs are trending — highlight in ad copy",
      "'Free measure and quote' in ads increases conversion by 25%+",
      "Target renovation suburbs for highest-value flooring leads",
    ],
    targetKeywords: [
      { keyword: "Timber flooring install [Suburb]", intent: "high", value: "$20–$38 CPC" },
      { keyword: "Flooring near me", intent: "high", value: "$18–$32 CPC" },
      { keyword: "Hybrid flooring installer", intent: "high", value: "$22–$35 CPC" },
      { keyword: "Vinyl plank flooring", intent: "medium", value: "$15–$25 CPC" },
      { keyword: "Laminate flooring [Suburb]", intent: "medium", value: "$12–$22 CPC" },
      { keyword: "Floor sanding and polishing", intent: "low", value: "$14–$25 CPC" },
    ],
  },
  {
    id: "plasterer",
    name: "Plasterer",
    icon: "PaintBucket",
    tagline: "Plaster Repair & Suspended Ceilings",
    searchTerms: ["Plasterer", "Plastering", "Plaster Repair"],
    services: {
      standard: { label: "Patch & Repair", range: [250, 600] },
      highValue: { label: "Full House / Suspended Ceiling", range: [5000, 15000] },
    },
    cpc: { standard: [9, 18], highIntent: [15, 28] },
    leadCost: [40, 70],
    conversionRate: 0.22,
    insights: [
      "Most plasterers rely on word-of-mouth — massive digital opportunity",
      "Highlight 'direct to consumer' work over subcontracting for higher margins",
      "New build areas have strong demand for suspended ceiling specialists",
    ],
    targetKeywords: [
      { keyword: "Plasterer [Suburb]", intent: "high", value: "$15–$28 CPC" },
      { keyword: "Plaster repair near me", intent: "high", value: "$12–$22 CPC" },
      { keyword: "Suspended ceiling installer", intent: "high", value: "$18–$28 CPC" },
      { keyword: "Cornice installation", intent: "medium", value: "$10–$18 CPC" },
      { keyword: "Wall plastering service", intent: "medium", value: "$9–$16 CPC" },
      { keyword: "Ceiling repair [Suburb]", intent: "low", value: "$10–$18 CPC" },
    ],
  },
  {
    id: "kitchen",
    name: "Kitchen Renos",
    icon: "ChefHat",
    tagline: "Kitchen Design & Renovation",
    searchTerms: ["Kitchen Renovation", "Kitchen Designer", "Kitchen Remodeler"],
    services: {
      standard: { label: "Cabinet Refresh / Resurface", range: [5000, 10000] },
      highValue: { label: "Full Custom Kitchen", range: [25000, 80000] },
    },
    cpc: { standard: [18, 45], highIntent: [35, 60] },
    leadCost: [120, 250],
    conversionRate: 0.10,
    insights: [
      "Highest CPC trade — but one $40k job = 20x ROI on monthly ad spend",
      "Lead-to-sale cycle is 30-90 days — follow-up automation is critical",
      "Visual portfolio (3D renders, before/after) is the #1 conversion driver",
    ],
    targetKeywords: [
      { keyword: "Kitchen renovation [Suburb]", intent: "high", value: "$35–$60 CPC" },
      { keyword: "Kitchen designer near me", intent: "high", value: "$30–$50 CPC" },
      { keyword: "Custom kitchen builder", intent: "high", value: "$28–$45 CPC" },
      { keyword: "Kitchen makeover [Suburb]", intent: "medium", value: "$22–$40 CPC" },
      { keyword: "Kitchen cabinet resurfacing", intent: "medium", value: "$18–$35 CPC" },
      { keyword: "Kitchen renovation cost", intent: "low", value: "$20–$38 CPC" },
    ],
  },
  {
    id: "auto-electrician",
    name: "Auto Electrician",
    icon: "CarFront",
    tagline: "Vehicle Electrical & EV Services",
    searchTerms: ["Auto Electrician", "Car Electrician", "Vehicle Electrician"],
    services: {
      standard: { label: "Diagnostic / Battery / Alternator", range: [150, 400] },
      highValue: { label: "EV Charger / Full Rewire / Fleet", range: [2000, 6000] },
    },
    cpc: { standard: [10, 28], highIntent: [22, 42] },
    leadCost: [45, 85],
    conversionRate: 0.25,
    insights: [
      "EV & hybrid services are the fastest-growing segment in 2026",
      "Most agencies treat auto sparkies like mechanics — differentiate with EV focus",
      "Mobile service keywords ('auto electrician near me') convert highest",
    ],
    targetKeywords: [
      { keyword: "Auto electrician near me", intent: "high", value: "$22–$42 CPC" },
      { keyword: "EV charger installer [Suburb]", intent: "high", value: "$25–$40 CPC" },
      { keyword: "Car electrical repair", intent: "medium", value: "$15–$28 CPC" },
      { keyword: "Mobile auto electrician", intent: "high", value: "$20–$35 CPC" },
      { keyword: "Trailer wiring [Suburb]", intent: "medium", value: "$12–$22 CPC" },
      { keyword: "Vehicle diagnostic service", intent: "low", value: "$10–$20 CPC" },
    ],
  },
  {
    id: "pest-control",
    name: "Pest Control",
    icon: "Bug",
    tagline: "Immediate Response & Termite Protection",
    searchTerms: ["Pest Control", "Termite Inspection", "Pest Exterminator"],
    services: {
      standard: { label: "General Spray (Spiders, Roaches, Ants)", range: [250, 450] },
      highValue: { label: "Termite Barrier / Chemical Reticulation", range: [2500, 5500] },
    },
    cpc: { standard: [12, 28], highIntent: [35, 55] },
    leadCost: [40, 75],
    conversionRate: 0.28,
    insights: [
      "Highest conversion rate of all trades — urgent need drives immediate action",
      "A $250 general spray often leads to a $3,000 termite barrier upsell",
      "'Same Day Service' in ad copy increases click-through by 40%+",
    ],
    targetKeywords: [
      { keyword: "Pest control [Suburb]", intent: "high", value: "$35–$55 CPC" },
      { keyword: "Termite inspection near me", intent: "high", value: "$30–$50 CPC" },
      { keyword: "Termite barrier install", intent: "high", value: "$35–$55 CPC" },
      { keyword: "Cockroach treatment [Suburb]", intent: "medium", value: "$18–$30 CPC" },
      { keyword: "Rat removal near me", intent: "medium", value: "$20–$35 CPC" },
      { keyword: "Pest spray service", intent: "low", value: "$12–$22 CPC" },
    ],
  },
  {
    id: "concreter",
    name: "Concreter",
    icon: "Box",
    tagline: "Driveways, Slabs & Decorative Finishes",
    searchTerms: ["Concreter", "Concreting", "Concrete Driveway"],
    services: {
      standard: { label: "Driveway / Path / Repairs", range: [1500, 4000] },
      highValue: { label: "House Slab / Exposed Aggregate / Commercial", range: [15000, 45000] },
    },
    cpc: { standard: [10, 24], highIntent: [20, 38] },
    leadCost: [45, 90],
    conversionRate: 0.18,
    insights: [
      "Visual proof is the #1 conversion factor — portfolio photos are essential",
      "Exposed aggregate and decorative finishes are the highest-margin services",
      "New housing estates create consistent demand — target growth corridors",
    ],
    targetKeywords: [
      { keyword: "Concreter [Suburb]", intent: "high", value: "$20–$38 CPC" },
      { keyword: "Concrete driveway [Suburb]", intent: "high", value: "$22–$35 CPC" },
      { keyword: "Exposed aggregate [Suburb]", intent: "high", value: "$25–$38 CPC" },
      { keyword: "Concreter near me", intent: "high", value: "$18–$32 CPC" },
      { keyword: "Concrete slab cost", intent: "medium", value: "$12–$24 CPC" },
      { keyword: "Decorative concrete finishes", intent: "low", value: "$10–$20 CPC" },
    ],
  },
];

export interface RegionalMultiplier {
  type: "metro" | "regional" | "rural";
  label: string;
  cpcMultiplier: number;
  jobValueMultiplier: number;
  leadVolumeMultiplier: number;
  travelAdjustment: number;
  competitorDensity: string;
  tip: string;
}

export const regionalMultipliers: Record<string, RegionalMultiplier> = {
  metro: {
    type: "metro",
    label: "Metro / Capital City",
    cpcMultiplier: 1.0,
    jobValueMultiplier: 1.0,
    leadVolumeMultiplier: 1.0,
    travelAdjustment: 0,
    competitorDensity: "High Density — 15+ active advertisers typical",
    tip: "High competition requires a 'Sniper' strategy — focus on long-tail, high-intent keywords to lower CPC.",
  },
  regional: {
    type: "regional",
    label: "Regional / Coastal",
    cpcMultiplier: 0.8,
    jobValueMultiplier: 0.95,
    leadVolumeMultiplier: 0.7,
    travelAdjustment: 0.15,
    competitorDensity: "Medium Density — 5-10 active advertisers typical",
    tip: "Lower competition means your Ad Dollar goes 30% further than in the CBD.",
  },
  rural: {
    type: "rural",
    label: "Rural / Outer Suburbs",
    cpcMultiplier: 0.6,
    jobValueMultiplier: 0.85,
    leadVolumeMultiplier: 0.4,
    travelAdjustment: 0.25,
    competitorDensity: "Low Density — 2-4 active advertisers typical",
    tip: "Market Leadership Opportunity: Low competition allows for 'Market Domination' at a lower cost per lead.",
  },
};

export const stateRegulators: Record<string, string> = {
  NSW: "Fair Trading NSW",
  VIC: "Victorian Building Authority (VBA)",
  QLD: "Queensland Building & Construction Commission (QBCC)",
  WA: "Building Commission WA",
  SA: "Consumer & Business Services SA",
  TAS: "Consumer, Building & Occupational Services TAS",
  ACT: "Access Canberra",
  NT: "NT Building Advisory Services",
};

export const australianStates = ["NSW", "VIC", "QLD", "WA", "SA", "TAS", "ACT", "NT"];
