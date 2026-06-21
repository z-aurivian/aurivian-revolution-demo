// Strategic framework — Revolution Medicines

export const ISP_PILLARS = [
  {
    id: 'p1',
    title: 'Establish daraxonrasib as the new standard of care in RAS-mutant PDAC',
    description:
      'Translate RASolute 302 ASCO 2026 plenary OS/PFS data into guideline adoption and community oncologist practice change for 2L PDAC, while building the 1L narrative.',
  },
  {
    id: 'p2',
    title: 'Define the RAS(ON) multi-selective paradigm in NSCLC',
    description:
      'Position multi-selective inhibition as the preferred approach in RAS-mutant NSCLC — addressing the G12C-selective vs. multi-selective debate and broadening beyond G12C to the full RAS mutation spectrum.',
  },
  {
    id: 'p3',
    title: 'Accelerate the pipeline narrative — G12D, G12C doublet, and next-gen assets',
    description:
      'Build KOL conviction around zoldonrasib in G12D PDAC/NSCLC, the daraxonrasib + elironrasib doublet, and the broader mutant-selective platform (G12V, Q61H, G13C).',
  },
];

export const MEDICAL_OBJECTIVES = [
  {
    id: 'MO1',
    name: 'RASolute 302 data adoption',
    description:
      'Drive KOL alignment and community oncologist practice change based on the landmark 2L PDAC OS/PFS data from the ASCO 2026 plenary.',
    ispPillarRef: 'p1',
  },
  {
    id: 'MO2',
    name: 'Community oncologist readiness',
    description:
      'Prepare community oncology centers for RAS testing infrastructure, patient selection, and MSL engagement ahead of daraxonrasib regulatory filing.',
    ispPillarRef: 'p1',
  },
  {
    id: 'MO3',
    name: 'NSCLC paradigm shaping',
    description:
      'Clarify the clinical positioning of multi-selective vs. G12C-selective inhibition and expand the NSCLC narrative beyond G12C to all RAS mutation drivers.',
    ispPillarRef: 'p2',
  },
  {
    id: 'MO4',
    name: 'Pipeline evidence building',
    description:
      'Generate and disseminate early-phase data for zoldonrasib (G12D), elironrasib doublet, and next-gen assets to sustain long-term KOL investment in the platform.',
    ispPillarRef: 'p3',
  },
  {
    id: 'MO5',
    name: '1L PDAC pathway development',
    description:
      'Shape the scientific narrative for frontline PDAC expansion — building on RASolute 303 and adjuvant RASolute 304 data as they mature.',
    ispPillarRef: 'p1',
  },
];

export const LISTENING_PRIORITIES = [
  {
    id: 'LP1',
    name: 'RASolute 302 data interpretation',
    moRef: 'MO1',
    kiq: 'How are PDAC oncologists interpreting the OS and PFS data from RASolute 302, and what questions remain about the magnitude of benefit?',
    kits: ['RASolute 302 outcomes brief', 'ASCO plenary recap deck'],
  },
  {
    id: 'LP2',
    name: 'Community RAS testing readiness',
    moRef: 'MO2',
    kiq: 'What are the barriers to comprehensive RAS mutation testing in community oncology settings, and how do they affect daraxonrasib patient identification?',
    kits: ['RAS testing algorithm', 'Community oncology readiness guide'],
  },
  {
    id: 'LP3',
    name: 'Multi-selective vs. selective debate',
    moRef: 'MO3',
    kiq: 'How are NSCLC oncologists deciding between multi-selective RAS(ON) inhibition and G12C-selective agents, and what data would drive a clear preference?',
    kits: ['Mechanism comparison tool', 'NSCLC mutation landscape map'],
  },
  {
    id: 'LP4',
    name: 'G12D pipeline positioning',
    moRef: 'MO4',
    kiq: 'What is KOL sentiment toward zoldonrasib in G12D PDAC and NSCLC, and how are they comparing it to the broader daraxonrasib multi-selective data?',
    kits: ['Zoldonrasib data summary', 'G12D epidemiology brief'],
  },
  {
    id: 'LP5',
    name: '1L PDAC readiness',
    moRef: 'MO5',
    kiq: 'What data would oncologists need to see from RASolute 303 and 304 to consider shifting daraxonrasib to frontline PDAC in their practice?',
    kits: ['RASolute 303 study design brief', 'Frontline PDAC landscape review'],
  },
];

export const COVERAGE_TARGETS = {
  MO1: 'Sufficient',
  MO2: 'Low',
  MO3: 'Low',
  MO4: 'Gap',
  MO5: 'Gap',
};
