# Revolution Medicines Demo — Session Notes 2026-06-21

## What Was Built
- **Primary demo**: `z-aurivian/aurivian-revolution-demo` — master template, RevMed config
- **Capture app**: `z-aurivian/aurivian-revolution-capture-app` — ASCO 2026, 5 KITs

## Portfolio
- **Daraxonrasib (RMC-6236)** — RAS(ON) multi-selective (G12/G13/Q61) — Lead asset
  - RASolute 302 (2L PDAC, ASCO 2026 plenary), RASolute 303 (1L PDAC), RASolute 304 (adjuvant), RASOlve 301 (NSCLC)
- **Elironrasib (RMC-6291)** — KRAS G12C-selective — NSCLC + doublet combo with daraxonrasib
- **Zoldonrasib (RMC-9805)** — KRAS G12D-selective — PDAC + NSCLC, RASolute 305 initiated

## Demo Narrative
**Headline**: RASolute 302 ASCO 2026 plenary — "unprecedented" OS/PFS in 2L RAS-mutant PDAC. How does RevMed MA translate this into field momentum before the post-ASCO window closes?

**Key story threads**:
1. RASolute 302 data → community oncologist excitement but RAS testing gap
2. OS/PFS endpoint narrative confusion — needs standardization NOW
3. Borghaei divergence in NSCLC (73→49 score) — data gap, not mechanism objection
4. Payer/CDx access questions emerging pre-NDA
5. 1L PDAC horizon (RASolute 303) — KOLs already planning

## KOLs (17 total)
- **Divergence**: Borghaei (Fox Chase, thoracic) — NSCLC multi-selective skeptic, score 49
- **Lead PI**: O'Reilly (MSK/Weill Cornell) — RASolute 302 PI, score 91
- **Strong**: Hidalgo (Weill Cornell), Bekaii-Saab (Mayo), Ko (UCSF), McCormick (UCSF, RAS pioneer)
- **EU**: Melisi (Verona), Besse (Gustave Roussy), Do-Youn Oh (Seoul)
- **NSCLC**: Jänne (Dana-Farber), Socinski (AdventHealth), Bazhenova (UCSD)

## ISP / MOs
- ISP 1: Establish daraxonrasib as 2L PDAC SoC
- ISP 2: Define RAS(ON) multi-selective paradigm in NSCLC
- ISP 3: Accelerate G12D, G12C doublet, next-gen pipeline narrative
- MO1: RASolute 302 data adoption (Sufficient)
- MO2: Community oncologist readiness (Low)
- MO3: NSCLC paradigm shaping (Low)
- MO4: Pipeline evidence building (Gap)
- MO5: 1L PDAC pathway (Gap)

## Capture App (ASCO 2026)
- 5 KITs: RS302, 1L PDAC, NSCLC multi-selective debate, RAS testing/CDx, Competitive
- 6 MSL team members
- 8 insights: O'Reilly OS/PFS framing, Borghaei divergence, Ohio community testing gap, PDAC advisory board, competitive resistance data, RevMed satellite, payer CDx alert, Jänne doublet symposium
- 3 daily summaries (Days 1-3)

## Next Steps
- [ ] Connect both repos to Vercel (manual setup required for capture app — `vercel.json` with SPA rewrite)
- [ ] Build Pulse Brief (`public/pulse_revmed_brief.html`) with RevMed content
- [ ] Add `REACT_APP_ANTHROPIC_API_KEY` env var in Vercel for live Auri mode
- [ ] Secondary configs still need RevMed data: `emerging-themes.js`, `gap-radar.js`, `predictive-signals.js`, `insight-sources.js`, `insight-to-impact.js`, `therapeutic-area.js`

## Build Status
- Both repos build cleanly (CI=false)
- Both pushed to GitHub
- Vercel auto-deploy should trigger on push (verify webhook is working)
