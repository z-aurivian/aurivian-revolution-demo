// Medical Messaging Alignment — Revolution Medicines
// Per-KOL alignment on the RAS(ON) platform messaging pillars.

export const MESSAGING_PILLARS = [
  { id: 'pillar-1', name: 'RAS(ON) multi-selective superiority',    short: 'Multi-selective' },
  { id: 'pillar-2', name: 'RASolute 302 OS/PFS endpoint narrative', short: 'OS/PFS narrative' },
  { id: 'pillar-3', name: 'Comprehensive RAS testing & patient ID',  short: 'RAS testing' },
  { id: 'pillar-4', name: '1L PDAC expansion readiness',            short: '1L PDAC' },
];

function hashCode(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = ((h << 5) - h + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

const TIER_BASELINE = { 'Tier 1': 78, 'Tier 2': 64, 'Tier 3': 50 };

export function getMessagingAlignment(kol) {
  if (!kol) return null;
  const baseline = TIER_BASELINE[kol.engagementTier] ?? 60;
  const influenceLift = Math.round((kol.influenceScore - 70) / 4);
  const idHash = hashCode(kol.id);

  const pillars = MESSAGING_PILLARS.map((p, i) => {
    const offset = ((idHash + i * 37) % 31) - 15;
    const score = Math.max(20, Math.min(98, baseline + influenceLift + offset));
    return { ...p, score };
  });

  const gap = pillars.reduce((min, p) => (p.score < min.score ? p : min), pillars[0]);
  const strongest = pillars.reduce((max, p) => (p.score > max.score ? p : max), pillars[0]);
  const avgScore = Math.round(pillars.reduce((sum, p) => sum + p.score, 0) / pillars.length);

  let recommendation;
  if (gap.score >= 75) {
    recommendation = `Strong alignment across all RAS(ON) platform messaging pillars (avg ${avgScore}%). Maintain current cadence — consider advisory board invitation, particularly on ${strongest.short}.`;
  } else if (gap.score >= 55) {
    recommendation = `Average alignment ${avgScore}%. Largest gap is ${gap.name} (${gap.score}%). Recommended: targeted scientific exchange focused on this pillar; bring updated RASolute data and evidence pack.`;
  } else {
    recommendation = `Below-target alignment on ${gap.name} (${gap.score}%). Suggest urgent re-engagement and 1:1 scientific exchange; risk of competitor capture if not addressed within 6 weeks.`;
  }

  return { pillars, avgScore, gap, strongest, recommendation };
}
