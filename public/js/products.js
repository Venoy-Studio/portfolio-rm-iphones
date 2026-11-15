/**
 * RM IPHONES — Base de Dados Oficial de Produtos e Estoque
 * Fotos reais em WebP, saúde de bateria informada, valores à vista e parcelados em até 18x.
 */

export const PRODUCTS = [
  {
    id: 'rm-16pm-589130',
    code: '741808',
    sku: 'RM-16PM-TIT',
    name: 'iPhone 16 Pro Max',
    category: 'linha-16',
    color: 'Titânio Preto',
    storage: '256GB',
    condition: 'Seminovo Impecável',
    battery: 100,
    pricePix: 7490,
    priceCard: 8190,
    installments: '18x de R$ 455,00',
    badge: 'Lançamento',
    badgeType: 'highlight',
    images: [
      '/img/produtos/589130-0.webp',
      '/img/produtos/589130-1.webp',
      '/img/produtos/589130-2.webp',
      '/img/produtos/589130-3.webp'
    ],
    description: 'O topo de linha supremo da Apple. Construção em titânio grau 5, botão de controle de câmera touch, chip A18 Pro com inteligência Apple e zoom óptico 5x.',
    specs: {
      screen: '6.9" Super Retina XDR ProMotion 120Hz',
      chip: 'A18 Pro Bionic (3nm)',
      camera: 'Principal 48MP + Ultra-Wide 48MP + Telefoto 5x 12MP',
      batteryLife: 'Até 33h de reprodução de vídeo',
      connectivity: '5G, Wi-Fi 7, USB-C 3.0 (10Gbps)'
    },
    warranty: 'Garantia RM iPhones + Laudo Técnico de 35 Itens'
  },
  {
    id: 'rm-16p-741808',
    code: '741808',
    sku: 'RM-16P-NAT',
    name: 'iPhone 16 Pro',
    category: 'linha-16',
    color: 'Titânio Natural',
    storage: '128GB',
    condition: 'Novo Lacrado',
    battery: 100,
    pricePix: 6490,
    priceCard: 7090,
    installments: '18x de R$ 393,88',
    badge: 'Bateria 100%',
    badgeType: 'battery',
    images: [
      '/img/produtos/741808-0.webp',
      '/img/produtos/741808-1.webp',
      '/img/produtos/741808-2.webp',
      '/img/produtos/741808-3.webp'
    ],
    description: 'Poder profissional no tamanho perfeito. Titânio natural escovado, botão de ação, botão da câmera e suporte total à Apple Intelligence.',
    specs: {
      screen: '6.3" Super Retina XDR ProMotion 120Hz',
      chip: 'A18 Pro Bionic',
      camera: 'Tripla 48MP Fusion + Ultra-Wide 48MP + Telefoto 5x',
      batteryLife: 'Até 27h de reprodução de vídeo',
      connectivity: '5G, Wi-Fi 7, USB-C'
    },
    warranty: '1 Ano de Garantia Oficial Apple Brasil'
  },
  {
    id: 'rm-16p-722892',
    code: '722892',
    sku: 'RM-16P-DES',
    name: 'iPhone 16 Pro',
    category: 'linha-16',
    color: 'Titânio Deserto',
    storage: '256GB',
    condition: 'Seminovo Selecionado',
    battery: 100,
    pricePix: 6890,
    priceCard: 7520,
    installments: '18x de R$ 417,77',
    badge: 'Destaque',
    badgeType: 'highlight',
    images: [
      '/img/produtos/722892-0.webp',
      '/img/produtos/722892-1.webp',
      '/img/produtos/722892-2.webp'
    ],
    description: 'A cor mais cobiçada da linha 16 Pro com acabamento dourado acetinado e 256GB de espaço para vídeos 4K a 120fps.',
    specs: {
      screen: '6.3" ProMotion 120Hz Always-On',
      chip: 'A18 Pro Bionic',
      camera: '48MP Pro System com ProRes Log',
      batteryLife: 'Bateria com 100% de integridade',
      connectivity: 'USB-C 3.0 de alta velocidade'
    },
    warranty: 'Garantia RM iPhones + Nota Fiscal de Procedência'
  },
  {
    id: 'rm-16-716252',
    code: '716252',
    sku: 'RM-16-ROSA',
    name: 'iPhone 16',
    category: 'linha-16',
    color: 'Rosa Suave',
    storage: '256GB',
    condition: 'Seminovo Impecável',
    battery: 95,
    pricePix: 4590,
    priceCard: 5040,
    installments: '18x de R$ 280,00',
    badge: 'Mais Vendido',
    badgeType: 'popular',
    images: [
      '/img/produtos/716252-0.webp',
      '/img/produtos/716252-1.webp',
      '/img/produtos/716252-2.webp',
      '/img/produtos/716252-3.webp'
    ],
    description: 'O novo design icônico com câmeras alinhadas na vertical para vídeo espacial, chip A18 ultra veloz e novo acabamento traseiro infundido em cor.',
    specs: {
      screen: '6.1" Super Retina XDR OLED com Dynamic Island',
      chip: 'A18 Bionic de 2ª geração',
      camera: 'Câmera Fusion de 48MP 2 em 1',
      batteryLife: 'Saúde atestada em 95%',
      connectivity: '5G e USB-C'
    },
    warranty: 'Garantia RM iPhones + Suporte VIP'
  },
  {
    id: 'rm-16-551065',
    code: '551065',
    sku: 'RM-16-BRANCO',
    name: 'iPhone 16',
    category: 'linha-16',
    color: 'Branco Puro',
    storage: '128GB',
    condition: 'Novo Lacrado',
    battery: 100,
    pricePix: 4390,
    priceCard: 4800,
    installments: '18x de R$ 266,66',
    badge: 'Lacrado 1 Ano',
    badgeType: 'warranty',
    images: [
      '/img/produtos/551065-0.webp',
      '/img/produtos/551065-1.webp',
      '/img/produtos/551065-2.webp',
      '/img/produtos/551065-3.webp'
    ],
    description: 'Na caixa original lacrada com 1 ano de garantia mundial Apple. Design limpo, bateria duradoura e botão de controle de câmera.',
    specs: {
      screen: '6.1" Super Retina XDR com Ceramic Shield de última geração',
      chip: 'A18 Bionic',
      camera: '48MP + 12MP Ultra-angular com modo Macro',
      batteryLife: 'Bateria 100% de fábrica',
      connectivity: 'USB-C com carregamento rápido'
    },
    warranty: '1 Ano Oficial Apple com Ativação na Caixa'
  },
  {
    id: 'rm-16plus-582628',
    code: '582628',
    sku: 'RM-16PLUS-VERDE',
    name: 'iPhone 16 Plus',
    category: 'linha-16',
    color: 'Verde Oceano',
    storage: '128GB',
    condition: 'Seminovo Classe A',
    battery: 98,
    pricePix: 4890,
    priceCard: 5350,
    installments: '18x de R$ 297,22',
    badge: 'Super Bateria',
    badgeType: 'battery',
    images: [
      '/img/produtos/582628-0.webp',
      '/img/produtos/582628-1.webp',
      '/img/produtos/582628-2.webp'
    ],
    description: 'Tela gigante de 6.7 polegadas aliada à maior autonomia de bateria já vista na linha padrão do iPhone.',
    specs: {
      screen: '6.7" Super Retina XDR Imersiva',
      chip: 'A18 Bionic',
      camera: '48MP Fusion com fotos de alta resolução',
      batteryLife: 'Autonomia extrema com bateria 98%',
      connectivity: 'USB-C e 5G ultrarrápido'
    },
    warranty: 'Garantia RM iPhones de 6 Meses com Laudo'
  },
  {
    id: 'rm-15p-728323',
    code: '728323',
    sku: 'RM-15P-AZUL',
    name: 'iPhone 15 Pro',
    category: 'linha-15',
    color: 'Titânio Azul',
    storage: '128GB',
    condition: 'Seminovo Impecável',
    battery: 92,
    pricePix: 4690,
    priceCard: 5150,
    installments: '18x de R$ 286,11',
    badge: 'Titânio Pro',
    badgeType: 'highlight',
    images: [
      '/img/produtos/728323-0.webp',
      '/img/produtos/728323-1.webp',
      '/img/produtos/728323-2.webp',
      '/img/produtos/728323-3.webp'
    ],
    description: 'Estrutura ultra leve de titânio aeroespacial, chip A17 Pro com Ray Tracing e botão de ação customizável.',
    specs: {
      screen: '6.1" ProMotion 120Hz com Tela Sempre Ativa',
      chip: 'A17 Pro (o pioneiro dos jogos de console no iPhone)',
      camera: 'Sistema triplo de 48MP com 7 distâncias focais',
      batteryLife: 'Saúde 92% com laudo de bancada',
      connectivity: 'USB-C 3 com velocidade de 10Gbps'
    },
    warranty: 'Garantia RM iPhones + Checklist de Bancada'
  },
  {
    id: 'rm-15-682606',
    code: '682606',
    sku: 'RM-15-AZUL',
    name: 'iPhone 15',
    category: 'linha-15',
    color: 'Azul Pastel',
    storage: '128GB',
    condition: 'Seminovo Impecável',
    battery: 88,
    pricePix: 3390,
    priceCard: 3750,
    installments: '18x de R$ 208,33',
    badge: 'Custo-Benefício',
    badgeType: 'popular',
    images: [
      '/img/produtos/682606-0.webp',
      '/img/produtos/682606-1.webp',
      '/img/produtos/682606-2.webp',
      '/img/produtos/682606-3.webp'
    ],
    description: 'O iPhone que introduziu a Dynamic Island e a porta USB-C universal na linha convencional. Câmera de 48MP com fotos de estúdio.',
    specs: {
      screen: '6.1" OLED Super Retina XDR com Dynamic Island',
      chip: 'A16 Bionic de alto desempenho',
      camera: '48MP principal + Telefoto 2x com qualidade óptica',
      batteryLife: 'Saúde de bateria atestada em 88%',
      connectivity: 'USB-C e 5G'
    },
    warranty: 'Garantia RM iPhones + Suporte Total'
  },
  {
    id: 'rm-14p-636744',
    code: '636744',
    sku: 'RM-14P-PRETO',
    name: 'iPhone 14 Pro',
    category: 'linha-14',
    color: 'Preto Espacial',
    storage: '256GB',
    condition: 'Seminovo Classe A',
    battery: 85,
    pricePix: 3790,
    priceCard: 4190,
    installments: '18x de R$ 232,77',
    badge: 'Favorito Pro',
    badgeType: 'popular',
    images: [
      '/img/produtos/636744-0.webp',
      '/img/produtos/636744-1.webp',
      '/img/produtos/636744-2.webp'
    ],
    description: 'O nascimento da Dynamic Island com acabamento premium em aço cirúrgico e traseira em vidro fosco texturizado.',
    specs: {
      screen: '6.1" Super Retina XDR 120Hz ProMotion',
      chip: 'A16 Bionic 6-core',
      camera: 'Tripla 48MP com fotos ProRAW de altíssima definição',
      batteryLife: 'Bateria com 85% de saúde',
      connectivity: '5G, Face ID e MagSafe'
    },
    warranty: 'Garantia RM iPhones de 90 Dias com Laudo'
  },
  {
    id: 'rm-14-727572',
    code: '727572',
    sku: 'RM-14-ESTELAR',
    name: 'iPhone 14',
    category: 'linha-14',
    color: 'Branco Estelar',
    storage: '128GB',
    condition: 'Seminovo Impecável',
    battery: 90,
    pricePix: 2990,
    priceCard: 3320,
    installments: '18x de R$ 184,44',
    badge: 'Super Oferta',
    badgeType: 'discount',
    images: [
      '/img/produtos/727572-0.webp',
      '/img/produtos/727572-1.webp',
      '/img/produtos/727572-2.webp',
      '/img/produtos/727572-3.webp'
    ],
    description: 'Perfeito para o dia a dia. Modo Ação para vídeos inacreditavelmente estáveis e Modo Cinema em 4K a 30fps.',
    specs: {
      screen: '6.1" Super Retina XDR OLED',
      chip: 'A15 Bionic com GPU de 5 núcleos',
      camera: 'Dupla 12MP com Photonic Engine avançado',
      batteryLife: 'Saúde 90% testada',
      connectivity: '5G e MagSafe'
    },
    warranty: 'Garantia RM iPhones + Nota e Checklist'
  },
  {
    id: 'rm-14-706190',
    code: '706190',
    sku: 'RM-14-ROXO',
    name: 'iPhone 14',
    category: 'linha-14',
    color: 'Roxo Lavanda',
    storage: '128GB',
    condition: 'Seminovo Selecionado',
    battery: 87,
    pricePix: 2950,
    priceCard: 3280,
    installments: '18x de R$ 182,22',
    badge: 'Cor Exclusiva',
    badgeType: 'highlight',
    images: [
      '/img/produtos/706190-0.webp',
      '/img/produtos/706190-1.webp',
      '/img/produtos/706190-2.webp',
      '/img/produtos/706190-3.webp'
    ],
    description: 'Cor suave e moderna, aparelho revisado com todas as peças originais de fábrica verificadas.',
    specs: {
      screen: '6.1" OLED com proteção Ceramic Shield',
      chip: 'A15 Bionic',
      camera: 'Sistema de câmera dupla de 12MP',
      batteryLife: 'Saúde 87%',
      connectivity: '5G e Carregamento sem fio MagSafe'
    },
    warranty: 'Garantia RM iPhones com Laudo Técnico'
  },
  {
    id: 'rm-13-722368',
    code: '722368',
    sku: 'RM-13-PRETO',
    name: 'iPhone 13',
    category: 'linha-13',
    color: 'Meia-noite (Preto)',
    storage: '128GB',
    condition: 'Seminovo Impecável',
    battery: 89,
    pricePix: 2490,
    priceCard: 2780,
    installments: '18x de R$ 154,44',
    badge: 'Campeão de Vendas',
    badgeType: 'popular',
    images: [
      '/img/produtos/722368-0.webp',
      '/img/produtos/722368-1.webp',
      '/img/produtos/722368-2.webp',
      '/img/produtos/722368-3.webp'
    ],
    description: 'O iPhone mais querido e vendido do Brasil. Desempenho rápido, bateria que dura o dia todo e câmeras na diagonal de alta qualidade.',
    specs: {
      screen: '6.1" Super Retina XDR OLED',
      chip: 'A15 Bionic rápido e eficiente',
      camera: 'Câmera dupla 12MP com Modo Cinema',
      batteryLife: 'Saúde 89% com excelente autonomia',
      connectivity: '5G, Face ID e MagSafe'
    },
    warranty: 'Garantia RM iPhones + Troca Garantida'
  },
  {
    id: 'rm-13-731752',
    code: '731752',
    sku: 'RM-13-AZUL',
    name: 'iPhone 13',
    category: 'linha-13',
    color: 'Azul Petróleo',
    storage: '128GB',
    condition: 'Seminovo Classe A',
    battery: 86,
    pricePix: 2450,
    priceCard: 2740,
    installments: '18x de R$ 152,22',
    badge: 'Entrada Facilitada',
    badgeType: 'discount',
    images: [
      '/img/produtos/731752-0.webp',
      '/img/produtos/731752-1.webp',
      '/img/produtos/731752-2.webp',
      '/img/produtos/731752-3.webp'
    ],
    description: 'Excelente para quem quer entrar no ecossistema Apple com o melhor custo-benefício do mercado hoje.',
    specs: {
      screen: '6.1" Super Retina XDR',
      chip: 'A15 Bionic',
      camera: '12MP Wide + Ultra-wide',
      batteryLife: 'Saúde 86%',
      connectivity: '5G e MagSafe'
    },
    warranty: 'Garantia RM iPhones de 90 Dias'
  },
  {
    id: 'rm-watch-ultra-451679',
    code: '451679',
    sku: 'RM-WATCH-ULTRA',
    name: 'Apple Watch Ultra 2',
    category: 'watch-airpods',
    color: 'Titânio 49mm',
    storage: 'Pulseira Oceano',
    condition: 'Seminovo Impecável',
    battery: 100,
    pricePix: 4590,
    priceCard: 5040,
    installments: '18x de R$ 280,00',
    badge: 'Titanium 49mm',
    badgeType: 'highlight',
    images: [
      '/img/produtos/451679-0.webp',
      '/img/produtos/451679-1.webp',
      '/img/produtos/451679-2.webp',
      '/img/produtos/451679-3.webp'
    ],
    description: 'Caixa de titânio aeroespacial de 49mm, resistência à água de 100m, GPS de precisão e dupla frequência e bateria de até 72h no modo econômico.',
    specs: {
      screen: 'Tela de Safira com 3000 nits de brilho',
      sensors: 'ECG, Oxigênio no Sangue, Temperatura e Profundímetro',
      batteryLife: 'Saúde de Bateria 100%',
      connectivity: 'GPS + Celular 4G integrado'
    },
    warranty: 'Garantia RM iPhones + Acessórios Originais'
  },
  {
    id: 'rm-watch-s10-614910',
    code: '614910',
    sku: 'RM-WATCH-S10',
    name: 'Apple Watch Series 10',
    category: 'watch-airpods',
    color: 'Alumínio Preto Meia-noite 46mm',
    storage: 'Pulseira Esportiva',
    condition: 'Novo Lacrado',
    battery: 100,
    pricePix: 3290,
    priceCard: 3650,
    installments: '18x de R$ 202,77',
    badge: 'Lacrado 1 Ano',
    badgeType: 'warranty',
    images: [
      '/img/produtos/614910-0.webp',
      '/img/produtos/614910-1.webp',
      '/img/produtos/614910-2.webp',
      '/img/produtos/614910-3.webp'
    ],
    description: 'O Apple Watch mais fino e elegante de todos os tempos com a maior área de tela útil e carregamento ultrarrápido (80% em 30 min).',
    specs: {
      screen: 'OLED grande angular de ângulo amplo',
      sensors: 'Detecção de apneia do sono, ECG e sensor de temperatura',
      batteryLife: 'Novo de fábrica 100%',
      connectivity: 'GPS e carregamento magnético rápido'
    },
    warranty: '1 Ano Oficial Apple com NF'
  },
  {
    id: 'rm-watch-se-738857',
    code: '738857',
    sku: 'RM-WATCH-SE',
    name: 'Apple Watch SE 44mm (2ª Ger)',
    category: 'watch-airpods',
    color: 'Meia-noite',
    storage: 'Pulseira Esportiva',
    condition: 'Seminovo Selecionado',
    battery: 98,
    pricePix: 1690,
    priceCard: 1890,
    installments: '18x de R$ 105,00',
    badge: 'Melhor Escolha',
    badgeType: 'popular',
    images: [
      '/img/produtos/738857-0.webp',
      '/img/produtos/738857-1.webp',
      '/img/produtos/738857-2.webp'
    ],
    description: 'Todos os recursos essenciais de saúde, notificações e treinos do Apple Watch com preço extremamente acessível.',
    specs: {
      screen: 'Tela Retina OLED brilhante',
      sensors: 'Sensor de frequência cardíaca e detecção de acidentes',
      batteryLife: 'Saúde 98%',
      connectivity: 'GPS integrado'
    },
    warranty: 'Garantia RM iPhones de 90 Dias'
  },
  {
    id: 'rm-airpods-pro2-614904',
    code: '614904',
    sku: 'RM-AIRPODS-PRO2',
    name: 'AirPods Pro 2 (USB-C)',
    category: 'watch-airpods',
    color: 'Branco Neve',
    storage: 'Estojo MagSafe USB-C',
    condition: 'Novo Lacrado',
    battery: 100,
    pricePix: 1590,
    priceCard: 1780,
    installments: '18x de R$ 98,88',
    badge: 'Lacrado 1 Ano',
    badgeType: 'warranty',
    images: [
      '/img/produtos/614904-0.webp',
      '/img/produtos/614904-1.webp'
    ],
    description: 'Até 2x mais cancelamento ativo de ruído, Áudio Espacial Personalizado com rastreamento de cabeça e estojo com alto-falante para busca precisa.',
    specs: {
      chip: 'Chip H2 Apple para fidelidade sonora absoluta',
      features: 'Áudio Adaptativo, Modo Transparência e Reconhecimento de Conversa',
      batteryLife: 'Até 6h nos fones + 30h no estojo MagSafe USB-C'
    },
    warranty: '1 Ano de Garantia Oficial Apple'
  },
  {
    id: 'rm-airpods-4-614901',
    code: '614901',
    sku: 'RM-AIRPODS-4',
    name: 'AirPods 4 com Cancelamento de Ruído',
    category: 'watch-airpods',
    color: 'Branco Neve',
    storage: 'Estojo USB-C',
    condition: 'Novo Lacrado',
    battery: 100,
    pricePix: 1290,
    priceCard: 1450,
    installments: '18x de R$ 80,55',
    badge: 'Lançamento',
    badgeType: 'highlight',
    images: [
      '/img/produtos/614901-0.webp',
      '/img/produtos/614901-1.webp'
    ],
    description: 'Design aberto anatômico super confortável, pela primeira vez com Cancelamento Ativo de Ruído na linha regular.',
    specs: {
      chip: 'Chip H2 Apple',
      features: 'Áudio Espacial e isolamento de voz para chamadas cristalinas',
      batteryLife: 'Até 30h totais de reprodução com estojo'
    },
    warranty: '1 Ano de Garantia Oficial Apple'
  },
  {
    id: 'rm-acess-carregador-20w',
    code: 'ACC20W',
    sku: 'RM-ACC-20W',
    name: 'Carregador Turbo 20W Apple USB-C',
    category: 'acessorios',
    color: 'Branco Original',
    storage: 'Padrão BR',
    condition: 'Original Lacrado',
    battery: 100,
    pricePix: 179,
    priceCard: 199,
    installments: '3x de R$ 66,33',
    badge: 'Essencial',
    badgeType: 'popular',
    images: [
      '/img/produtos/carregador-20w.webp'
    ],
    description: 'Adaptador de corrente USB-C de 20W original Apple. Carrega 50% da bateria do seu iPhone em apenas 30 minutos com segurança térmica.',
    specs: {
      power: '20W Power Delivery rápido e seguro',
      compatibility: 'Todos os modelos do iPhone 8 ao 16 Pro Max',
      safety: 'Proteção contra sobretensão e superaquecimento'
    },
    warranty: 'Garantia RM iPhones + Selo Anatel'
  },
  {
    id: 'rm-acess-cabo-blindado',
    code: 'ACCCABO',
    sku: 'RM-ACC-CABO',
    name: 'Cabo Blindado Trançado Ultra-Forte (1.2m)',
    category: 'acessorios',
    color: 'Cinza Espacial',
    storage: 'USB-C ou Lightning',
    condition: 'Original Lacrado',
    battery: 100,
    pricePix: 129,
    priceCard: 149,
    installments: '3x de R$ 49,66',
    badge: 'Alta Durabilidade',
    badgeType: 'highlight',
    images: [
      '/img/produtos/cabo-blindado.webp'
    ],
    description: 'Cabo revestido com malha de nylon trançado balístico reforçado. Pontas em liga de zinco com alívio de tensão que não quebram.',
    specs: {
      length: '1.2 metros com cinta organizadora de couro',
      speed: 'Carregamento rápido até 60W e transferência de dados',
      durability: 'Testado para mais de 30.000 dobras'
    },
    warranty: 'Garantia de 1 Ano RM iPhones'
  }
];

