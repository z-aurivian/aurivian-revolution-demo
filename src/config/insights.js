// Actionable insights — Revolution Medicines

export const INSIGHTS = [
  {
    id: 'AI1',
    title: 'ASCO plenary data generating excitement but RAS testing gaps threaten adoption',
    priority: 'High',
    lpRefs: ['LP1', 'LP2'], moRefs: ['MO1', 'MO2'],
    recurrence: 4,
    recency: '2026-06',
    summary:
      'Community oncologists are energized by the RASolute 302 OS/PFS data but lack RAS comprehensive testing infrastructure. MSL field reports show ~40% of community centers run KRAS G12/13 single-variant panels only — missing Q61 and multi-variant RAS profiling needed for daraxonrasib patient identification.',
    sourceInsights: [
      { type: 'MSL interaction', role: 'Community oncologist', location: 'Houston, TX', quote: 'I heard the ASCO plenary — stunning data. But I don\'t even know which patients in my practice have a RAS variant beyond G12C right now.', date: '2026-06-04' },
      { type: 'Congress debrief', role: 'PDAC specialist', location: 'ASCO 2026', quote: 'The data are landmark but the infrastructure for multi-variant RAS testing in community oncology is 12–18 months behind where it needs to be.', date: '2026-06-01' },
      { type: 'Ad board', role: 'Medical oncologist', location: 'Boston, MA', quote: 'My center still sends KRAS testing to three different labs depending on tumor type. We need a unified RAS profiling protocol.', date: '2026-05-28' },
      { type: 'Med Info query', role: 'Oncology nurse navigator', location: 'Charlotte, NC', quote: 'We have patients asking about the ASCO trial. How do I tell them if they qualify? What test do they need?', date: '2026-06-07' },
    ],
    status: 'Prioritised',
    confidenceScore: 0.91,
    provenance: 'synthesized',
  },
  {
    id: 'AI2',
    title: 'OS vs PFS hierarchy debate — community oncologists need a clear narrative',
    priority: 'High',
    lpRefs: ['LP1'], moRefs: ['MO1'],
    recurrence: 3,
    recency: '2026-06',
    summary:
      'Oncologists in community settings are parsing the RASolute 302 data differently than academic centers. Several have raised questions about the OS signal strength relative to PFS and what this means for standard-of-care adoption. A simple, defensible narrative on the hierarchy of endpoints is needed urgently for MSL conversations.',
    sourceInsights: [
      { type: 'MSL interaction', role: 'Community oncologist', location: 'Phoenix, AZ', quote: 'The PFS data is impressive. But oncologists want to know: does OS follow? I need to explain the expected lag clearly.', date: '2026-06-05' },
      { type: 'Ad board', role: 'Academic oncologist', location: 'New York, NY', quote: 'The OS hazard ratio is what will drive guideline change. We need to make sure that story is front and center, not buried behind PFS.', date: '2026-06-03' },
      { type: 'Congress debrief', role: 'PDAC oncologist', location: 'ASCO 2026', quote: 'Panelists were asked about OS maturity — I think RevMed needs a cleaner talking point on the relationship between the two endpoints.', date: '2026-06-01' },
    ],
    status: 'Validated',
    confidenceScore: 0.85,
    provenance: 'synthesized',
  },
  {
    id: 'AI3',
    title: 'Borghaei emerging as vocal skeptic of multi-selective approach in NSCLC',
    priority: 'High',
    lpRefs: ['LP3'], moRefs: ['MO3'],
    recurrence: 2,
    recency: '2026-06',
    summary:
      'Dr. Hossein Borghaei (Fox Chase Cancer Center) has made public comments post-ASCO questioning whether multi-selective RAS(ON) inhibition adds benefit over G12C-selective agents in NSCLC, where G12C is the dominant actionable driver. His influence in thoracic oncology makes this a competitive capture risk and a priority KOL engagement.',
    sourceInsights: [
      { type: 'Social media', role: 'KOL public statement', location: 'X (Twitter)', quote: 'The PDAC data are impressive. But in NSCLC, G12C-selective agents already work well and have a cleaner safety profile. The case for multi-selective in NSCLC isn\'t made yet. #ASCO2026', date: '2026-06-02' },
      { type: 'Congress debrief', role: 'Thoracic oncologist', location: 'ASCO 2026', quote: 'Borghaei asked a pointed question in the Q&A — wanted to know the G12C-specific subgroup data in NSCLC within RASolute 301. The answer wasn\'t fully satisfying.', date: '2026-06-01' },
    ],
    status: 'Prioritised',
    confidenceScore: 0.88,
    provenance: 'synthesized',
  },
  {
    id: 'AI4',
    title: 'Payer access questions emerging before NDA filing — benefit definition unclear',
    priority: 'Medium',
    lpRefs: ['LP1', 'LP2'], moRefs: ['MO2'],
    recurrence: 2,
    recency: '2026-06',
    summary:
      'Market access teams are reporting early payer conversations questioning the incremental benefit of daraxonrasib over FOLFIRINOX and nab-paclitaxel/gemcitabine — the current 2L PDAC standard. Payers are asking for net clinical benefit data in a disease area where the bar for reimbursement has historically been low due to poor outcomes.',
    sourceInsights: [
      { type: 'Ad board', role: 'Oncology medical director (payer)', location: 'Virtual', quote: 'PDAC is a disease with very poor standard outcomes. The question for formulary review will be whether the magnitude of benefit justifies the cost — especially if the control arm itself is heterogeneous.', date: '2026-05-30' },
      { type: 'MSL interaction', role: 'Community oncologist', location: 'Atlanta, GA', quote: 'My patients are already asking if insurance will cover it. I have no answer for them yet.', date: '2026-06-08' },
    ],
    status: 'Triaged',
    confidenceScore: 0.74,
    provenance: 'synthesized',
  },
  {
    id: 'AI5',
    title: 'KOL demand for 1L PDAC data timeline — daraxonrasib readiness narrative needed',
    priority: 'Medium',
    lpRefs: ['LP5'], moRefs: ['MO5'],
    recurrence: 2,
    recency: '2026-06',
    summary:
      'Top PDAC KOLs are already asking about the RASolute 303 (1L PDAC) and RASolute 304 (adjuvant) readout timelines. The ASCO plenary success has accelerated their thinking — they want to understand whether 1L use could be available before the 2L setting establishes itself as the de facto norm.',
    sourceInsights: [
      { type: 'Ad board', role: 'PDAC specialist', location: 'New York, NY', quote: 'If 2L data are this strong, I expect 1L will be even more compelling. When are we seeing 303 data? Can we plan our institutional protocols now?', date: '2026-06-03' },
      { type: 'Congress debrief', role: 'PDAC oncologist', location: 'ASCO 2026', quote: '303 was mentioned in the plenary follow-up session. The audience was clearly interested — when\'s the read?', date: '2026-06-01' },
    ],
    status: 'Captured',
    confidenceScore: 0.72,
    provenance: 'synthesized',
  },
  {
    id: 'AI6',
    title: 'G12D pipeline interest high — zoldonrasib positioning opportunity in PDAC',
    priority: 'Medium',
    lpRefs: ['LP4'], moRefs: ['MO4'],
    recurrence: 2,
    recency: '2026-06',
    summary:
      'PDAC oncologists are asking how zoldonrasib (RMC-9805) compares to daraxonrasib in G12D-mutant PDAC, and whether the variant-selective approach offers a safety or efficacy advantage. The AACR 2026 first-line PDAC data for daraxonrasib and zoldonrasib G12D NSCLC data have driven this interest.',
    sourceInsights: [
      { type: 'MSL interaction', role: 'PDAC oncologist', location: 'Chicago, IL', quote: 'A third of my PDAC patients are G12D. If zoldonrasib works specifically in that subgroup, I want to understand how to think about it versus the multi-selective.', date: '2026-06-06' },
      { type: 'Congress debrief', role: 'GI oncologist', location: 'AACR 2026', quote: 'The G12D-selective story is compelling — especially if there\'s a differentiated safety profile vs. multi-selective in PDAC patients who are often frail.', date: '2026-04-28' },
    ],
    status: 'Captured',
    confidenceScore: 0.68,
    provenance: 'synthesized',
  },
  {
    id: 'AI7',
    title: 'Social velocity around "unprecedented" ASCO narrative — RevMed share of voice at peak',
    priority: 'Medium',
    lpRefs: ['LP1'], moRefs: ['MO1'],
    recurrence: 1,
    recency: '2026-06',
    summary:
      'Post-ASCO social and digital monitoring shows Revolution Medicines at historic share-of-voice peak. The "unprecedented" and "stunning" descriptors used by KOLs are organically amplifying on X and LinkedIn. This window is 4–6 weeks — MSL field follow-up must capitalize before competitor narrative reclaims airtime.',
    sourceInsights: [
      { type: 'Social media', role: 'KOL public statement', location: 'X (Twitter)', quote: 'Unprecedented is not a word I use lightly. RASolute 302 is the most important PDAC result in a decade. Congratulations @RevMed. #ASCO2026 #PDAC #RAS', date: '2026-05-31' },
    ],
    status: 'Validated',
    confidenceScore: 0.82,
    provenance: 'synthesized',
  },
];
