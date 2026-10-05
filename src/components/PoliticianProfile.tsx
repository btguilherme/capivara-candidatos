import type { PublicFigure, FactCategory, VerificationStatus } from '../types/politician';
import { useState } from 'react';
import { ExternalLink, CheckCircle2, AlertTriangle, XCircle, ShieldCheck, Scale, FileText, Building, Info } from 'lucide-react';

interface PoliticianProfileProps {
  figure: PublicFigure;
  onBack?: () => void;
  onSelectForCompare?: (figure: PublicFigure) => void;
  isComparing?: boolean;
}

export const PoliticianProfile: React.FC<PoliticianProfileProps> = ({
  figure,
  onBack,
  onSelectForCompare,
  isComparing = false
}) => {
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<FactCategory | 'all'>('all');
  const [activeStatusFilter, setActiveStatusFilter] = useState<VerificationStatus | 'all'>('all');

  const filteredFacts = figure.facts.filter((fact) => {
    if (activeCategoryFilter !== 'all' && fact.category !== activeCategoryFilter) return false;
    if (activeStatusFilter !== 'all' && fact.status !== activeStatusFilter) return false;
    return true;
  });

  const getStatusBadge = (status: VerificationStatus) => {
    switch (status) {
      case 'confirmed':
        return (
          <span className="badge badge-verified">
            <CheckCircle2 size={13} /> Confirmado Factual
          </span>
        );
      case 'under_review':
        return (
          <span className="badge badge-unverified">
            <AlertTriangle size={13} /> Em Análise
          </span>
        );
      case 'refuted':
        return (
          <span className="badge badge-refuted">
            <XCircle size={13} /> Refutado / Falso
          </span>
        );
    }
  };

  const getCategoryLabel = (category: FactCategory) => {
    switch (category) {
      case 'legal_cases': return 'Processos Judiciais';
      case 'voting_record': return 'Votações & Projetos';
      case 'public_spending': return 'Gastos Públicos';
      case 'political_history': return 'Histórico Político';
      case 'declarations': return 'Declarações & Checagens';
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%' }}>
      {onBack && (
        <div>
          <button onClick={onBack} className="btn btn-secondary" style={{ fontSize: '0.85rem' }}>
            &larr; Voltar para a lista
          </button>
        </div>
      )}

      {/* Header Profile Summary */}
      <div className="card" style={{ padding: '1.75rem' }}>
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'flex-start' }}>
          <img
            src={figure.photoUrl}
            alt={figure.popularName}
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '3px solid var(--border)'
            }}
          />

          <div style={{ flex: 1, minWidth: '260px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
              <h1 style={{ fontSize: '1.75rem', fontWeight: 700, margin: 0, color: 'var(--secondary)' }}>
                {figure.popularName}
              </h1>
              <span style={{
                backgroundColor: 'var(--primary-light)',
                color: 'var(--primary)',
                fontWeight: 600,
                fontSize: '0.8rem',
                padding: '0.2rem 0.6rem',
                borderRadius: '6px'
              }}>
                {figure.politicalParty} - {figure.state}
              </span>
            </div>

            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.25rem', fontWeight: 500 }}>
              {figure.name}
            </p>

            <p style={{ fontSize: '0.95rem', margin: '0.75rem 0', lineHeight: 1.5, color: 'var(--text-main)' }}>
              {figure.biography}
            </p>

            <div style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              <span><strong>Cargo Atual:</strong> {figure.currentRole}</span>
              <span>•</span>
              <span><strong>Vida Pública:</strong> {figure.yearsInPublicOffice} anos</span>
            </div>
          </div>

          {/* Scores Summary Panel */}
          <div style={{
            backgroundColor: 'var(--bg-main)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius)',
            padding: '1.25rem',
            minWidth: '260px',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                Score de Confiabilidade Factual
              </span>
              <ShieldCheck size={20} color="var(--primary)" />
            </div>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
              <span style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary)', lineHeight: 1 }}>
                {figure.score.overallHonestyScore}
              </span>
              <span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>/ 100</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.8rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Integridade Judicial:</span>
                <strong>{figure.score.judicialIntegrityScore}%</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Transparência em Gastos:</span>
                <strong>{figure.score.transparencyScore}%</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Acurácia em Checagens:</span>
                <strong>{figure.score.factCheckAccuracyScore}%</strong>
              </div>
            </div>

            {onSelectForCompare && (
              <button
                onClick={() => onSelectForCompare(figure)}
                className={`btn ${isComparing ? 'btn-secondary' : 'btn-outline'}`}
                style={{ width: '100%', marginTop: '0.5rem', fontSize: '0.85rem' }}
              >
                <Scale size={15} /> {isComparing ? 'Remover da Comparação' : 'Adicionar para Comparar'}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Facts & Evidence Section */}
      <div className="card" style={{ padding: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
          <div>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FileText size={20} color="var(--primary)" /> Histórico Factual & Fontes Auditáveis
            </h2>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
              Todos os fatos possuem fontes públicas checadas e grau de evidência documentada.
            </p>
          </div>

          {/* Filters */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <select
              value={activeCategoryFilter}
              onChange={(e) => setActiveCategoryFilter(e.target.value as FactCategory | 'all')}
              style={{ padding: '0.4rem 0.75rem', fontSize: '0.8rem', height: '34px' }}
            >
              <option value="all">Todas as Categorias</option>
              <option value="legal_cases">Casos Judiciais</option>
              <option value="voting_record">Votações</option>
              <option value="public_spending">Gastos Públicos</option>
              <option value="political_history">Histórico Político</option>
              <option value="declarations">Declarações</option>
            </select>

            <select
              value={activeStatusFilter}
              onChange={(e) => setActiveStatusFilter(e.target.value as VerificationStatus | 'all')}
              style={{ padding: '0.4rem 0.75rem', fontSize: '0.8rem', height: '34px' }}
            >
              <option value="all">Todos os Status</option>
              <option value="confirmed">Apenas Confirmados</option>
              <option value="under_review">Em Análise</option>
              <option value="refuted">Refutados</option>
            </select>
          </div>
        </div>

        {filteredFacts.length === 0 ? (
          <p style={{ fontStyle: 'italic', color: 'var(--text-muted)', textAlign: 'center', padding: '2rem' }}>
            Nenhum fato encontrado para os filtros selecionados.
          </p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {filteredFacts.map((fact) => (
              <div
                key={fact.id}
                style={{
                  border: '1px solid var(--border)',
                  borderRadius: '10px',
                  padding: '1.25rem',
                  backgroundColor: 'var(--bg-main)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--primary)', textTransform: 'uppercase' }}>
                      {getCategoryLabel(fact.category)}
                    </span>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 700, margin: '0.2rem 0 0.4rem', color: 'var(--secondary)' }}>
                      {fact.title}
                    </h3>
                  </div>
                  {getStatusBadge(fact.status)}
                </div>

                <p style={{ fontSize: '0.9rem', color: 'var(--text-main)', lineHeight: 1.5 }}>
                  {fact.description}
                </p>

                {fact.notes && (
                  <div style={{
                    backgroundColor: '#fff',
                    borderLeft: '3px solid var(--primary)',
                    padding: '0.5rem 0.75rem',
                    fontSize: '0.85rem',
                    color: 'var(--text-muted)',
                    borderRadius: '0 6px 6px 0'
                  }}>
                    <Info size={14} style={{ display: 'inline', marginRight: '0.3rem' }} />
                    {fact.notes}
                  </div>
                )}

                {/* Sources & Transparency audit section */}
                <div style={{
                  borderTop: '1px dashed var(--border)',
                  paddingTop: '0.75rem',
                  marginTop: '0.25rem'
                }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Building size={14} /> Fontes Oficiais e Checagens de Notícias ({fact.sources.length}):
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {fact.sources.map((source) => (
                      <div
                        key={source.id}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          backgroundColor: '#fff',
                          padding: '0.5rem 0.75rem',
                          borderRadius: '6px',
                          border: '1px solid var(--border)',
                          fontSize: '0.825rem'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                          <span style={{ fontWeight: 600, color: 'var(--secondary)' }}>
                            {source.publisher}
                          </span>
                          {source.isOfficialSource && (
                            <span style={{
                              fontSize: '0.7rem',
                              backgroundColor: '#dbeafe',
                              color: '#1e40af',
                              padding: '0.1rem 0.4rem',
                              borderRadius: '4px',
                              fontWeight: 600
                            }}>
                              Fonte Oficial
                            </span>
                          )}
                          <span style={{ color: 'var(--text-muted)' }}>- {source.title}</span>
                        </div>

                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.25rem',
                            fontWeight: 600,
                            fontSize: '0.8rem'
                          }}
                        >
                          Verificar <ExternalLink size={13} />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
