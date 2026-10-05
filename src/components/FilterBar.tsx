import type { FactCategory } from '../types/politician';

interface FilterBarProps {
  selectedParty: string;
  setSelectedParty: (party: string) => void;
  selectedCategory: FactCategory | 'all';
  setSelectedCategory: (category: FactCategory | 'all') => void;
  parties: string[];
}

export const FilterBar: React.FC<FilterBarProps> = ({
  selectedParty,
  setSelectedParty,
  selectedCategory,
  setSelectedCategory,
  parties
}) => {
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '1rem',
      alignItems: 'center',
      marginBottom: '1.5rem',
      padding: '1rem',
      backgroundColor: 'var(--bg-card)',
      borderRadius: 'var(--radius)',
      border: '1px solid var(--border)',
      boxShadow: 'var(--shadow-sm)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flex: '1 1 200px' }}>
        <label htmlFor="party-select" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', minWidth: '60px' }}>
          Partido:
        </label>
        <select
          id="party-select"
          value={selectedParty}
          onChange={(e) => setSelectedParty(e.target.value)}
          style={{ height: '38px', fontSize: '0.875rem' }}
        >
          <option value="all">Todos os Partidos</option>
          {parties.map((party) => (
            <option key={party} value={party}>
              {party}
            </option>
          ))}
        </select>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flex: '1 1 240px' }}>
        <label htmlFor="category-select" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', minWidth: '70px' }}>
          Categoria:
        </label>
        <select
          id="category-select"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value as FactCategory | 'all')}
          style={{ height: '38px', fontSize: '0.875rem' }}
        >
          <option value="all">Todas as Categorias</option>
          <option value="legal_cases">Casos Judiciais & Integridade</option>
          <option value="voting_record">Atuação & Votações</option>
          <option value="public_spending">Gastos Públicos & Transparência</option>
          <option value="political_history">Histórico Político</option>
          <option value="declarations">Declarações & Checagem de Fatos</option>
        </select>
      </div>
    </div>
  );
};
