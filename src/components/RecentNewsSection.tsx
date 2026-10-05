import type { NewsArticle } from '../types/politician';
import { Newspaper, ExternalLink, ShieldCheck, AlertCircle, DollarSign, Search } from 'lucide-react';

interface RecentNewsSectionProps {
  newsArticles: NewsArticle[];
  politicianName?: string;
}

export const RecentNewsSection: React.FC<RecentNewsSectionProps> = ({
  newsArticles,
  politicianName
}) => {
  const getCategoryBadge = (category: NewsArticle['topicCategory']) => {
    switch (category) {
      case 'scandal':
        return (
          <span style={{ backgroundColor: '#fef2f2', color: '#dc2626', border: '1px solid #fecaca', fontSize: '0.75rem', fontWeight: 700, padding: '0.15rem 0.5rem', borderRadius: '4px', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
            <AlertCircle size={12} /> Escândalo / Denúncia
          </span>
        );
      case 'spending':
        return (
          <span style={{ backgroundColor: '#fefce8', color: '#ca8a04', border: '1px solid #fef08a', fontSize: '0.75rem', fontWeight: 700, padding: '0.15rem 0.5rem', borderRadius: '4px', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
            <DollarSign size={12} /> Gastos Públicos
          </span>
        );
      case 'investigation':
        return (
          <span style={{ backgroundColor: '#eff6ff', color: '#1d4ed8', border: '1px solid #bfdbfe', fontSize: '0.75rem', fontWeight: 700, padding: '0.15rem 0.5rem', borderRadius: '4px', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
            <Search size={12} /> Investigação Judicial
          </span>
        );
      case 'proposal':
        return (
          <span style={{ backgroundColor: '#f0fdf4', color: '#15803d', border: '1px solid #bbf7d0', fontSize: '0.75rem', fontWeight: 700, padding: '0.15rem 0.5rem', borderRadius: '4px', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
            <ShieldCheck size={12} /> Proposta / Programa
          </span>
        );
      default:
        return (
          <span style={{ backgroundColor: '#f3f4f6', color: '#4b5563', fontSize: '0.75rem', fontWeight: 700, padding: '0.15rem 0.5rem', borderRadius: '4px' }}>
            Notícia
          </span>
        );
    }
  };

  return (
    <div className="card" style={{ padding: '1.5rem', marginTop: '1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
        <div>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 700, margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--secondary)' }}>
            <Newspaper size={20} color="var(--primary)" /> Últimas Notícias, Escândalos & Noticiário de Imprensa
          </h2>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
            {politicianName ? `Notícias e checagens sobre ${politicianName}` : 'Monitoramento de notícias em veículos de imprensa e portais oficiais.'}
          </p>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {newsArticles.map((article) => (
          <div
            key={article.id}
            style={{
              padding: '1rem',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              backgroundColor: 'var(--bg-main)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                {getCategoryBadge(article.topicCategory)}
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  {article.publisher}
                </span>
              </div>

              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                {article.publishedAt}
              </span>
            </div>

            <h3 style={{ fontSize: '1rem', fontWeight: 700, margin: '0.2rem 0', color: 'var(--secondary)' }}>
              {article.title}
            </h3>

            <p style={{ fontSize: '0.875rem', color: 'var(--text-main)', margin: 0, lineHeight: 1.45 }}>
              {article.snippet}
            </p>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '0.5rem', borderTop: '1px dashed var(--border)', marginTop: '0.25rem' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                Confiabilidade da Fonte: <strong>{article.reliabilityScore}%</strong>
              </span>

              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ fontSize: '0.75rem', padding: '0.25rem 0.6rem', gap: '0.25rem' }}
              >
                Abrir Fonte Completa <ExternalLink size={12} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
