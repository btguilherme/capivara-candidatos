import type { PublicFigure } from '../types/politician';
import { CheckCircle2, XCircle, AlertTriangle, ShieldCheck, Scale, X } from 'lucide-react';

interface ComparisonMatrixProps {
  selectedFigures: PublicFigure[];
  onRemoveFigure: (id: string) => void;
  onAddMore: () => void;
}

export const ComparisonMatrix: React.FC<ComparisonMatrixProps> = ({
  selectedFigures,
  onRemoveFigure,
  onAddMore
}) => {
  if (selectedFigures.length === 0) {
    return (
      <div className="card" style={{ padding: '3rem', textAlign: 'center' }}>
        <Scale size={48} color="var(--primary)" style={{ marginBottom: '1rem' }} />
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--secondary)' }}>
          Nenhum político selecionado para comparação
        </h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', maxWidth: '500px', marginInline: 'auto' }}>
          Selecione dois ou mais políticos na tela de exploração para visualizar uma comparação lado a lado de seus históricos, processos e scores de confiabilidade.
        </p>
        <button onClick={onAddMore} className="btn btn-primary">
          Explorar Políticos
        </button>
      </div>
    );
  }

  // Find figure with highest honesty score for visual highlight
  const topHonestyScore = Math.max(...selectedFigures.map(f => f.score.overallHonestyScore));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--secondary)', margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Scale size={24} color="var(--primary)" /> Comparação Lado a Lado de Histórico Factual
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>
            Análise transparente dos dados públicos, processos, checagens e índices de integridade.
          </p>
        </div>

        {selectedFigures.length < 4 && (
          <button onClick={onAddMore} className="btn btn-outline" style={{ fontSize: '0.85rem' }}>
            + Adicionar Político à Comparação
          </button>
        )}
      </div>

      {/* Side-by-side Table / Grid */}
      <div style={{ overflowX: 'auto', border: '1px solid var(--border)', borderRadius: 'var(--radius)', backgroundColor: '#fff' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '700px' }}>
          <thead>
            <tr style={{ backgroundColor: 'var(--bg-main)', borderBottom: '1px solid var(--border)' }}>
              <th style={{ padding: '1rem', width: '220px', fontWeight: 700, color: 'var(--secondary)' }}>
                Critério de Comparação
              </th>
              {selectedFigures.map((figure) => {
                const isTop = figure.score.overallHonestyScore === topHonestyScore && selectedFigures.length > 1;
                return (
                  <th key={figure.id} style={{ padding: '1rem', borderLeft: '1px solid var(--border)', position: 'relative' }}>
                    <button
                      onClick={() => onRemoveFigure(figure.id)}
                      style={{
                        position: 'absolute',
                        top: '0.5rem',
                        right: '0.5rem',
                        color: 'var(--text-muted)',
                        padding: '0.25rem',
                        borderRadius: '50%'
                      }}
                      title="Remover da comparação"
                    >
                      <X size={16} />
                    </button>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '0.5rem' }}>
                      <img
                        src={figure.photoUrl}
                        alt={figure.popularName}
                        style={{ width: '70px', height: '70px', borderRadius: '50%', objectFit: 'cover' }}
                      />
                      <div>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0, color: 'var(--secondary)' }}>
                          {figure.popularName}
                        </h3>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                          {figure.politicalParty} ({figure.state})
                        </span>
                      </div>

                      {isTop && (
                        <span style={{
                          backgroundColor: '#dcfce7',
                          color: '#15803d',
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          padding: '0.2rem 0.5rem',
                          borderRadius: '9999px',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.25rem'
                        }}>
                          <ShieldCheck size={14} /> Maior Confiabilidade
                        </span>
                      )}
                    </div>
                  </th>
                );
              })}
            </tr>
          </thead>

          <tbody>
            {/* Overall Score Row */}
            <tr style={{ borderBottom: '1px solid var(--border)', backgroundColor: '#fafafa' }}>
              <td style={{ padding: '1rem', fontWeight: 700, color: 'var(--secondary)' }}>
                Score de Confiabilidade Factual
              </td>
              {selectedFigures.map((figure) => (
                <td key={figure.id} style={{ padding: '1rem', borderLeft: '1px solid var(--border)', textAlign: 'center' }}>
                  <span style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary)' }}>
                    {figure.score.overallHonestyScore}
                  </span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}> / 100</span>
                </td>
              ))}
            </tr>

            {/* Judicial Integrity */}
            <tr style={{ borderBottom: '1px solid var(--border)' }}>
              <td style={{ padding: '1rem', fontWeight: 600 }}>
                Integridade Judicial & Processos
              </td>
              {selectedFigures.map((figure) => (
                <td key={figure.id} style={{ padding: '1rem', borderLeft: '1px solid var(--border)', textAlign: 'center' }}>
                  <strong style={{ fontSize: '1.1rem' }}>{figure.score.judicialIntegrityScore}%</strong>
                </td>
              ))}
            </tr>

            {/* Transparency Score */}
            <tr style={{ borderBottom: '1px solid var(--border)' }}>
              <td style={{ padding: '1rem', fontWeight: 600 }}>
                Transparência em Gastos Públicos
              </td>
              {selectedFigures.map((figure) => (
                <td key={figure.id} style={{ padding: '1rem', borderLeft: '1px solid var(--border)', textAlign: 'center' }}>
                  <strong style={{ fontSize: '1.1rem' }}>{figure.score.transparencyScore}%</strong>
                </td>
              ))}
            </tr>

            {/* Fact Check Accuracy */}
            <tr style={{ borderBottom: '1px solid var(--border)' }}>
              <td style={{ padding: '1rem', fontWeight: 600 }}>
                Precisão em Checagens de Notícias
              </td>
              {selectedFigures.map((figure) => (
                <td key={figure.id} style={{ padding: '1rem', borderLeft: '1px solid var(--border)', textAlign: 'center' }}>
                  <strong style={{ fontSize: '1.1rem' }}>{figure.score.factCheckAccuracyScore}%</strong>
                </td>
              ))}
            </tr>

            {/* Facts Summary breakdown */}
            <tr style={{ borderBottom: '1px solid var(--border)', backgroundColor: '#fafafa' }}>
              <td style={{ padding: '1rem', fontWeight: 700 }}>
                Resumo dos Fatos Auditados
              </td>
              {selectedFigures.map((figure) => (
                <td key={figure.id} style={{ padding: '1rem', borderLeft: '1px solid var(--border)' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.85rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--status-verified)' }}>
                      <CheckCircle2 size={15} /> <strong>{figure.score.confirmedFactsCount}</strong> Confirmados
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--status-unverified)' }}>
                      <AlertTriangle size={15} /> <strong>{figure.score.underReviewFactsCount}</strong> Em Análise
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--status-refuted)' }}>
                      <XCircle size={15} /> <strong>{figure.score.refutedFactsCount}</strong> Refutados
                    </div>
                  </div>
                </td>
              ))}
            </tr>

            {/* Key Fact Examples */}
            <tr>
              <td style={{ padding: '1rem', fontWeight: 700, verticalAlign: 'top' }}>
                Fatos Relevantes em Destaque
              </td>
              {selectedFigures.map((figure) => (
                <td key={figure.id} style={{ padding: '1rem', borderLeft: '1px solid var(--border)', verticalAlign: 'top' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem' }}>
                    {figure.facts.map((fact) => (
                      <div key={fact.id} style={{ padding: '0.5rem', border: '1px solid var(--border)', borderRadius: '6px', backgroundColor: '#fff' }}>
                        <div style={{ fontWeight: 600, color: 'var(--secondary)', marginBottom: '0.2rem' }}>
                          {fact.title}
                        </div>
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>
                          {fact.description.length > 90 ? `${fact.description.substring(0, 90)}...` : fact.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
