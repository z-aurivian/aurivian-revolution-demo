// Auri canned Q&A — Revolution Medicines

export const AURI_PROMPTS = [
  {
    prompt: 'What\'s the biggest risk to daraxonrasib adoption coming out of ASCO?',
    response:
      'Two risks are load-bearing right now:\n\n1. **RAS testing infrastructure gap** (AI1) — ~40% of community centers lack comprehensive RAS profiling beyond KRAS G12C. Patients who qualify for daraxonrasib won\'t be identified unless we fix the testing pathway. This is the single highest-leverage MO2 action and A1 (RAS testing guide) is already Started.\n\n2. **OS/PFS narrative confusion** (AI2) — community oncologists need a clearer, defensible story on endpoint hierarchy. A3 (MSL endpoint toolkit) is Started but needs acceleration before the post-ASCO window closes (AI7 signal velocity is at peak for ~4–6 more weeks).',
    cites: [
      { type: 'insight', id: 'AI1' },
      { type: 'insight', id: 'AI2' },
      { type: 'insight', id: 'AI7' },
      { type: 'action',  id: 'A1'  },
      { type: 'action',  id: 'A3'  },
    ],
  },
  {
    prompt: 'How should we respond to Dr. Borghaei\'s NSCLC skepticism?',
    response:
      'Borghaei\'s position (AI3) is principled — he\'s asking for G12C-specific subgroup data within RASolute 301 that wasn\'t fully surfaced at ASCO. His score has moved 73→49 in 30 days, which puts him at competitive capture risk.\n\nRecommended approach: **don\'t counter publicly**. Request a direct MSL-led scientific exchange (A5 — Proposed, no owner yet) focused on the NSCLC mechanism data and the G12C subgroup readout. His influence in thoracic oncology means a re-engaged Borghaei is worth significantly more than a neutralized one. A6 (multi-selective vs. G12C-selective comparison tool) would arm that conversation.',
    cites: [
      { type: 'insight', id: 'AI3' },
      { type: 'action',  id: 'A5'  },
      { type: 'action',  id: 'A6'  },
    ],
  },
  {
    prompt: 'Where are the biggest gaps in our current medical affairs coverage?',
    response:
      'Three MO-level gaps:\n\n• **MO4 (Pipeline evidence building)** — Gap. Zero qualified insights this cycle on zoldonrasib positioning or doublet strategy. A9 (G12D exchange guide) has no owner assigned.\n• **MO5 (1L PDAC pathway)** — Gap. AI5 shows KOLs are asking about RASolute 303 timelines but we have no formal briefing prepared (A8 is Proposed).\n• **MO3 (NSCLC paradigm)** — Low. The multi-selective vs. selective debate is live but our mechanistic comparison materials don\'t exist yet (A6 Proposed, no owner).',
    cites: [
      { type: 'mo',      id: 'MO4' },
      { type: 'mo',      id: 'MO5' },
      { type: 'mo',      id: 'MO3' },
      { type: 'insight', id: 'AI5' },
      { type: 'action',  id: 'A8'  },
      { type: 'action',  id: 'A9'  },
    ],
  },
  {
    prompt: 'Summarise the most important signals from ASCO 2026.',
    response:
      'ASCO 2026 was a defining moment for the RAS(ON) field. Three headline signals:\n\n1. **RASolute 302 plenary** — "unprecedented" and "stunning" were the organic KOL descriptors (AI7). Social voice is at peak. OS/PFS data are driving genuine excitement in both academic and community oncology, though the community readiness gap is widening (AI1).\n\n2. **OS/PFS endpoint debate** — Not every community oncologist left ASCO with the same interpretation. The endpoint hierarchy narrative needs to be standardized fast (AI2 — 3× recurrence, Validated).\n\n3. **Borghaei NSCLC signal** — The most strategically important negative signal from the congress. A top thoracic oncologist publicly questioning the NSCLC case for multi-selective. Action needed before this hardens into a field narrative (AI3).',
    cites: [
      { type: 'insight', id: 'AI7' },
      { type: 'insight', id: 'AI1' },
      { type: 'insight', id: 'AI2' },
      { type: 'insight', id: 'AI3' },
    ],
  },
  {
    prompt: 'What should our MSL field priorities be for the next 6 weeks?',
    response:
      'The post-ASCO window is the highest-leverage period before competitor narrative reclaims share of voice. Prioritized MSL actions:\n\n**Week 1–2 (critical):**\n- Distribute the RASolute 302 endpoint toolkit (A3 — accelerate from Started to complete)\n- Identify and flag community centers with RAS testing gaps (feeds A1 and A2)\n\n**Week 3–4:**\n- Borghaei re-engagement via MSL scientific exchange (A5 — assign an owner immediately)\n- Initiate HEOR payer engagement (A7 — Started, needs acceleration)\n\n**Week 5–6:**\n- Deploy community oncology ASCO follow-up deck (A4 — Accepted)\n- Brief top PDAC KOLs on RASolute 303 timeline (A8)',
    cites: [
      { type: 'action', id: 'A3' },
      { type: 'action', id: 'A1' },
      { type: 'action', id: 'A5' },
      { type: 'action', id: 'A7' },
      { type: 'action', id: 'A4' },
      { type: 'action', id: 'A8' },
    ],
  },
];

export const SUGGESTED_PROMPTS = [
  'What\'s the biggest risk to daraxonrasib adoption coming out of ASCO?',
  'How should we respond to Dr. Borghaei\'s NSCLC skepticism?',
  'Where are the biggest gaps in our current medical affairs coverage?',
  'Summarise the most important signals from ASCO 2026.',
  'What should our MSL field priorities be for the next 6 weeks?',
];