// Modelos para o Simulador de Troca (Trade-in) com faixas estimadas de avaliação
export const TRADE_MODELS = [
  { model: 'iPhone 15 Pro Max', baseValue: 4600 },
  { model: 'iPhone 15 Pro', baseValue: 3900 },
  { model: 'iPhone 15 Plus', baseValue: 3300 },
  { model: 'iPhone 15', baseValue: 2900 },
  { model: 'iPhone 14 Pro Max', baseValue: 3400 },
  { model: 'iPhone 14 Pro', baseValue: 2900 },
  { model: 'iPhone 14 Plus', baseValue: 2400 },
  { model: 'iPhone 14', baseValue: 2200 },
  { model: 'iPhone 13 Pro Max', baseValue: 2700 },
  { model: 'iPhone 13 Pro', baseValue: 2300 },
  { model: 'iPhone 13', baseValue: 1800 },
  { model: 'iPhone 12 Pro Max', baseValue: 2000 },
  { model: 'iPhone 12 Pro', baseValue: 1700 },
  { model: 'iPhone 12', baseValue: 1400 },
  { model: 'iPhone 11 Pro Max', baseValue: 1500 },
  { model: 'iPhone 11 Pro', baseValue: 1300 },
  { model: 'iPhone 11', baseValue: 1100 }
];
