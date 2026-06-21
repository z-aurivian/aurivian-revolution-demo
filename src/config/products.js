// Portfolio — Revolution Medicines RAS(ON) platform

export const PRODUCT_OPTIONS = [
  {
    id: 'daraxonrasib',
    name: 'Daraxonrasib',
    generic: 'RMC-6236',
    indications: ['2L PDAC', '1L PDAC', 'RAS-mutant NSCLC'],
  },
  {
    id: 'elironrasib',
    name: 'Elironrasib',
    generic: 'RMC-6291',
    indications: ['KRAS G12C NSCLC'],
  },
  {
    id: 'zoldonrasib',
    name: 'Zoldonrasib',
    generic: 'RMC-9805',
    indications: ['KRAS G12D PDAC', 'KRAS G12D NSCLC'],
  },
];

// RAS(ON) multi-selective platform lens
export const PLATFORM_LENS = {
  name: 'RAS(ON) Platform',
  description:
    'Mutant-selective RAS(ON) inhibitors — targeting the active GTP-bound state across G12, G13, and Q61 variants. Daraxonrasib is multi-selective; elironrasib and zoldonrasib are variant-selective.',
  appliesToProducts: ['daraxonrasib', 'elironrasib', 'zoldonrasib'],
};
