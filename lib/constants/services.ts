export interface ServiceItem {
  title: string;
  items: string[];
}

export interface TechServiceItem {
  title: string;
  description: string;
}

export const graficaServices: ServiceItem[] = [
  {
    title: "📇 Impressões e Cópias",
    items: [
      "Impressões coloridas e P&B",
      "Cópias P&B e coloridas",
      "Impressão de documentos",
      "Digitalização de documentos",
      "Impressão (Fotográfica e Alta Qualidade)",
    ],
  },
  {
    title: "📘 Encadernação e Acabamento",
    items: [
      "Encadernação espiral e wire-o",
      "Plastificação de documentos",
      "Corte e vinco",
      "Dobras e vincos especiais",
      "Laminação",
    ],
  },
  {
    title: "🎨 Materiais Gráficos e Publicitários",
    items: [
      "Cartões de visita",
      "Panfletos e folders",
      "Banners e faixas",
      "Adesivos e etiquetas",
      "Calendários personalizados",
    ],
  },
  {
    title: "📦 Personalizados e Criativos (Silhouette)",
    items: [
      "Recorte em vinil adesivo",
      "Personalização de canecas",
      "Camisetas personalizadas",
      "Brindes corporativos",
      "Convites e lembrancinhas",
    ],
  },
  {
    title: "💼 Serviços Corporativos",
    items: [
      "Material de escritório personalizado",
      "Papel timbrado com logo e CNPJ",
      "Impressão de notas fiscais",
      "Relatórios e apresentações",
      "Identidade visual completa",
    ],
  },
  {
    title: "📦 Serviços Extras",
    items: [
      "Montagem de apostilas (impressão + encadernação)",
      "Impressão urgente (entrega em poucas horas)",
      "Impressão por e-mail ou WhatsApp (serviço expresso)",
      "Impressão a partir de pen drive ou QR code",
    ],
  },
];

export const tiServices: TechServiceItem[] = [
  {
    title: "🛠️ Manutenção de Computadores e Notebooks",
    description:
      "Serviços de reparo, limpeza e otimização para prolongar a vida útil do seu equipamento e melhorar seu desempenho.",
  },
  {
    title: "💾 Instalação de Programas e Sistemas",
    description:
      "Instalação e configuração de sistemas operacionais, softwares e aplicativos para uso pessoal ou empresarial.",
  },
  {
    title: "🌐 Redes e Conectividade",
    description:
      "Instalação, configuração e manutenção de redes locais, Wi-Fi, servidores e equipamentos de conectividade.",
  },
  {
    title: "📁 Recuperação de Dados",
    description:
      "Recuperação de arquivos e informações de dispositivos danificados, formatados ou com problemas de acesso.",
  },
  {
    title: "🧑‍💻 Suporte Técnico Remoto",
    description:
      "Assistência técnica à distância para resolução rápida de problemas sem necessidade de deslocamento.",
  },
  {
    title: "📈 Consultoria e Upgrades",
    description:
      "Orientação especializada para melhorias de hardware e software, otimizando investimentos em tecnologia.",
  },
  {
    title: "🏢 Serviços para Empresas",
    description:
      "Soluções completas em TI para empresas, incluindo manutenção preventiva, gestão de parque tecnológico e suporte contínuo.",
  },
];

export const softwareServices: TechServiceItem[] = [
  {
    title: "🌐 Desenvolvimento de Aplicativos Web",
    description:
      "Criação de aplicações web modernas e responsivas utilizando as melhores tecnologias do mercado para proporcionar experiências de usuário excepcionais.",
  },
  {
    title: "🛠️ Desenvolvimento de Sistemas Sob Medida",
    description:
      "Soluções personalizadas conforme as necessidades específicas de seu negócio, integrando processos e otimizando a produtividade de sua empresa.",
  },
  {
    title: "🔗 Integração de APIs e Serviços",
    description:
      "Conexão eficiente entre diferentes sistemas e plataformas, permitindo automação de fluxos de trabalho e melhor comunicação entre aplicações.",
  },
  {
    title: "📦 Migração e Modernização de Sistemas",
    description:
      "Transformação de sistemas legados em soluções modernas, garantindo segurança dos dados e continuidade dos processos de negócio.",
  },
  {
    title: "☁️ Implantação de Soluções em Nuvem",
    description:
      "Migração e configuração de infraestrutura em nuvem, oferecendo escalabilidade, segurança e redução de custos operacionais para sua empresa.",
  },
  {
    title: "🔧 Suporte e Manutenção de Software",
    description:
      "Acompanhamento contínuo, correção de bugs, atualizações de segurança e melhorias de performance para manter seus sistemas sempre em perfeito funcionamento.",
  },
];
