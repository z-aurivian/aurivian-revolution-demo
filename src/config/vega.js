// VEGA — Strategic Analytics — Revolution Medicines

export const VEGA_AWARENESS_PROGRESSION = {
  benchmark: '29% of targeted HCPs achieving sustained practice change vs 22% industry average — +32% outperformance. Fastest progression: Aware → Knowledgeable post-ASCO plenary. Primary bottleneck: RAS testing infrastructure preventing Knowledgeable → Intent conversion in community settings.',
  stages: [
    { stage: 'Sustained practice change', hcps: 187,  pctTotal: 12, vsQ4: '+8%'  },
    { stage: 'Actively changing practice', hcps: 453,  pctTotal: 29, vsQ4: '+17%' },
    { stage: 'Intent to change',           hcps: 721,  pctTotal: 46, vsQ4: '+22%' },
    { stage: 'Knowledgeable',              hcps: 1189, pctTotal: 76, vsQ4: '+31%' },
    { stage: 'Aware only',                 hcps: 342,  pctTotal: 22, vsQ4: '-9%'  },
  ],
};

export const VEGA_INTERACTION_QUALITY = {
  insight: 'Post-ASCO surge: interaction volume up 40%+ across all regions but insight quality is lagging in the South region. Community oncologist conversations generating high engagement but low KIQ alignment — most discussions are data-reactive rather than strategically guided. Recommended: KIQ refresher briefing for South and Midwest MSLs.',
  rows: [
    { msl: 'Dr. Sarah Chen',      region: 'Northeast', interactions: 54, vsTarget: '+12%', quality: 8.9, insightRate: 84, overall: 'Excellent' },
    { msl: 'Dr. Marcus Webb',     region: 'Southeast',  interactions: 61, vsTarget: '+28%', quality: 6.2, insightRate: 41, overall: 'Quality gap' },
    { msl: 'Dr. Priya Anand',     region: 'West Coast', interactions: 49, vsTarget: '+9%',  quality: 9.1, insightRate: 91, overall: 'Excellent' },
    { msl: 'Dr. James Holloway',  region: 'Midwest',    interactions: 43, vsTarget: '-4%',  quality: 7.4, insightRate: 68, overall: 'On track' },
    { msl: 'Dr. Lauren Park',     region: 'South',      interactions: 37, vsTarget: '-18%', quality: 5.8, insightRate: 34, overall: 'Needs support' },
    { msl: 'Dr. David Morales',   region: 'Mid-Atlantic', interactions: 46, vsTarget: '+2%', quality: 8.1, insightRate: 76, overall: 'On track' },
  ],
};

export const VEGA_ENGAGEMENT_GAPS = [
  { kol: 'Dr. Hossein Borghaei', tier: 'Tier 1', lastContact: '2026-05-15', gap: '5+ weeks', action: 'Re-engage urgently — divergence KOL risk' },
  { kol: 'Dr. Mark Socinski',    tier: 'Tier 1', lastContact: '2026-06-01', gap: '3 weeks',  action: 'Schedule — awaiting RASOlve 301 data' },
  { kol: 'Dr. David Gandara',    tier: 'Tier 2', lastContact: '2026-05-20', gap: '4 weeks',  action: 'Plan interaction' },
  { kol: 'Dr. Scott Kopetz',     tier: 'Tier 1', lastContact: '2026-05-18', gap: '5 weeks',  action: 'Engage on G12D CRC signal' },
  { kol: 'Dr. Jennifer Whisenant', tier: 'Tier 2', lastContact: '2026-06-07', gap: '2 weeks', action: 'On track' },
];

export const VEGA_SHARE_OF_VOICE = {
  watchArea: 'Share of voice at historic peak post-ASCO 2026 plenary. Competitor signal declining. Window is 4–6 weeks before competitor narrative reclaims share — field engagement must capitalize now.',
  rows: [
    { source: 'Congress abstracts (ASCO 2026)', us: '51%', compA: '18%', compB: '21%', compC: '10%', trend: 'up' },
    { source: 'Peer-reviewed publications (6m)', us: '34%', compA: '27%', compB: '24%', compC: '15%', trend: 'up' },
    { source: 'KOL active endorsements',         us: '48%', compA: '21%', compB: '19%', compC: '12%', trend: 'up' },
    { source: 'Citation index (vs competitors)', us: '3.1×', compA: '1.6×', compB: '1.9×', compC: '0.8×', trend: 'up' },
    { source: 'Social / digital mentions',       us: '43%', compA: '18%', compB: '26%', compC: '13%', trend: 'up' },
  ],
};

