// Therapeutic area — Demo Brief §3.

export const THERAPEUTIC_AREA = {
  name: 'Oncology',
  subIndications: ['2L RAS-mutant PDAC', '1L PDAC', 'RAS-mutant NSCLC', 'KRAS G12C NSCLC', 'KRAS G12D'],
  competitors: [
    { name: 'Sotorasib', company: 'Amgen', moa: 'KRAS G12C-selective (ON state)', posture: 'Primary G12C competitor in NSCLC and CRC' },
    { name: 'Adagrasib', company: 'Mirati/BMS', moa: 'KRAS G12C-selective (OFF state)', posture: 'Second G12C agent; NSCLC and CRC indications' },
    { name: 'Divarasib', company: 'Genentech/Roche', moa: 'KRAS G12C-selective', posture: 'Phase 3 KRYSTAL-like program; watch for combination data' },
  ],
  advocacyOrgs: [
    'Pancreatic Cancer Action Network (PanCAN)',
    'Lung Cancer Research Foundation (LCRF)',
    'GO2 Foundation for Lung Cancer',
  ],
};
