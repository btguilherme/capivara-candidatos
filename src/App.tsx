import { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { FilterBar } from './components/FilterBar';
import { PoliticianProfile } from './components/PoliticianProfile';
import { ComparisonMatrix } from './components/ComparisonMatrix';
import { Leaderboard } from './components/Leaderboard';
import { RecentNewsSection } from './components/RecentNewsSection';
import { MethodologyModal, SubmitFactModal } from './components/MethodologyModal';
import { mockPoliticians } from './data/mockPoliticians';
import type { PublicFigure, FactCategory, PoliticalStatus, RoleCategory } from './types/politician';
import { searchNewsForQuery } from './services/newsService';
import { ShieldCheck, Scale, ArrowRight, UserCheck, Vote } from 'lucide-react';

export function App() {
  const [activeTab, setActiveTab] = useState<'explore' | 'compare' | 'ranking'>('explore');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedParty, setSelectedParty] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState<FactCategory | 'all'>('all');
  const [selectedStatus, setSelectedStatus] = useState<PoliticalStatus | 'all'>('all');
  const [selectedRole, setSelectedRole] = useState<RoleCategory | 'all'>('all');
  const [selectedFigureForProfile, setSelectedFigureForProfile] = useState<PublicFigure | null>(null);

  // State for compare figures list
  const [compareList, setCompareList] = useState<PublicFigure[]>([]);

  // Modals
  const [isMethodologyOpen, setIsMethodologyOpen] = useState(false);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);

  // Extract list of unique parties
  const parties = useMemo(() => {
    return Array.from(new Set(mockPoliticians.map((p) => p.politicalParty))).sort();
  }, []);

  // Filter politicians based on search and selected filters
  const filteredPoliticians = useMemo(() => {
    return mockPoliticians.filter((p) => {
      const matchesSearch =
        p.popularName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.currentRole.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.state.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesParty = selectedParty === 'all' || p.politicalParty === selectedParty;
      const matchesStatus = selectedStatus === 'all' || p.politicalStatus === selectedStatus;
      const matchesRole = selectedRole === 'all' || p.roleCategory === selectedRole;

      const matchesCategory =
        selectedCategory === 'all' ||
        p.facts.some((fact) => fact.category === selectedCategory);

      return matchesSearch && matchesParty && matchesStatus && matchesRole && matchesCategory;
    });
  }, [searchTerm, selectedParty, selectedStatus, selectedRole, selectedCategory]);

  // Dynamic news feed for generic or active search query
  const liveQueryNews = useMemo(() => {
    if (!searchTerm.trim()) return [];
    return searchNewsForQuery(searchTerm, null);
  }, [searchTerm]);

  const handleToggleCompare = (figure: PublicFigure) => {
    if (compareList.some((f) => f.id === figure.id)) {
      setCompareList(compareList.filter((f) => f.id !== figure.id));
    } else {
      if (compareList.length >= 4) {
        alert('Você pode comparar no máximo 4 políticos simultaneamente.');
        return;
      }
      setCompareList([...compareList, figure]);
    }
  };

  const getPoliticalStatusBadge = (status: PublicFigure['politicalStatus']) => {
    switch (status) {
      case 'candidato':
        return (
          <span style={{ backgroundColor: '#fef08a', color: '#854d0e', border: '1px solid #fde047', padding: '0.15rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}>
            <Vote size={12} /> Candidato
          </span>
        );
      case 'em_exercicio':
        return (
          <span style={{ backgroundColor: '#dcfce7', color: '#15803d', border: '1px solid #bbf7d0', padding: '0.15rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}>
            <UserCheck size={12} /> Em Exercício
          </span>
        );
      case 'ex_mandato':
        return (
          <span style={{ backgroundColor: '#f1f5f9', color: '#475569', border: '1px solid #cbd5e1', padding: '0.15rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 700 }}>
            Ex-Mandato
          </span>
        );
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-main)' }}>
      {/* Header Bar */}
      <Header
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          setSelectedFigureForProfile(null);
        }}
        onOpenMethodology={() => setIsMethodologyOpen(true)}
        onOpenSubmitModal={() => setIsSubmitModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="container" style={{ flex: 1, paddingTop: '2rem', paddingBottom: '3rem' }}>
        {/* VIEW 1: Individual Profile Detail */}
        {selectedFigureForProfile ? (
          <PoliticianProfile
            figure={selectedFigureForProfile}
            onBack={() => setSelectedFigureForProfile(null)}
            onSelectForCompare={handleToggleCompare}
            isComparing={compareList.some((f) => f.id === selectedFigureForProfile.id)}
          />
        ) : activeTab === 'explore' ? (
          /* VIEW 2: Explore & Search Public Figures */
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Banner Intro */}
            <div style={{
              backgroundColor: 'var(--primary-light)',
              border: '1px solid #bfdbfe',
              borderRadius: 'var(--radius)',
              padding: '1.5rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1rem'
            }}>
              <div style={{ maxWidth: '680px' }}>
                <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--primary-hover)', margin: '0 0 0.5rem' }}>
                  Busca de Histórico Factual de Qualquer Candidato ou Figura Pública
                </h2>
                <p style={{ fontSize: '0.9rem', color: '#1e3a8a', margin: 0, lineHeight: 1.5 }}>
                  Consulte histórico, escândalos, gastos públicos e últimas notícias de candidatos a Presidente, Prefeito, Deputado, Senador e mais com fontes auditáveis.
                </p>
              </div>

              {compareList.length > 0 && (
                <button
                  onClick={() => setActiveTab('compare')}
                  className="btn btn-primary"
                  style={{ gap: '0.5rem' }}
                >
                  <Scale size={18} /> Ver Comparação ({compareList.length}) <ArrowRight size={16} />
                </button>
              )}
            </div>

            {/* Search & Filter Controls */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <SearchBar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                placeholder="Buscar qualquer candidato por nome, cargo (ex: Prefeito, Presidente, Deputado) ou estado..."
              />
              <FilterBar
                selectedParty={selectedParty}
                setSelectedParty={setSelectedParty}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                selectedStatus={selectedStatus}
                setSelectedStatus={setSelectedStatus}
                selectedRole={selectedRole}
                setSelectedRole={setSelectedRole}
                parties={parties}
              />
            </div>

            {/* Live Search News Feed */}
            {liveQueryNews.length > 0 && (
              <RecentNewsSection newsArticles={liveQueryNews} politicianName={`termo "${searchTerm}"`} />
            )}

            {/* Politician Cards Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '1.5rem'
            }}>
              {filteredPoliticians.map((figure) => {
                const isComparing = compareList.some((f) => f.id === figure.id);

                return (
                  <div
                    key={figure.id}
                    className="card"
                    style={{
                      padding: '1.25rem',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      gap: '1rem'
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                        <img
                          src={figure.photoUrl}
                          alt={figure.popularName}
                          style={{
                            width: '64px',
                            height: '64px',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            border: '2px solid var(--border)'
                          }}
                        />

                        <div style={{ flex: 1 }}>
                          <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap', marginBottom: '0.2rem' }}>
                            <span style={{
                              fontSize: '0.75rem',
                              fontWeight: 700,
                              color: 'var(--primary)',
                              backgroundColor: 'var(--primary-light)',
                              padding: '0.15rem 0.5rem',
                              borderRadius: '4px'
                            }}>
                              {figure.politicalParty} - {figure.state}
                            </span>
                            {getPoliticalStatusBadge(figure.politicalStatus)}
                          </div>

                          <h3 style={{
                            fontSize: '1.15rem',
                            fontWeight: 700,
                            margin: '0.25rem 0 0.1rem',
                            color: 'var(--secondary)',
                            cursor: 'pointer'
                          }}
                            onClick={() => setSelectedFigureForProfile(figure)}
                          >
                            {figure.popularName}
                          </h3>

                          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>
                            {figure.currentRole}
                          </p>
                        </div>
                      </div>

                      <p style={{
                        fontSize: '0.85rem',
                        color: 'var(--text-main)',
                        margin: '1rem 0 0.75rem',
                        lineHeight: 1.45,
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}>
                        {figure.biography}
                      </p>

                      {/* Mini Score indicator */}
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        backgroundColor: 'var(--bg-main)',
                        padding: '0.5rem 0.75rem',
                        borderRadius: '8px',
                        border: '1px solid var(--border)',
                        fontSize: '0.85rem'
                      }}>
                        <span style={{ color: 'var(--text-muted)', fontWeight: 500 }}>Score Factual:</span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                          <ShieldCheck size={16} color="var(--primary)" />
                          <strong style={{ fontSize: '1.1rem', color: 'var(--primary)' }}>
                            {figure.score.overallHonestyScore}
                          </strong>
                          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>/100</span>
                        </div>
                      </div>
                    </div>

                    {/* Card Actions */}
                    <div style={{ display: 'flex', gap: '0.5rem', borderTop: '1px solid var(--border)', paddingTop: '0.75rem' }}>
                      <button
                        onClick={() => setSelectedFigureForProfile(figure)}
                        className="btn btn-primary"
                        style={{ flex: 1, fontSize: '0.825rem', padding: '0.5rem' }}
                      >
                        Ver Histórico
                      </button>

                      <button
                        onClick={() => handleToggleCompare(figure)}
                        className={`btn ${isComparing ? 'btn-secondary' : 'btn-outline'}`}
                        style={{ fontSize: '0.825rem', padding: '0.5rem 0.75rem' }}
                        title={isComparing ? 'Remover da comparação' : 'Adicionar para comparar'}
                      >
                        <Scale size={15} /> {isComparing ? 'Comparando' : 'Comparar'}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : activeTab === 'compare' ? (
          /* VIEW 3: Compare Side by Side */
          <ComparisonMatrix
            selectedFigures={compareList}
            onRemoveFigure={(id) => setCompareList(compareList.filter((f) => f.id !== id))}
            onAddMore={() => setActiveTab('explore')}
          />
        ) : (
          /* VIEW 4: Leaderboard & Ranking */
          <Leaderboard
            figures={mockPoliticians}
            onSelectFigure={(figure) => setSelectedFigureForProfile(figure)}
          />
        )}
      </main>

      {/* Modals */}
      <MethodologyModal isOpen={isMethodologyOpen} onClose={() => setIsMethodologyOpen(false)} />
      <SubmitFactModal isOpen={isSubmitModalOpen} onClose={() => setIsSubmitModalOpen(false)} />

      {/* Footer */}
      <footer style={{
        backgroundColor: 'var(--bg-card)',
        borderTop: '1px solid var(--border)',
        padding: '1.5rem 0',
        color: 'var(--text-muted)',
        fontSize: '0.85rem',
        marginTop: 'auto'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <strong>FatoPúblico</strong> &copy; {new Date().getFullYear()} - Dados públicos e checagem factual independente.
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button onClick={() => setIsMethodologyOpen(true)} style={{ color: 'var(--primary)', fontSize: '0.85rem' }}>
              Metodologia de Pontuação
            </button>
            <button onClick={() => setIsSubmitModalOpen(true)} style={{ color: 'var(--primary)', fontSize: '0.85rem' }}>
              Sugerir Fonte / Fato
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
