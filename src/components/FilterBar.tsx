import type { FactCategory, PoliticalStatus, RoleCategory } from '../types/politician';

interface FilterBarProps {
  selectedParty: string;
  setSelectedParty: (party: string) => void;
  selectedCategory: FactCategory | 'all';
  setSelectedCategory: (category: FactCategory | 'all') => void;
  selectedStatus: PoliticalStatus | 'all';
  setSelectedStatus: (status: PoliticalStatus | 'all') => void;
  selectedRole: RoleCategory | 'all';
  setSelectedRole: (role: RoleCategory | 'all') => void;
  parties: string[];
}

export const FilterBar: React.FC<FilterBarProps> = ({
  selectedParty,
  setSelectedParty,
  selectedCategory,
  setSelectedCategory,
  selectedStatus,
  setSelectedStatus,
  selectedRole,
  setSelectedRole,
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
      {/* Role Filter */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flex: '1 1 180px' }}>
        <label htmlFor="role-select" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', minWidth: '50px' }}>
          Cargo:
        </label>
        <select
          id="role-select"
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value as RoleCategory | 'all')}
          style={{ height: '38px', fontSize: '0.85rem' }}
        >
          <option value="all">Todos os Cargos</option>
          <option value="Presidente">Presidente</option>
          <option value="Prefeito">Prefeito</option>
          <option value="Governador">Governador</option>
          <option value="Senador">Senador</option>
          <option value="Deputado Federal">Deputado Federal</option>
          <option value="Deputado Estadual">Deputado Estadual</option>
          <option value="Vereador">Vereador</option>
        </select>
      </div>

      {/* Candidacy Status Filter */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flex: '1 1 180px' }}>
        <label htmlFor="status-select" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', minWidth: '60px' }}>
          Situação:
        </label>
        <select
          id="status-select"
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value as PoliticalStatus | 'all')}
          style={{ height: '38px', fontSize: '0.85rem' }}
        >
          <option value="all">Todas as Situações</option>
          <option value="candidato">Candidatos a Eleição</option>
          <option value="em_exercicio">Em Exercício do Mandato</option>
          <option value="ex_mandato">Ex-Mandato / Sem Cargo</option>
        </select>
      </div>

      {/* Party Filter */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flex: '1 1 180px' }}>
        <label htmlFor="party-select" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', minWidth: '55px' }}>
          Partido:
        </label>
        <select
          id="party-select"
          value={selectedParty}
          onChange={(e) => setSelectedParty(e.target.value)}
          style={{ height: '38px', fontSize: '0.85rem' }}
        >
          <option value="all">Todos os Partidos</option>
          {parties.map((party) => (
            <option key={party} value={party}>
              {party}
            </option>
          ))}
        </select>
      </div>

      {/* Fact Category Filter */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flex: '1 1 200px' }}>
        <label htmlFor="category-select" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', minWidth: '70px' }}>
          Categoria:
        </label>
        <select
          id="category-select"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value as FactCategory | 'all')}
          style={{ height: '38px', fontSize: '0.85rem' }}
        >
          <option value="all">Todas as Categorias</option>
          <option value="legal_cases">Casos Judiciais & Integridade</option>
          <option value="voting_record">Atuação & Votações</option>
          <option value="public_spending">Gastos Públicos & Transparência</option>
          <option value="political_history">Histórico Político</option>
          <option value="declarations">Declarações & Checagem</option>
        </select>
      </div>
    </div>
  );
};
