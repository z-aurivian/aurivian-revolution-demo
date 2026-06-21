// Congress Intelligence Data — Revolution Medicines
// ASCO 2026 and AACR 2026 are the primary data sources.

import { PRODUCT_OPTIONS } from '../config';

// Legacy rag.js / auriApi.js shape — stub exports required by those modules
export const MOCK_THEMES = [
  { theme: 'RASolute 302 plenary impact', mentions: 412, sentiment: 0.81 },
  { theme: 'RAS testing infrastructure gap', mentions: 187, sentiment: 0.44 },
  { theme: 'Multi-selective vs G12C-selective debate', mentions: 134, sentiment: 0.41 },
  { theme: '1L PDAC expansion readiness', mentions: 143, sentiment: 0.74 },
  { theme: 'Payer access pre-NDA', mentions: 98, sentiment: 0.29 },
];

export const MOCK_COMPETITOR_VISIBILITY = [
  { product: 'Daraxonrasib', share: 51, mentions: 412 },
  { product: 'Sotorasib', share: 18, mentions: 156 },
  { product: 'Adagrasib', share: 16, mentions: 134 },
  { product: 'Zoldonrasib', share: 11, mentions: 89 },
  { product: 'Divarasib', share: 4, mentions: 34 },
];

export const MOCK_TRIALS = [];

export const MOCK_SOCIAL = {
  totalSignals: 2847,
  positive: 68,
  negative: 12,
};

export const DATA_MODULES = [
  { id: 'abstracts', label: 'Abstracts', iconId: 'FileText', description: 'Conference abstracts and oral presentations' },
  { id: 'social',    label: 'Social',    iconId: 'MessageCircle', description: 'X, LinkedIn, and conference backchannel signals' },
  { id: 'activity',  label: 'Activity',  iconId: 'Activity', description: 'MSL field interaction intelligence' },
];

export function getIngestionForCongress(congressId) {
  return INGESTION_BY_CONGRESS[congressId] || {
    agendas: 0, abstracts: 0, posters: 0, speakers: 0, publicationsLinked: 0, sessions: [], themes: [],
  };
}

const productNames = PRODUCT_OPTIONS.map(p => p.name);

export const MOCK_TREND_SENTIMENT = {
  timeline: ['Post-AACR 2025', 'Q3 2025', 'Q4 2025', 'AACR 2026', 'ASCO 2026'],
  scientific: [
    { period: 'Post-AACR 2025',  [productNames[0]]: 61, [productNames[1]]: 54, [productNames[2]]: 48, Sotorasib: 62 },
    { period: 'Q3 2025',         [productNames[0]]: 64, [productNames[1]]: 57, [productNames[2]]: 51, Sotorasib: 60 },
    { period: 'Q4 2025',         [productNames[0]]: 69, [productNames[1]]: 59, [productNames[2]]: 55, Sotorasib: 59 },
    { period: 'AACR 2026',       [productNames[0]]: 74, [productNames[1]]: 62, [productNames[2]]: 59, Sotorasib: 57 },
    { period: 'ASCO 2026',       [productNames[0]]: 91, [productNames[1]]: 66, [productNames[2]]: 63, Sotorasib: 54 },
  ],
  social: [
    { period: 'Post-AACR 2025',  [productNames[0]]: 55, [productNames[1]]: 48, [productNames[2]]: 41, Sotorasib: 57 },
    { period: 'Q3 2025',         [productNames[0]]: 59, [productNames[1]]: 51, [productNames[2]]: 44, Sotorasib: 55 },
    { period: 'Q4 2025',         [productNames[0]]: 63, [productNames[1]]: 54, [productNames[2]]: 48, Sotorasib: 54 },
    { period: 'AACR 2026',       [productNames[0]]: 71, [productNames[1]]: 58, [productNames[2]]: 52, Sotorasib: 51 },
    { period: 'ASCO 2026',       [productNames[0]]: 88, [productNames[1]]: 62, [productNames[2]]: 57, Sotorasib: 48 },
  ],
};

