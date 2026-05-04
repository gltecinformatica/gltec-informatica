# GLTEC INFORMÁTICA

## Descrição do Projeto

Plataforma web moderna e responsiva da **GLTEC INFORMÁTICA**, empresa especializada em serviços de Desenvolvimento de Software, Assistência técnica em TI e Gráfica rápida em Arcoverde-PE. O projeto combina uma landing page institucional de alta conversão com uma ferramenta operacional (PDV Expresso) para agilizar o atendimento.

### Landing Page Institucional

A página inicial apresenta de forma profissional os dois pilares da empresa:

- **Gráfica Rápida:** Impressões, encadernação, materiais publicitários e personalizados.
- **Assistência Técnica:** Manutenção de hardware, redes, recuperação de dados e suporte empresarial.
- **Recursos:** Animações de revelação (Scroll Reveal), carrossel de depoimentos, logotipos de clientes e integração direta com WhatsApp.

### PDV Expresso

Dashboard operacional projetado para centralizar links de serviços essenciais (DETRAN, Gov.br, operadoras, etc.). Permite que colaboradores e clientes acessem portais oficiais com agilidade.

## Funcionalidades Principais

- **Landing Page Completa:** Seções de serviços, diferenciais, **missão, visão e valores**, depoimentos e formulário de contato.
- **Busca Inteligente:** Filtro em tempo real no dashboard por nome, descrição ou categoria.
- **Categorização Dinâmica:** Gestão de categorias de serviços via interface administrativa.
- **Autenticação Segura:** Área administrativa protegida por senha, utilizando **HttpOnly Cookies** para persistência de sessão no servidor.
- **Persistência Local:** Sincronização automática com `localStorage` para carregamento imediato do estado.
- **Processamento de Imagens:** Upload de logos com conversão para Base64 para armazenamento simplificado.
- **Modo Escuro (Dark Mode):** Interface otimizada para conforto visual por padrão.

## Tecnologias Utilizadas

- **Framework:** Next.js 14+ (App Router)
- **Estilização:** Tailwind CSS
- **Componentes:** Shadcn UI / Radix UI
- **Estado & Auth:** React Context API + Next.js Route Handlers
- Linguagem: TypeScript
- Estilização: Tailwind CSS
- Componentes de Interface: Shadcn UI / Radix UI
- Gerenciamento de Formulários: React Hook Form / Zod
- Ícones: Lucide React
- Notificações: Sonner

## Requisitos

- Node.js 18.x ou superior
- Gerenciador de pacotes (NPM ou PNPM)

## Configuração de Ambiente

Crie um arquivo `.env.local` na raiz do projeto e configure a senha do administrador:

```env
ADMIN_PASSWORD=sua_senha_aqui
```

## Instalação e Execução

1. **Instale as dependências:**

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
