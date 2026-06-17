# AI-SAI Teacher Hub

Plataforma educacional para planejamento, execução e avaliação de aulas no modelo de **Sala de Aula Invertida** (Flipped Classroom). Um assistente pedagógico conversacional orienta o professor na construção de planos de aula, geração de materiais e reflexão sobre os resultados — o professor decide, a ferramenta apoia.

**Demo:** https://ai-sai-teacher-hub-production.up.railway.app

## Funcionalidades

- **Planejamento conversacional** — o assistente faz perguntas sobre o contexto da turma e gera planos estruturados em três fases: pré-aula, aula presencial e avaliação formativa.
- **Geração de materiais** — quizzes diagnósticos, resumos, roteiros de vídeo e atividades colaborativas, todos editáveis e exportáveis em PDF.
- **Módulo de reflexão** — o professor registra percepções e dificuldades, e recebe sugestões de ajuste baseadas na metodologia.
- **Trilhas de aprendizagem** — sequências de conteúdo organizadas por contexto e duração.
- **Autenticação** — cadastro e login com JWT, com perfis de professor.

## Tecnologias

**Front-end**
- React 19 + TypeScript
- Vite
- Tailwind CSS
- Framer Motion (animações)
- React Three Fiber / Three.js (cena 3D da landing)
- React Router

**Back-end**
- Node.js + Express 5
- Prisma ORM + PostgreSQL
- Autenticação JWT (bcrypt para hashing)
- SDK da Anthropic (assistente de IA)

## Estrutura do projeto

```
.
├── client/        # Aplicação React (Vite)
├── server/        # API REST (Express + Prisma)
│   └── prisma/    # Schema e seed do banco
├── nixpacks.toml  # Configuração de build (Railway)
└── railway.json
```

## Rodando localmente

### Pré-requisitos
- Node.js 22+
- PostgreSQL

### Instalação

```bash
# instalar dependências (raiz, client e server)
npm install
cd client && npm install && cd ..
cd server && npm install && cd ..
```

### Variáveis de ambiente

Crie um arquivo `.env` na pasta `server/`:

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/aisai"
JWT_SECRET="uma-chave-secreta-longa"
ANTHROPIC_API_KEY="sua-chave-da-anthropic"
```

### Banco de dados

```bash
cd server
npm run db:push   # cria as tabelas a partir do schema
npm run db:seed   # popula dados iniciais (trilhas)
```

### Desenvolvimento

```bash
# na raiz — sobe client e server simultaneamente
npm run dev
```

- Front-end: http://localhost:5173
- API: http://localhost:3001

### Build de produção

```bash
npm run build
npm start
```

Em produção, o servidor Express serve a build do front-end e a API sob o mesmo domínio.

## Deploy

O projeto está preparado para deploy no **Railway** via Nixpacks: o build compila client e server, e o start aplica o schema do Prisma antes de iniciar o servidor. Basta conectar o repositório, adicionar um banco PostgreSQL e definir as variáveis `DATABASE_URL`, `JWT_SECRET` e `ANTHROPIC_API_KEY`.

## Licença

Projeto de uso privado. Todos os direitos reservados.
