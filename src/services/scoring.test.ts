import { describe, it, expect } from 'vitest';
import { calculateScoreBreakdown, rankPublicFigures, filterFacts } from './scoring';
import type { PublicFigure, FactItem } from '../types/politician';

describe('Scoring Service', () => {
  it('should calculate default scores when no facts are provided', () => {
    const breakdown = calculateScoreBreakdown([]);
    expect(breakdown.overallHonestyScore).toBe(50);
    expect(breakdown.totalFactsAnalyzed).toBe(0);
    expect(breakdown.confirmedFactsCount).toBe(0);
  });

  it('should correctly calculate scores for confirmed facts with high reliability sources', () => {
    const facts: FactItem[] = [
      {
        id: 'f1',
        title: 'Certidão Negativa STF',
        description: 'Sem processos',
        category: 'legal_cases',
        date: '2024-01-01',
        status: 'confirmed',
        confidenceScore: 100,
        impactScore: 10,
        sources: [
          {
            id: 's1',
            title: 'STF',
            publisher: 'STF',
            url: 'https://stf.jus.br',
            publishDate: '2024-01-01',
            reliabilityScore: 100,
            isOfficialSource: true
          }
        ]
      }
    ];

    const breakdown = calculateScoreBreakdown(facts);
    expect(breakdown.overallHonestyScore).toBeGreaterThan(70);
    expect(breakdown.confirmedFactsCount).toBe(1);
    expect(breakdown.refutedFactsCount).toBe(0);
  });

  it('should rank public figures by overall honesty score descending', () => {
    const figA: PublicFigure = {
      id: 'a',
      name: 'Politico A',
      popularName: 'Pol A',
      photoUrl: '',
      currentRole: 'Cargo',
      politicalParty: 'Partido',
      state: 'SP',
      biography: '',
      yearsInPublicOffice: 5,
      facts: [],
      score: {
        transparencyScore: 90,
        judicialIntegrityScore: 90,
        factCheckAccuracyScore: 90,
        overallHonestyScore: 95,
        totalFactsAnalyzed: 5,
        confirmedFactsCount: 5,
        refutedFactsCount: 0,
        underReviewFactsCount: 0
      },
      tags: []
    };

    const figB: PublicFigure = {
      ...figA,
      id: 'b',
      popularName: 'Pol B',
      score: {
        ...figA.score,
        overallHonestyScore: 80
      }
    };

    const ranked = rankPublicFigures([figB, figA]);
    expect(ranked[0].id).toBe('a');
    expect(ranked[1].id).toBe('b');
  });

  it('should filter facts by category and status', () => {
    const facts: FactItem[] = [
      {
        id: 'f1',
        title: 'Fato 1',
        description: 'Desc 1',
        category: 'legal_cases',
        date: '2024-01-01',
        status: 'confirmed',
        confidenceScore: 90,
        impactScore: 5,
        sources: []
      },
      {
        id: 'f2',
        title: 'Fato 2',
        description: 'Desc 2',
        category: 'public_spending',
        date: '2024-01-02',
        status: 'refuted',
        confidenceScore: 90,
        impactScore: -5,
        sources: []
      }
    ];

    const filteredCategory = filterFacts(facts, 'legal_cases', 'all');
    expect(filteredCategory.length).toBe(1);
    expect(filteredCategory[0].id).toBe('f1');

    const filteredStatus = filterFacts(facts, 'all', 'refuted');
    expect(filteredStatus.length).toBe(1);
    expect(filteredStatus[0].id).toBe('f2');
  });
});
