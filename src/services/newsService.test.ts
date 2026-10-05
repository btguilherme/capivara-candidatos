import { describe, it, expect } from 'vitest';
import { searchNewsForQuery } from './newsService';
import type { PublicFigure } from '../types/politician';

describe('News Service', () => {
  it('should return recent news when a figure with predefined news is provided', () => {
    const figure: PublicFigure = {
      id: 'test-fig',
      name: 'Teste Politico',
      popularName: 'Teste',
      photoUrl: '',
      currentRole: 'Prefeito',
      roleCategory: 'Prefeito',
      politicalStatus: 'candidato',
      politicalParty: 'ABC',
      state: 'SP',
      biography: '',
      yearsInPublicOffice: 4,
      facts: [],
      score: {
        transparencyScore: 90,
        judicialIntegrityScore: 90,
        factCheckAccuracyScore: 90,
        overallHonestyScore: 90,
        totalFactsAnalyzed: 0,
        confirmedFactsCount: 0,
        refutedFactsCount: 0,
        underReviewFactsCount: 0
      },
      tags: [],
      recentNews: [
        {
          id: 'news-1',
          title: 'Noticia de Teste',
          snippet: 'Resumo',
          publisher: 'G1',
          url: 'https://g1.globo.com',
          publishedAt: '2024-01-01',
          topicCategory: 'proposal',
          reliabilityScore: 95
        }
      ]
    };

    const news = searchNewsForQuery('Teste', figure);
    expect(news.length).toBe(1);
    expect(news[0].title).toBe('Noticia de Teste');
  });

  it('should generate dynamic news search links with source verification for unknown candidates', () => {
    const news = searchNewsForQuery('Candidato Novo Qualquer', null);
    expect(news.length).toBeGreaterThan(0);
    expect(news[0].url).toContain('divulgacandcontas.tse.jus.br');
    expect(news[1].url).toContain('lupa.uol.com.br');
    expect(news[2].url).toContain('portal.stf.jus.br');
  });
});
