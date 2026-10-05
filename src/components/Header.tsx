import React from 'react';
import { ShieldCheck, Scale, Award, Info, PlusCircle } from 'lucide-react';

interface HeaderProps {
  activeTab: 'explore' | 'compare' | 'ranking';
  setActiveTab: (tab: 'explore' | 'compare' | 'ranking') => void;
  onOpenMethodology: () => void;
  onOpenSubmitModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenMethodology,
  onOpenSubmitModal
}) => {
  return (
    <header style={{
      backgroundColor: 'var(--bg-card)',
      borderBottom: '1px solid var(--border)',
      position: 'sticky',
      top: 0,
      zIndex: 50,
      boxShadow: 'var(--shadow-sm)'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '70px',
        paddingTop: '0.5rem',
        paddingBottom: '0.5rem'
      }}>
        {/* Brand Logo */}
        <div
          onClick={() => setActiveTab('explore')}
          style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}
        >
          <div style={{
            backgroundColor: 'var(--primary)',
            color: '#fff',
            padding: '0.5rem',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <ShieldCheck size={26} />
          </div>
          <div>
            <h1 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0, color: 'var(--secondary)', lineHeight: 1.2 }}>
              FatoPúblico
            </h1>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: 0 }}>
              Histórico & Verificação Factual de Políticos
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav style={{ display: 'flex', gap: '0.5rem' }}>
          <button
            onClick={() => setActiveTab('explore')}
            className={`btn ${activeTab === 'explore' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
          >
            Explorar Políticos
          </button>
          <button
            onClick={() => setActiveTab('compare')}
            className={`btn ${activeTab === 'compare' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', gap: '0.4rem' }}
          >
            <Scale size={16} /> Comparar Lado a Lado
          </button>
          <button
            onClick={() => setActiveTab('ranking')}
            className={`btn ${activeTab === 'ranking' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', gap: '0.4rem' }}
          >
            <Award size={16} /> Ranking de Confiabilidade
          </button>
        </nav>

        {/* Utility Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button
            onClick={onOpenMethodology}
            className="btn btn-secondary"
            style={{ padding: '0.5rem 0.85rem', fontSize: '0.85rem' }}
            title="Metodologia & Transparência"
          >
            <Info size={16} /> Metodologia
          </button>

          <button
            onClick={onOpenSubmitModal}
            className="btn btn-outline"
            style={{ padding: '0.5rem 0.85rem', fontSize: '0.85rem' }}
          >
            <PlusCircle size={16} /> Enviar Fato
          </button>
        </div>
      </div>
    </header>
  );
};
