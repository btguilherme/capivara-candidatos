import type { PublicFigure } from '../types/politician';

export const mockPoliticians: PublicFigure[] = [
  {
    id: 'marina-silva',
    name: 'Maria Osmarina Marina Silva Vaz de Lima',
    popularName: 'Marina Silva',
    photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    currentRole: 'Ministra do Meio Ambiente e Mudança do Clima',
    roleCategory: 'Deputado Federal',
    politicalStatus: 'em_exercicio',
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
      }
    ],
    recentNews: [
      {
        id: 'ms-news-1',
        title: 'Ministério do Meio Ambiente apresenta balanço de ações contra desmatamento na Amazônia',
        snippet: 'Relatório aponta queda significativa nos alertas de garimpo ilegal e fortalecimento das fiscalizações do IBAMA.',
        publisher: 'G1 Política',
        url: 'https://g1.globo.com/politica/',
        publishedAt: '2024-03-01',
        topicCategory: 'spending',
        reliabilityScore: 95
      }
    ]
  },
  {
    id: 'tabata-amaral',
    name: 'Tabata Claudia Amaral de Pontes',
    popularName: 'Tabata Amaral',
    photoUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
    currentRole: 'Candidata a Prefeita / Deputada Federal',
    roleCategory: 'Prefeito',
    politicalStatus: 'candidato',
    politicalParty: 'PSB',
    state: 'SP',
    biography: 'Apolitica, cientista política e astrofísica formada em Harvard. Co-fundadora dos movimentos Mapa Educação e Acredito. Candidata à Prefeitura de São Paulo.',
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
    tags: ['Prefeitura SP', 'Educação', 'São Paulo', 'PSB', 'Candidato'],
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
          }
        ]
      }
    ],
    recentNews: [
      {
        id: 'ta-news-1',
        title: 'Candidata apresenta plano de metas para educação e transporte público na capital',
        snippet: 'Propostas focam em creches em tempo integral e transparência nos contratos de transporte coletivo.',
        publisher: 'Folha de S.Paulo',
        url: 'https://www1.folha.uol.com.br/',
        publishedAt: '2024-03-10',
        topicCategory: 'proposal',
        reliabilityScore: 94
      }
    ]
  },
  {
    id: 'guilherme-boulos',
    name: 'Guilherme Castro Boulos',
    popularName: 'Guilherme Boulos',
    photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    currentRole: 'Candidato a Prefeito / Deputado Federal',
    roleCategory: 'Prefeito',
    politicalStatus: 'candidato',
    politicalParty: 'PSOL',
    state: 'SP',
    biography: 'Professor, psicanalista, ativista social e político brasileiro. Coordenador do MTST e Deputado Federal mais votado em SP nas eleições de 2022.',
    yearsInPublicOffice: 2,
    score: {
      transparencyScore: 89,
      judicialIntegrityScore: 92,
      factCheckAccuracyScore: 88,
      overallHonestyScore: 90,
      totalFactsAnalyzed: 8,
      confirmedFactsCount: 7,
      refutedFactsCount: 0,
      underReviewFactsCount: 1
    },
    tags: ['Prefeitura SP', 'Habitação', 'PSOL', 'Candidato'],
    facts: [
      {
        id: 'gb-fact-1',
        title: 'Prestação de Contas Eleitorais Aprovada sem Ressalvas pelo TRE-SP',
        description: 'Contas relativas à campanha para Deputado Federal em 2022 aprovadas integralmente pela Justiça Eleitoral.',
        category: 'public_spending',
        date: '2022-12-15',
        status: 'confirmed',
        confidenceScore: 98,
        impactScore: 8,
        sources: [
          {
            id: 'src-gb-1',
            title: 'DivulgaCandContas - Prestação de Contas TRE-SP',
            publisher: 'TSE / TRE-SP',
            url: 'https://divulgacandcontas.tse.jus.br',
            publishDate: '2022-12-15',
            reliabilityScore: 100,
            isOfficialSource: true
          }
        ]
      }
    ],
    recentNews: [
      {
        id: 'gb-news-1',
        title: 'Pesquisas e propostas de sabatina para o plano de moradia popular',
        snippet: 'Candidato detalhou em sabatina propostas para regularização fundiária e orçamento participativo.',
        publisher: 'UOL Notícias',
        url: 'https://noticias.uol.com.br/',
        publishedAt: '2024-03-12',
        topicCategory: 'proposal',
        reliabilityScore: 92
      }
    ]
  },
  {
    id: 'rodrigo-pacheco',
    name: 'Rodrigo Otavio Soares Pacheco',
    popularName: 'Rodrigo Pacheco',
    photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
    currentRole: 'Presidente do Senado Federal',
    roleCategory: 'Senador',
    politicalStatus: 'em_exercicio',
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
        sources: [
          {
            id: 'src-rp-1',
            title: 'STF declara inconstitucionalidade do Orçamento Secreto',
            publisher: 'Supremo Tribunal Federal (STF)',
            url: 'https://portal.stf.jus.br',
            publishDate: '2022-12-19',
            reliabilityScore: 100,
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
    photoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
    currentRole: 'Governador do Rio Grande do Sul',
    roleCategory: 'Governador',
    politicalStatus: 'em_exercicio',
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
        id: 'el-fact-2',
        title: 'Controversia sobre Afirmações de Gastos com Prevenção de Enchentes',
        description: 'Afirmação sobre execução orçamentária do sistema de proteção contra cheias em Porto Alegre passou por checagem de fatos.',
        category: 'declarations',
        date: '2024-05-10',
        status: 'refuted',
        confidenceScore: 88,
        impactScore: -6,
        sources: [
          {
            id: 'src-el-2',
            title: 'Aos Fatos: Checagem do Orçamento de Prevenção de Desastres no RS',
            publisher: 'Aos Fatos',
            url: 'https://www.aosfatos.org',
            publishDate: '2024-05-12',
            reliabilityScore: 94,
            isOfficialSource: false
          }
        ]
      }
    ]
  }
];
