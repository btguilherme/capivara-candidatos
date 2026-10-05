import type { PublicFigure } from '../types/politician';
import { rankPublicFigures } from '../services/scoring';
import { Award, ShieldCheck, ChevronRight } from 'lucide-react';

interface LeaderboardProps {
  figures: PublicFigure[];
  onSelectFigure: (figure: PublicFigure) => void;
}

export const Leaderboard: React.FC<LeaderboardProps> = ({ figures, onSelectFigure }) => {
  const rankedFigures = rankPublicFigures(figures);

  const getRankBadge = (index: number) => {
    if (index === 0) {
      return (
        <span style={{
          backgroundColor: '#fef08a',
          color: '#854d0e',
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 800,
          fontSize: '1rem',
          border: '1px solid #fde047'
        }}>
          1º
        </span>
      );
    }
    if (index === 1) {
      return (
        <span style={{
          backgroundColor: '#e2e8f0',
          color: '#475569',
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 800,
          fontSize: '1rem',
          border: '1px solid #cbd5e1'
        }}>
          2º
        </span>
      );
    }
    if (index === 2) {
      return (
        <span style={{
          backgroundColor: '#ffedd5',
          color: '#9a3412',
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 800,
          fontSize: '1rem',
          border: '1px solid #fed7aa'
        }}>
          3º
        </span>
      );
    }
    return (
      <span style={{
        backgroundColor: 'var(--bg-main)',
        color: 'var(--text-muted)',
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 700,
        fontSize: '0.9rem',
        border: '1px solid var(--border)'
      }}>
        {index + 1}º
      </span>
    );
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--secondary)', margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Award size={24} color="var(--primary)" /> Ranking de Confiabilidade & Integridade
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>
            Listagem ordenada por verificação de dados públicos, ausência de processos judiciais e precisão factual.
          </p>
        </div>
      </div>

      <div className="card" style={{ padding: '0.5rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {rankedFigures.map((figure, index) => (
            <div
              key={figure.id}
              onClick={() => onSelectFigure(figure)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1.25rem 1rem',
                borderBottom: index < rankedFigures.length - 1 ? '1px solid var(--border)' : 'none',
                cursor: 'pointer',
                borderRadius: '8px',
                transition: 'background-color 0.2s',
                flexWrap: 'wrap',
                gap: '1rem'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--bg-main)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', minWidth: '280px' }}>
                {getRankBadge(index)}

                <img
                  src={figure.photoUrl}
                  alt={figure.popularName}
                  style={{ width: '56px', height: '56px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--border)' }}
                />

                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0, color: 'var(--secondary)' }}>
                    {figure.popularName}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
                    {figure.politicalParty} - {figure.state} | {figure.currentRole}
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                <div style={{ textAlign: 'center' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>Fatos Analisados</span>
                  <strong style={{ fontSize: '1rem', color: 'var(--secondary)' }}>{figure.score.totalFactsAnalyzed}</strong>
                </div>

                <div style={{ textAlign: 'center' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>Confirmados</span>
                  <strong style={{ fontSize: '1rem', color: 'var(--status-verified)' }}>{figure.score.confirmedFactsCount}</strong>
                </div>

                <div style={{ textAlign: 'center', minWidth: '100px' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>Score Honestidade</span>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.25rem' }}>
                    <ShieldCheck size={18} color="var(--primary)" />
                    <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)' }}>
                      {figure.score.overallHonestyScore}
                    </span>
                  </div>
                </div>

                <ChevronRight size={20} color="var(--text-muted)" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
