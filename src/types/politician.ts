export type FactCategory =
  | 'political_history'
  | 'legal_cases'
  | 'voting_record'
  | 'declarations'
  | 'public_spending';

export type VerificationStatus = 'confirmed' | 'under_review' | 'refuted';

export type PoliticalStatus = 'candidato' | 'em_exercicio' | 'ex_mandato';

export type RoleCategory =
  | 'Presidente'
  | 'Governador'
  | 'Senador'
  | 'Deputado Federal'
  | 'Deputado Estadual'
  | 'Prefeito'
  | 'Vereador'
  | 'Outro';

export interface SourceLink {
  id: string;
  title: string;
  publisher: string; // e.g., "STF", "Agência Lupa", "Portal da Transparência", "Aos Fatos", "G1"
  url: string;
  publishDate: string;
  reliabilityScore: number; // 0 - 100 based on source authority
  isOfficialSource: boolean; // e.g. Diário Oficial, Judicial decisions, TSE
}

export interface NewsArticle {
  id: string;
  title: string;
  snippet: string;
  publisher: string;
  url: string;
  publishedAt: string;
  topicCategory: 'scandal' | 'spending' | 'investigation' | 'proposal' | 'statement';
  reliabilityScore: number;
  relatedPoliticianId?: string;
  relatedPoliticianName?: string;
}

export interface FactItem {
  id: string;
  title: string;
  description: string;
  category: FactCategory;
  date: string;
  status: VerificationStatus;
  confidenceScore: number; // 0 - 100 based on evidence consensus
  sources: SourceLink[];
  impactScore: number; // Positive (+1 to +10) or Negative (-1 to -10) impact on public record/honesty
  notes?: string;
}

export interface ScoreBreakdown {
  transparencyScore: number; // 0 - 100
  judicialIntegrityScore: number; // 0 - 100
  factCheckAccuracyScore: number; // 0 - 100
  overallHonestyScore: number; // 0 - 100
  totalFactsAnalyzed: number;
  confirmedFactsCount: number;
  refutedFactsCount: number;
  underReviewFactsCount: number;
}

export interface PublicFigure {
  id: string;
  name: string;
  popularName: string;
  photoUrl: string;
  currentRole: string;
  roleCategory: RoleCategory;
  politicalStatus: PoliticalStatus;
  politicalParty: string;
  state: string; // UF, e.g. "SP", "RJ", "DF"
  biography: string;
  yearsInPublicOffice: number;
  facts: FactItem[];
  recentNews?: NewsArticle[];
  score: ScoreBreakdown;
  tags: string[];
}

export interface ComparisonFilter {
  category?: FactCategory;
  minConfidence?: number;
  onlyConfirmed?: boolean;
}
