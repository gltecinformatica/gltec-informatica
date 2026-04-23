# GLTEC INFORMÁTICA

## Descrição do Projeto

Plataforma web institucional e operacional da GLTEC INFORMÁTICA, empresa especializada em serviços de gráfica rápida e assistência técnica em TI localizada em Arcoverde-PE. O sistema atua como catálogo de serviços e central de ferramentas para otimização de atendimento ao cliente.

### PDV Expresso

O módulo central do projeto é o PDV Expresso, um dashboard projetado para centralizar links de serviços governamentais, telecomunicações e utilitários. Ele permite que colaboradores e clientes acessem portais oficiais com agilidade, oferecendo uma camada de gestão administrativa para personalização total dos recursos.

## Funcionalidades Principais

- Gerenciamento de Links: Cadastro, edição e exclusão de serviços externos.
- Sistema de Busca: Filtro em tempo real por nome, descrição ou categoria.
- Categorização Dinâmica: Criação e gestão de novas categorias de serviços via interface.
- Persistência de Dados: Sincronização automática com o armazenamento local (localStorage) para manutenção do estado entre sessões.
- Gestão de Identidade Visual: Upload e processamento de logos em Base64 para exibição padronizada.
- Controle de Acesso: Área administrativa protegida por autenticação para operações de escrita.
- Design Responsivo: Interface adaptável para dispositivos móveis e desktops.

## Tecnologias Utilizadas

- Framework: Next.js (App Router)
- Linguagem: TypeScript
- Estilização: Tailwind CSS
- Componentes de Interface: Shadcn UI / Radix UI
- Gerenciamento de Formulários: React Hook Form / Zod
- Ícones: Lucide React
- Notificações: Sonner

## Estrutura do Diretório

- app/: Contém as rotas, layouts e lógica principal da aplicação.
- components/: Componentes React reutilizáveis e elementos de interface.
- auth-context.tsx: Gerenciamento de estado global de autenticação.
- public/: Ativos estáticos como imagens e logos.
- lib/: Utilitários e configurações de bibliotecas externas.

## Requisitos

- Node.js 18.x ou superior
- Gerenciador de pacotes (NPM ou PNPM)

## Instalação e Execução

1. Instale as dependências:

```bash
npm install
```

## Como Rodar o Servidor de Desenvolvimento

Para iniciar o servidor de desenvolvimento, execute:

```bash
npm run dev
```

ou

```bash
pnpm dev
```

O servidor estará disponível em [http://localhost:3000](http://localhost:3000).

## Como Gerar Build para Produção

Para gerar a versão otimizada para produção, execute:

```bash
npm run build
```

ou

```bash
pnpm build
```

Para iniciar o servidor em modo produção:

```bash
npm start
```

ou

```bash
pnpm start
```

## Estrutura do Projeto

- `app/` - Diretório principal das páginas e layouts do Next.js
- `components/` - Componentes React reutilizáveis
- `hooks/` - Hooks personalizados
- `lib/` - Funções utilitárias e bibliotecas auxiliares
- `public/` - Arquivos estáticos públicos (imagens, logos, etc.)
- `styles/` - Arquivos CSS globais e configurações de estilo