export const MOCK_SCIENTIFIC_ARTICLES = [
  { title: 'RASolute 302: Daraxonrasib vs. investigator choice in 2L RAS-mutant PDAC — pivotal Phase 3 results', journalOrCongress: 'ASCO 2026 Plenary', date: '2026-05', product: productNames[0], sentiment: 'positive' },
  { title: 'First-line PDAC Phase 1/2 data for daraxonrasib: updated results', journalOrCongress: 'AACR 2026', date: '2026-04', product: productNames[0], sentiment: 'positive' },
  { title: 'RMC-9805 (zoldonrasib) in KRAS G12D NSCLC: updated Phase 1/2', journalOrCongress: 'AACR 2026', date: '2026-04', product: productNames[2], sentiment: 'positive' },
  { title: 'Multi-selective RAS(ON) inhibition — mechanistic rationale and clinical implications', journalOrCongress: 'Nature Medicine', date: '2026-03', product: productNames[0], sentiment: 'positive' },
  { title: 'KRAS G12C resistance to sotorasib: co-mutation landscape and implications for next-generation inhibitors', journalOrCongress: 'JCO', date: '2026-02', product: productNames[1], sentiment: 'neutral' },
  { title: 'Daraxonrasib in RAS-mutant NSCLC: subgroup analysis by mutation variant', journalOrCongress: 'ASCO 2026 Abstract', date: '2026-05', product: productNames[0], sentiment: 'positive' },
];

export const MOCK_SOCIAL_TREND_SOURCES = [
  { platform: 'X (Twitter)', author: 'Dr. Eileen O\'Reilly', topic: 'RASolute 302 plenary — "unprecedented results"', date: '2026-05', product: productNames[0], sentiment: 'positive' },
  { platform: 'X (Twitter)', author: 'Dr. Zev Wainberg', topic: 'Multi-selective RAS(ON) paradigm post-ASCO', date: '2026-06', product: productNames[0], sentiment: 'positive' },
  { platform: 'LinkedIn', author: 'Dr. Manuel Hidalgo', topic: 'JCO editorial on RASolute 302 — defining a new SoC in PDAC', date: '2026-06', product: productNames[0], sentiment: 'positive' },
  { platform: 'X (Twitter)', author: 'Dr. Hossein Borghaei', topic: 'NSCLC multi-selective vs. selective skepticism', date: '2026-06', product: productNames[1], sentiment: 'negative' },
  { platform: 'LinkedIn', author: 'Dr. Pasi Jänne', topic: 'RAS(ON) doublet combination strategy — translational perspective', date: '2026-06', product: productNames[1], sentiment: 'positive' },
];

export const MOCK_INGESTION = {
  agendas: 18,
  abstracts: 2341,
  posters: 847,
  speakers: 512,
  publicationsLinked: 2108,
  sessions: [
    { title: 'RASolute 302 Plenary: Daraxonrasib in Previously Treated Metastatic PDAC', track: 'Plenary Session', products: [productNames[0]] },
    { title: 'RAS Mutations in Solid Tumors: Multi-Selective vs. Variant-Selective Inhibition', track: 'Targeted Therapy', products: [productNames[0], productNames[1], productNames[2]] },
    { title: 'KRAS G12C NSCLC: Beyond Sotorasib and Adagrasib — Next-Generation Inhibitors', track: 'Thoracic Oncology', products: [productNames[1]] },
    { title: 'PDAC 2026: Frontline Strategies and Adjuvant Landscape', track: 'GI Oncology', products: [productNames[0], productNames[2]] },
    { title: 'RAS(ON) Inhibitor Combinations and Resistance Mechanisms', track: 'Drug Resistance', products: [productNames[0], productNames[1]] },
  ],
};

const MOCK_THEMES_ASCO_2026 = [
  { id: 'theme-0', name: 'RASolute 302 Plenary Impact', momentum: 98, summary: '"Unprecedented" OS/PFS data for daraxonrasib in 2L PDAC dominating post-ASCO KOL discussion. Signal velocity at historic peak.' },
  { id: 'theme-1', name: 'RAS Testing Infrastructure Gap', momentum: 91, summary: 'Community oncologist excitement offset by ~40% lacking comprehensive RAS profiling. Testing infrastructure is the #1 adoption bottleneck.' },
  { id: 'theme-2', name: 'Multi-Selective vs G12C-Selective Debate', momentum: 86, summary: 'Borghaei-led NSCLC skepticism about multi-selective approach vs G12C-selective in KRAS G12C-dominant setting. Active and unresolved.' },
  { id: 'theme-3', name: '1L PDAC Horizon (RASolute 303)', momentum: 81, summary: 'PDAC KOLs accelerating 1L planning conversations. RASolute 303 data timeline is the most-asked question among academic PDAC specialists.' },
  { id: 'theme-4', name: 'Payer Access Pre-NDA', momentum: 74, summary: 'Early payer conversations questioning net clinical benefit in PDAC. HEOR engagement needed before NDA filing to shape coverage framing.' },
];

