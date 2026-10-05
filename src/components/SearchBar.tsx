import React from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  placeholder?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  setSearchTerm,
  placeholder = 'Buscar por nome, cargo ou estado...'
}) => {
  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <Search
        size={18}
        style={{
          position: 'absolute',
          left: '1rem',
          top: '50%',
          transform: 'translateY(-50%)',
          color: 'var(--text-muted)'
        }}
      />
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder={placeholder}
        style={{
          paddingLeft: '2.75rem',
          paddingRight: searchTerm ? '2.5rem' : '1rem',
          height: '46px',
          fontSize: '0.95rem',
          borderRadius: '10px',
          border: '1px solid var(--border)',
          backgroundColor: '#fff',
          boxShadow: 'var(--shadow-sm)'
        }}
      />
      {searchTerm && (
        <button
          onClick={() => setSearchTerm('')}
          style={{
            position: 'absolute',
            right: '0.75rem',
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'var(--text-muted)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0.2rem',
            borderRadius: '50%'
          }}
          title="Limpar busca"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
};
