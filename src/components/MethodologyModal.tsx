import React, { useState } from 'react';
import { X, ShieldCheck, FileCheck2, Scale, Users } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MethodologyModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            color: 'var(--text-muted)'
          }}
        >
          <X size={20} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
          <ShieldCheck size={28} color="var(--primary)" />
          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--secondary)', margin: 0 }}>
            Metodologia & Transparência do FatoPúblico
          </h2>
        </div>

        <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
          O <strong>FatoPúblico</strong> foi concebido para fornecer aos cidadãos um panorama neutro, apartidário e auditável sobre figuras públicas e políticos brasileiros, fundamentado estritamente em dados governamentais e checagens jornalísticas independentes.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem' }}>
          <div style={{ padding: '0.85rem', backgroundColor: 'var(--bg-main)', borderRadius: '8px', border: '1px solid var(--border)' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <FileCheck2 size={18} color="var(--primary)" /> 1. Critérios de Confirmação Factual
            </h3>
            <p style={{ color: 'var(--text-muted)', margin: 0, lineHeight: 1.5 }}>
              Um fato só é classificado como <strong>Confirmado</strong> quando acompanhado de ao menos uma fonte oficial (como diários oficiais, acórdãos do STF/TSE, portais de transparência) ou relatórios de agências de checagem reconhecidas (como Agência Lupa e Aos Fatos).
            </p>
          </div>

          <div style={{ padding: '0.85rem', backgroundColor: 'var(--bg-main)', borderRadius: '8px', border: '1px solid var(--border)' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Scale size={18} color="var(--primary)" /> 2. Cálculo do Score de Confiabilidade
            </h3>
            <p style={{ color: 'var(--text-muted)', margin: 0, lineHeight: 1.5 }}>
              O score é gerado ponderando três pilares principais: <strong>Integridade Judicial</strong> (ausência de processos criminais/improbidade), <strong>Transparência de Gastos</strong> (prestação de contas sem ressalvas) e <strong>Acurácia Declaratória</strong> (proporção de falas verdadeiras checadas).
            </p>
          </div>

          <div style={{ padding: '0.85rem', backgroundColor: 'var(--bg-main)', borderRadius: '8px', border: '1px solid var(--border)' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Users size={18} color="var(--primary)" /> 3. Auditoria & Verificação Humana
            </h3>
            <p style={{ color: 'var(--text-muted)', margin: 0, lineHeight: 1.5 }}>
              Cada item publicado contém o link direto para a fonte primaria. Qualquer usuário pode revisar, contestar ou enviar novos documentos para reavaliação pela comunidade e moderadores.
            </p>
          </div>
        </div>

        <div style={{ marginTop: '1.5rem', textAlign: 'right' }}>
          <button onClick={onClose} className="btn btn-primary">
            Entendi
          </button>
        </div>
      </div>
    </div>
  );
};

export const SubmitFactModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            color: 'var(--text-muted)'
          }}
        >
          <X size={20} />
        </button>

        <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '0.5rem' }}>
          Enviar Fato ou Fonte para Verificação
        </h2>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
          Contribua para a transparência. Submeta notícias, processos ou documentos públicos com link de acesso para checagem humana.
        </p>

        {submitted ? (
          <div style={{ padding: '2rem', textAlign: 'center', backgroundColor: '#f0fdf4', color: '#166534', borderRadius: '8px' }}>
            <ShieldCheck size={36} style={{ marginBottom: '0.5rem' }} />
            <p style={{ fontWeight: 700, fontSize: '1.1rem' }}>Fato enviado com sucesso!</p>
            <p style={{ fontSize: '0.85rem' }}>Nosso time de moderação analisará a fonte antes da publicação.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.25rem' }}>
                Nome do Político / Figura Pública:
              </label>
              <input type="text" required placeholder="Ex: Marina Silva" />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.25rem' }}>
                Título / Descrição Curta do Fato:
              </label>
              <input type="text" required placeholder="Ex: Absolvição em processo pelo TSE" />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.25rem' }}>
                URL da Fonte Comprobatória (STF, TSE, Agência de Checagem):
              </label>
              <input type="url" required placeholder="https://portal.stf.jus.br/..." />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.25rem' }}>
                Observações Adicionais:
              </label>
              <textarea rows={3} placeholder="Detalhes relevantes para o auditor factual..." />
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '0.5rem' }}>
              <button type="button" onClick={onClose} className="btn btn-secondary">
                Cancelar
              </button>
              <button type="submit" className="btn btn-primary">
                Submeter Fato
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
