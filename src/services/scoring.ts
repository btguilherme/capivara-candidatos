import type { PublicFigure, FactItem, ScoreBreakdown } from '../types/politician';

/**
 * Calculates a dynamic integrity and honesty score based on verified facts,
 * official sources authority, and impact weight.
 */
export function calculateScoreBreakdown(facts: FactItem[]): ScoreBreakdown {
  const totalFactsAnalyzed = facts.length;
  if (totalFactsAnalyzed === 0) {
    return {
      transparencyScore: 50,
      judicialIntegrityScore: 50,
      factCheckAccuracyScore: 50,
      overallHonestyScore: 50,
      totalFactsAnalyzed: 0,
      confirmedFactsCount: 0,
      refutedFactsCount: 0,
      underReviewFactsCount: 0
    };
  }

  let confirmedFactsCount = 0;
  let refutedFactsCount = 0;
  let underReviewFactsCount = 0;

  let totalImpactSum = 0;

  let legalScoreSum = 100;
  let factCheckScoreSum = 100;
  let transparencyScoreSum = 100;

  facts.forEach((fact) => {
    // Count status
    if (fact.status === 'confirmed') confirmedFactsCount++;
    else if (fact.status === 'refuted') refutedFactsCount++;
    else underReviewFactsCount++;

    // Calculate source confidence average weight
    const sourceReliabilityAverage = fact.sources.length > 0
      ? fact.sources.reduce((acc, src) => acc + src.reliabilityScore, 0) / fact.sources.length
      : 50;

    const sourceWeight = sourceReliabilityAverage / 100;
    const confidenceWeight = (fact.confidenceScore / 100) * sourceWeight;

    // Legal Impact
    if (fact.category === 'legal_cases') {
      if (fact.status === 'refuted' || fact.impactScore < 0) {
        legalScoreSum -= Math.abs(fact.impactScore) * 8 * confidenceWeight;
      }
    }

    // Declarations & Fact Checks
    if (fact.category === 'declarations') {
      if (fact.status === 'refuted') {
        factCheckScoreSum -= Math.abs(fact.impactScore) * 7 * confidenceWeight;
      }
    }

    // Public Spending & Transparency
    if (fact.category === 'public_spending') {
      if (fact.status === 'under_review' || fact.impactScore < 0) {
        transparencyScoreSum -= Math.abs(fact.impactScore) * 6 * confidenceWeight;
      }
    }

    // General Honesty Impact
    const impactFactor = fact.impactScore * confidenceWeight;
    totalImpactSum += impactFactor;
  });

  // Clamp helper
  const clamp = (val: number, min = 0, max = 100) => Math.round(Math.min(max, Math.max(min, val)));

  const judicialIntegrityScore = clamp(legalScoreSum);
  const factCheckAccuracyScore = clamp(factCheckScoreSum);
  const transparencyScore = clamp(transparencyScoreSum);

  // Calculate overall honesty score normalized
  const baseScore = 70;
  const netImpact = totalImpactSum * 3;
  const overallHonestyScore = clamp(baseScore + netImpact);

  return {
    transparencyScore,
    judicialIntegrityScore,
    factCheckAccuracyScore,
    overallHonestyScore,
    totalFactsAnalyzed,
    confirmedFactsCount,
    refutedFactsCount,
    underReviewFactsCount
  };
}

/**
 * Ranks public figures based on overall honesty score and ratio of confirmed positive facts.
 */
export function rankPublicFigures(figures: PublicFigure[]): PublicFigure[] {
  return [...figures].sort((a, b) => {
    if (b.score.overallHonestyScore !== a.score.overallHonestyScore) {
      return b.score.overallHonestyScore - a.score.overallHonestyScore;
    }
    return b.score.confirmedFactsCount - a.score.confirmedFactsCount;
  });
}

/**
 * Filter facts for a specific figure based on category or status.
 */
export function filterFacts(
  facts: FactItem[],
  categoryFilter?: string,
  statusFilter?: string
): FactItem[] {
  return facts.filter((fact) => {
    if (categoryFilter && categoryFilter !== 'all' && fact.category !== categoryFilter) {
      return false;
    }
    if (statusFilter && statusFilter !== 'all' && fact.status !== statusFilter) {
      return false;
    }
    return true;
  });
}