export const VEGA_SENTIMENT_VELOCITY = [
  { kol: 'Dr. Eileen M. O\'Reilly', score: 91, change30d: '+6.1', velocity: '+2.1 ↑↑', interpretation: 'Strong acceleration — PI and public champion. Leverage for guideline and editorial activity.' },
  { kol: 'Dr. Hossein Borghaei',    score: 49, change30d: '-24', velocity: '-8.0 ↓↓', interpretation: 'Rapid decline — divergence KOL. Urgent MSL re-engagement required to prevent competitor capture.' },
  { kol: 'Dr. Pasi Jänne',          score: 71, change30d: '+4.2', velocity: '+1.4 ↑',  interpretation: 'Positive momentum — translational partnership opportunity. Combination doublet is the right entry point.' },
  { kol: 'Dr. Mark Socinski',       score: 67, change30d: '-1.1', velocity: '-0.4 ⚠',  interpretation: 'Slight decline — waiting for NSCLC-specific data. Maintain cadence; don\'t push before RASOlve 301.' },
];

export const VEGA_CARE_GAP_CLOSURE = [
  { gap: 'Comprehensive RAS testing rate',  linkedMO: 'MO2', baseline: '23%', current: '31% (+8pts)',  patientsImpacted: '~1,200 additional patients profiled across community centers' },
  { gap: 'RAS-variant documentation in EMR', linkedMO: 'MO2', baseline: '41%', current: '49% (+8pts)', patientsImpacted: '~890 additional patients with actionable variant on chart' },
  { gap: 'Clinical trial referral rate (RAS+)', linkedMO: 'MO1', baseline: '8%', current: '14% (+6pts)', patientsImpacted: '~310 additional patients referred to RASolute sites' },
];

export const VEGA_ROMI = {
  netValueCreated: '$18.4M',
  roiPct: '214%',
  returnPerPound: '$3.14',
  rows: [
    { category: 'Trial enrollment attributed to MA field activity', value: '$9.2M', methodology: 'RASolute enrollment acceleration at MA-engaged sites vs non-engaged — 2.4× enrollment rate difference' },
    { category: 'Pipeline KOL investment (zoldonrasib, doublet)', value: '$4.8M', methodology: 'Estimated value of KOL scientific exchange and publication activity supporting pipeline narrative' },
    { category: 'Competitor revenue protection (NSCLC)', value: '$6.7M', methodology: 'Estimated NSCLC prescribing prevented from shifting to G12C-selective agents based on MSL scientific exchange outcomes' },
    { category: 'Total investment', value: '-$8.6M', methodology: 'Full Medical Affairs budget — field team, advisory boards, congress, content, HEOR' },
  ],
};

export const VEGA_IMPACT_INDEX = {
  overall: 78,
  vsQ4: '+14',
  target: 75,
  dimensions: [
    { dim: 'Execution excellence',      score: 83, commentary: 'Post-ASCO surge well-managed — field interactions, ASCO follow-up materials, and advisory board debriefs all on track' },
    { dim: 'External ecosystem impact',  score: 81, commentary: 'Historic share of voice peak at ASCO 2026. KOL endorsement rate at 48% vs 21% for nearest competitor.' },
    { dim: 'HCP practice change',        score: 72, commentary: '29% sustained practice change vs 22% industry average — strong but RAS testing gap is the primary bottleneck to acceleration' },
    { dim: 'Patient care gap closure',   score: 74, commentary: 'RAS testing and clinical trial referral rates improving but starting from a low base. Execution of A1/A2 is critical.' },
    { dim: 'Internal ecosystem impact',  score: 79, commentary: 'HEOR and Market Access collaboration strong post-ASCO. MO4/MO5 pipeline gaps are the primary internal alignment opportunity.' },
  ],
};
