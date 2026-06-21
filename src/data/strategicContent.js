// Strategic content — Revolution Medicines

export const STRATEGIC_IMPERATIVES = [
  { name: 'RASolute 302 field adoption', category: 'Launch Readiness', description: 'Translate ASCO 2026 plenary OS/PFS data into community oncologist practice change and guideline adoption for 2L RAS-mutant PDAC.' },
  { name: 'RAS testing infrastructure', category: 'Patient Access', description: 'Build comprehensive RAS mutation testing capability in community oncology centers ahead of daraxonrasib regulatory filing.' },
  { name: 'NSCLC paradigm shaping', category: 'Scientific Leadership', description: 'Establish multi-selective RAS(ON) inhibition as the preferred approach in RAS-mutant NSCLC against G12C-selective alternatives.' },
  { name: '1L PDAC readiness', category: 'Pipeline', description: 'Shape frontline PDAC narrative building on RASolute 303 and 304 as data mature; position daraxonrasib for first-line standard-of-care status.' },
];

export const COMPETITIVE_LANDSCAPE = [
  { name: 'Sotorasib', genericName: 'Lumakras', company: 'Amgen', summary: 'KRAS G12C-selective inhibitor approved in NSCLC and CRC. Faces resistance at 12 months. Does not address non-G12C variants.', strategicThreatLevel: 'Medium' },
  { name: 'Adagrasib', genericName: 'Krazati', company: 'Mirati/BMS', summary: 'KRAS G12C-selective with CNS penetration. Doublet combinations in trials. Does not address non-G12C variants.', strategicThreatLevel: 'Medium' },
  { name: 'Divarasib', genericName: 'RO7994075', company: 'Roche/Genentech', summary: 'Next-generation KRAS G12C-selective in Phase 1/2 with strong ORR signals. Potential future NSCLC G12C competitor.', strategicThreatLevel: 'Medium' },
];

export const COMPLEMENT_BIOLOGY = null;

export const PIPELINE_INTELLIGENCE = [
  { name: 'RMC-5127 (G12V-selective)', mechanism: 'RAS(ON) KRAS G12V-selective inhibitor', stage: 'Phase 1/1b', indication: 'PDAC, CRC, NSCLC (G12V-mutant)', significance: 'Second most common RAS driver — addresses sizable unmet need beyond G12C and G12D.' },
  { name: 'RMC-0708 (Q61H-selective)', mechanism: 'RAS(ON) Q61H-selective inhibitor', stage: 'Preclinical/discovery', indication: 'Q61H-mutant solid tumors', significance: 'Expands mutant-selective RAS coverage beyond G12 variants.' },
  { name: 'RMC-8839 (G13C-selective)', mechanism: 'RAS(ON) G13C-selective inhibitor', stage: 'Preclinical/discovery', indication: 'G13C-mutant tumors', significance: 'Complements G12 and Q61 portfolio for broader hotspot coverage.' },
];
