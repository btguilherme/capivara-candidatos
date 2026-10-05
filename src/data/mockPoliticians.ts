import type { PublicFigure } from '../types/politician';

export const mockPoliticians: PublicFigure[] = [
  {
    id: 'marina-silva',
    name: 'Maria Osmarina Marina Silva Vaz de Lima',
    popularName: 'Marina Silva',
    photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    currentRole: 'Ministra do Meio Ambiente e Mudança do Clima',
    politicalParty: 'REDE',
    state: 'AC',
    biography: 'Ambientalista, historiadora, pedagoga e política brasileira. Foi senadora pelo Acre, vereadora, deputada estadual e candidata à Presidência da República por três vezes.',
    yearsInPublicOffice: 32,
    score: {
      transparencyScore: 94,
      judicialIntegrityScore: 98,
      factCheckAccuracyScore: 92,
      overallHonestyScore: 95,
      totalFactsAnalyzed: 12,
      confirmedFactsCount: 11,
      refutedFactsCount: 0,
      underReviewFactsCount: 1
    },
    tags: ['Meio Ambiente', 'Sustentabilidade', 'Acre', 'Ex-Senadora'],
    facts: [
      {
        id: 'ms-fact-1',
        title: 'Certidão Negativa de Processos no STF/TSE',
        description: 'Não possui condenações ou processos criminais por corrupção em órgãos superiores do Judiciário brasileiro.',
        category: 'legal_cases',
        date: '2024-01-15',
        status: 'confirmed',
        confidenceScore: 98,
        impactScore: 9,
        notes: 'Verificado diretamente através das certidões públicas de antecedentes do STF e do TSE.',
        sources: [
          {
            id: 'src-ms-1',
            title: 'Consulta Processual Unificada e Certidões do STF',
            publisher: 'Supremo Tribunal Federal (STF)',
            url: 'https://portal.stf.jus.br',
            publishDate: '2024-01-10',
            reliabilityScore: 100,
            isOfficialSource: true
          }
        ]
      },
      {
        id: 'ms-fact-2',
        title: 'Aprovação do Plano de Ação para Prevenção e Controle do Desmatamento na Amazônia (PPCDAm)',
        description: 'Durante sua gestão no Ministério do Meio Ambiente nos anos 2000, liderou a criação do PPCDAm que reduziu o desmatamento da Amazônia em mais de 80%.',
        category: 'political_history',
        date: '2004-03-15',
        status: 'confirmed',
        confidenceScore: 96,
        impactScore: 10,
        sources: [
          {
            id: 'src-ms-2',
            title: 'Dados Históricos do PRODES / INPE',
            publisher: 'Instituto Nacional de Pesquisas Espaciais (INPE)',
            url: 'http://www.inpe.br',
            publishDate: '2020-05-20',
            reliabilityScore: 98,
            isOfficialSource: true
          },
          {
            id: 'src-ms-3',
            title: 'Checagem de Discurso sobre Redução do Desmatamento',
            publisher: 'Agência Lupa',
            url: 'https://lupa.uol.com.br',
            publishDate: '2022-09-12',
            reliabilityScore: 92,
            isOfficialSource: false
          }
        ]
      },
      {
        id: 'ms-fact-3',
        title: 'Divulgação Integral de Gastos com Cota Parlamentar',
        description: 'Todas as prestações de contas de verba parlamentar durante mandato no Senado apresentaram notas fiscais detalhadas no Portal da Transparência.',
        category: 'public_spending',
        date: '2018-12-01',
        status: 'confirmed',
        confidenceScore: 95,
        impactScore: 8,
        sources: [
          {
            id: 'src-ms-4',
            title: 'Portal da Transparência do Senado Federal',
            publisher: 'Senado Federal',
            url: 'https://www12.senado.leg.br/transparencia',
            publishDate: '2019-01-05',
            reliabilityScore: 99,
            isOfficialSource: true
          }
        ]
      }
    ]
  },
  {
    id: 'tabata-amaral',
    name: 'Tabata Claudia Amaral de Pontes',
    popularName: 'Tabata Amaral',
    photoUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
    currentRole: 'Deputada Federal',
    politicalParty: 'PSB',
    state: 'SP',
    biography: 'Apolitica, cientista política e astrofísica formada em Harvard. Co-fundadora dos movimentos Mapa Educação e Acredito. Deputada Federal eleita por São Paulo.',
    yearsInPublicOffice: 6,
    score: {
      transparencyScore: 92,
      judicialIntegrityScore: 99,
      factCheckAccuracyScore: 90,
      overallHonestyScore: 93,
      totalFactsAnalyzed: 10,
      confirmedFactsCount: 9,
      refutedFactsCount: 0,
      underReviewFactsCount: 1
    },
    tags: ['Educação', 'São Paulo', 'PSB', 'Jovem Liderança'],
    facts: [
      {
        id: 'ta-fact-1',
        title: 'Autoria da Lei da Distribuição Gratuita de Absorventes (Dignidade Menstrual)',
        description: 'Idealizou e articulou a aprovação do projeto de lei que tornou política pública a distribuição de absorventes em escolas e para populações vulneráveis.',
        category: 'voting_record',
        date: '2021-09-14',
        status: 'confirmed',
        confidenceScore: 99,
        impactScore: 9,
        sources: [
          {
            id: 'src-ta-1',
            title: 'Projeto de Lei 4968/2019 - Atividade Legislativa',
            publisher: 'Câmara dos Deputados',
            url: 'https://www.camara.leg.br',
            publishDate: '2021-09-15',
            reliabilityScore: 100,
            isOfficialSource: true
          },
          {
            id: 'src-ta-2',
            title: 'Sancionada lei de combate à pobreza menstrual',
            publisher: 'Aos Fatos',
            url: 'https://www.aosfatos.org',
            publishDate: '2021-10-08',
            reliabilityScore: 93,
            isOfficialSource: false
          }
        ]
      },
      {
        id: 'ta-fact-2',
        title: 'Ausência de processos ou investigação criminal por improbidade',
        description: 'Sem registro de ações penais ou apurações de desvio de dinheiro público no STF, STJ ou TJSP.',
        category: 'legal_cases',
        date: '2024-02-01',
        status: 'confirmed',
        confidenceScore: 97,
        impactScore: 9,
        sources: [
          {
            id: 'src-ta-3',
            title: 'Certidões de Distribuição de Processos - Tribunal de Justiça de SP',
            publisher: 'TJSP',
            url: 'https://www.tjsp.jus.br',
            publishDate: '2024-02-01',
            reliabilityScore: 100,
            isOfficialSource: true
          }
        ]
      }
    ]
  },
  {
    id: 'rodrigo-pacheco',
    name: 'Rodrigo Otavio Soares Pacheco',
    popularName: 'Rodrigo Pacheco',
    photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    currentRole: 'Presidente do Senado Federal',
    politicalParty: 'PSD',
    state: 'MG',
    biography: 'Advogado e político brasileiro. Foi deputado federal e é atualmente senador por Minas Gerais e Presidente do Congresso Nacional.',
    yearsInPublicOffice: 10,
    score: {
      transparencyScore: 82,
      judicialIntegrityScore: 88,
      factCheckAccuracyScore: 80,
      overallHonestyScore: 83,
      totalFactsAnalyzed: 14,
      confirmedFactsCount: 10,
      refutedFactsCount: 2,
      underReviewFactsCount: 2
    },
    tags: ['Minas Gerais', 'Senado', 'PSD', 'Direito'],
    facts: [
      {
        id: 'rp-fact-1',
        title: 'Atuação na Pauta de Votações do Quadro Orçamentário e Emendas',
        description: 'Mandato caracterizado pelo reordenamento de verbas de emendas de relator (RP9) e decisões relativas à transparência do orçamento secreto.',
        category: 'public_spending',
        date: '2022-12-19',
        status: 'under_review',
        confidenceScore: 78,
        impactScore: -3,
        notes: 'Decisão judicial no STF exigiu readequação e transparência das emendas orçamentárias geridas no Congresso.',
        sources: [
          {
            id: 'src-rp-1',
            title: 'STF declara inconstitucionalidade do Orçamento Secreto',
            publisher: 'Supremo Tribunal Federal (STF)',
            url: 'https://portal.stf.jus.br',
            publishDate: '2022-12-19',
            reliabilityScore: 100,
            isOfficialSource: true
          },
          {
            id: 'src-rp-2',
            title: 'Análise do cumprimento das decisões de transparência no Congresso',
            publisher: 'Agência Lupa',
            url: 'https://lupa.uol.com.br',
            publishDate: '2023-03-10',
            reliabilityScore: 91,
            isOfficialSource: false
          }
        ]
      },
      {
        id: 'rp-fact-2',
        title: 'Declaração Factual sobre Aprovação da Reforma Tributária',
        description: 'Atuou na coordenação da votação da Reforma Tributária no Senado Federal, com ampla convergência entre setores econômicos.',
        category: 'voting_record',
        date: '2023-11-08',
        status: 'confirmed',
        confidenceScore: 95,
        impactScore: 8,
        sources: [
          {
            id: 'src-rp-3',
            title: 'Votação do PEC da Reforma Tributária no Senado',
            publisher: 'Agência Senado',
            url: 'https://www12.senado.leg.br/noticias',
            publishDate: '2023-11-08',
            reliabilityScore: 98,
            isOfficialSource: true
          }
        ]
      }
    ]
  },
  {
    id: 'eduardo-leite',
    name: 'Eduardo Figueiredo Cavalheiro Leite',
    popularName: 'Eduardo Leite',
    photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
    currentRole: 'Governador do Rio Grande do Sul',
    politicalParty: 'PSDB',
    state: 'RS',
    biography: 'Bacharel em Direito e político brasileiro. Foi vereador e prefeito de Pelotas e reeleito Governador do estado do Rio Grande do Sul.',
    yearsInPublicOffice: 16,
    score: {
      transparencyScore: 86,
      judicialIntegrityScore: 91,
      factCheckAccuracyScore: 85,
      overallHonestyScore: 87,
      totalFactsAnalyzed: 11,
      confirmedFactsCount: 9,
      refutedFactsCount: 1,
      underReviewFactsCount: 1
    },
    tags: ['Rio Grande do Sul', 'Governador', 'PSDB'],
    facts: [
      {
        id: 'el-fact-1',
        title: 'Aprovação do Plano de Privatizações e Reformas do Estado',
        description: 'Realizou a privatização da CEEE e da Corsan dentro do programa de reestruturação fiscal do Rio Grande do Sul.',
        category: 'political_history',
        date: '2021-07-08',
        status: 'confirmed',
        confidenceScore: 94,
        impactScore: 6,
        sources: [
          {
            id: 'src-el-1',
            title: 'Diário Oficial do Estado do Rio Grande do Sul - Leilão CEEE',
            publisher: 'Governo do Estado do RS',
            url: 'https://estado.rs.gov.br',
            publishDate: '2021-07-09',
            reliabilityScore: 98,
            isOfficialSource: true
          }
        ]
      },
      {
        id: 'el-fact-2',
        title: 'Controversia sobre Afirmações de Gastos com Prevenção de Enchentes',
        description: 'Afirmação sobre execução orçamentária do sistema de proteção contra cheias em Porto Alegre passou por checagem de fatos.',
        category: 'declarations',
        date: '2024-05-10',
        status: 'refuted',
        confidenceScore: 88,
        impactScore: -6,
        notes: 'Verificação contábil demonstrou que verbas aprovadas foram subexecutadas nos anos anteriores à catástrofe.',
        sources: [
          {
            id: 'src-el-2',
            title: 'Aos Fatos: Checagem do Orçamento de Prevenção de Desastres no RS',
            publisher: 'Aos Fatos',
            url: 'https://www.aosfatos.org',
            publishDate: '2024-05-12',
            reliabilityScore: 94,
            isOfficialSource: false
          },
          {
            id: 'src-el-3',
            title: 'Relatório de Execução Orçamentária TCE-RS',
            publisher: 'Tribunal de Contas do Estado do RS (TCE-RS)',
            url: 'https://tce.rs.gov.br',
            publishDate: '2024-05-15',
            reliabilityScore: 100,
            isOfficialSource: true
          }
        ]
      }
    ]
  }
];