const MOCK_THEMES_AACR_2026 = [
  { id: 'theme-0', name: 'Daraxonrasib 1L PDAC Phase 1/2 Update', momentum: 88, summary: 'Updated first-line PDAC data reinforcing the mechanistic story for multi-selective RAS(ON) inhibition. Precedes RASolute 302 plenary confirmation.' },
  { id: 'theme-1', name: 'Zoldonrasib G12D NSCLC Signal', momentum: 79, summary: 'G12D-selective data in NSCLC driving interest in whether variant-selective provides safety or efficacy edge over multi-selective.' },
  { id: 'theme-2', name: 'Preclinical RAS(ON) Pipeline', momentum: 71, summary: 'Catalytic RAS(ON) inhibitors and next-gen assets (G12V/Q61H/G13C) positioned for future clinical development. Mechanism-of-action enthusiasm is high.' },
  { id: 'theme-3', name: 'G12C Resistance Landscape', momentum: 68, summary: 'Sotorasib and adagrasib resistance co-mutation data surfacing. Creates opportunity for elironrasib and doublet narrative as next-generation solutions.' },
];

export const INGESTION_BY_CONGRESS = {
  'asco-2026': {
    agendas: 18,
    abstracts: 2341,
    posters: 847,
    speakers: 512,
    publicationsLinked: 2108,
    sessions: [
      { title: 'RASolute 302: Daraxonrasib in 2L PDAC — Pivotal Phase 3 Plenary', track: 'Plenary Session', products: [productNames[0]] },
      { title: 'RAS Mutation Landscape in Solid Tumors 2026', track: 'Targeted Therapy', products: [productNames[0], productNames[1], productNames[2]] },
      { title: 'KRAS G12C NSCLC: Next-Generation Inhibitors and Combinations', track: 'Thoracic Oncology', products: [productNames[1]] },
    ],
    get themes() { return MOCK_THEMES_ASCO_2026; },
  },
  'aacr-2026': {
    agendas: 14,
    abstracts: 1876,
    posters: 634,
    speakers: 421,
    publicationsLinked: 1432,
    sessions: [
      { title: 'Daraxonrasib 1L PDAC Phase 1/2: Updated Results', track: 'GI Oncology', products: [productNames[0]] },
      { title: 'Zoldonrasib in KRAS G12D NSCLC — Phase 1/2 Update', track: 'Thoracic Oncology', products: [productNames[2]] },
      { title: 'Catalytic RAS(ON) Inhibitors — Preclinical Pipeline', track: 'Basic Science', products: [] },
    ],
    get themes() { return MOCK_THEMES_AACR_2026; },
  },
  'trend-aacr-asco': {
    agendas: 0,
    abstracts: 0,
    posters: 0,
    speakers: 0,
    publicationsLinked: 0,
    sessions: [],
    get themes() { return []; },
  },
};

export function getDemoContext(congressId, productId) {
  const themesByProduct = {
    daraxonrasib: MOCK_THEMES_ASCO_2026,
    elironrasib: [
      { id: 'theme-0', name: 'G12C-Selective vs Multi-Selective NSCLC Debate', momentum: 86, summary: 'Borghaei skepticism is driving field debate. Elironrasib doublet strategy is the most-discussed clinical approach among NSCLC KOLs who remain open to combination strategies.' },
      { id: 'theme-1', name: 'Doublet Combination Strategy (Daraxonrasib + Elironrasib)', momentum: 79, summary: 'KRAS G12C NSCLC combination interest growing among academic thoracic oncologists. Jänne\'s translational work on resistance mechanisms is the scientific anchor.' },
    ],
    zoldonrasib: [
      { id: 'theme-0', name: 'G12D Prevalence in PDAC and NSCLC', momentum: 77, summary: 'G12D-selective positioning gaining traction. ~33% of PDAC and ~14% of RAS-mutant NSCLC are G12D — meaningful patient population for zoldonrasib monotherapy or combination.' },
      { id: 'theme-1', name: 'RASolute 305 Initiation (Zoldonrasib + Chemo in 1L G12D PDAC)', momentum: 71, summary: 'Phase 3 initiation generating KOL interest in G12D-specific PDAC evidence generation.' },
    ],
  };

  return {
    congressId,
    productId,
    themes: themesByProduct[productId] || MOCK_THEMES_ASCO_2026,
    articles: MOCK_SCIENTIFIC_ARTICLES.filter(a => a.product === PRODUCT_OPTIONS.find(p => p.id === productId)?.name || !productId),
    trendSentiment: MOCK_TREND_SENTIMENT,
    socialSources: MOCK_SOCIAL_TREND_SOURCES,
    ingestion: INGESTION_BY_CONGRESS[congressId] || MOCK_INGESTION,
  };
}
