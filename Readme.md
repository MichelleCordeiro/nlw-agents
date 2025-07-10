<img src="https://i.postimg.cc/xT5jvJXF/rocketseat-logo-gray-dark.png" alt="Logo RocketSeat" width="160" align="left" style="padding-top:13px">

<img src="https://img.notionusercontent.com/s3/prod-files-secure%2Ff2d7c17c-c032-413b-bff4-03e44d1da06d%2F85695a90-803a-416c-8aef-3c9416ebbd3a%2FNLW_Agents.svg/size/?exp=1752183903&sig=cX-vEH7sm6ZiIVlQj8W8MQ4IoNFms6L7SBlBm4Cm36s&id=22a6c298-a282-807f-90cc-f974f0f40956&table=block&userId=4547f6a6-e638-4fb7-a23a-826dc5cf4188" alt="Logo NLW Agents" width="100" align="right">

<br><br>

# NLW Agents

Projeto desenvolvido durante um evento da Rocketseat para demonstrar o uso de agentes inteligentes na web.

## 🚀 Tecnologias

- **React 19.1** - biblioteca para interfaces de usuário
- **TypeScript 5.8** - superset JavaScript com tipagem estática
- **Vite 7.0** - build tool e servidor de desenvolvimento
- **TailwindCSS 4.1** - framework CSS utility-first
- **React Router Dom 7.6** - biblioteca de roteamento
- **TanStack React Query 5.8** - gerenciamento de estado servidor e cache
- **Radix UI** - componentes primitivos acessíveis
- **Shadcn/ui** - sistema de componentes
- **Lucide React** - biblioteca de ícones

## 📂 Padrões de Projeto

- **Component-based Architecture** - arquitetura baseada em componentes React
- **File-based Routing** - roteamento baseado em arquivos com React Router
- **Server State Management** - gerenciamento de estado servidor com React Query
- **Variant-based Components** - componentes com variantes usando CVA
- **Composition Pattern** - padrão de composição com Radix Slot
- **Path Aliasing** - alias de caminhos (`@/` aponta para `src/`)

## ⚙️ Configuração do Projeto

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório
2. Instale as dependências:
   ```bash
   npm install
   ```

3. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Acesse a aplicação em `http://localhost:5173`

### Scripts Disponíveis

- `npm run dev` - inicia o servidor de desenvolvimento
- `npm run build` - gera build de produção
- `npm run preview` - preview do build de produção

### Backend

O projeto consome uma API que deve estar rodando na porta 3333. Certifique-se de que o backend esteja configurado e executando antes de iniciar o frontend.

## 🛠️ Estrutura do Projeto

```
src/
├── components/ui/    # Componentes de interface
├── pages/            # Páginas da aplicação
├── lib/              # Utilitários e configurações
└── app.tsx           # Componente raiz
```
