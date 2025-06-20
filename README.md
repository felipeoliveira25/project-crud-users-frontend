# Documentação do Front-end - CRUD Users

Bem-vindo ao front-end do projeto de criação de um CRUD de usuários, uma aplicação web desenvolvida com **Next.js**. Este projeto consome a API do back-end (construída com NestJS) para gerenciar autenticação de administradores e usuários, utilizando JWT para acesso a funcionalidades protegidas. Esta documentação guia você na configuração e execução do front-end localmente ou em produção.

## Pré-requisitos

Antes de começar, instale os seguintes softwares:
- **Node.js** (versão 18.x ou superior)
- **npm** (versão 8.x ou superior) ou **yarn** (versão 1.x ou superior)
- **Git** (para clonar o repositório)
- O **back-end** do projeto configurado e rodando (consulte o [README do back-end](https://github.com/felipeoliveira25/project-crud-users-backend/tree/master))

## Clonando o repositório

1. Clone o repositório do front-end:
   ```bash
   git clone https://github.com/felipeoliveira25/project-crud-users-frontend.git
   ```


2. Acesse o diretório do projeto clonado:
  ```bash
   cd project-crud-users-frontend
```


3. Instale todas as dependências usando npm ou yarn:
- Com npm:
  ```bash
   npm install
  ```
- Com yarn
  ```bash
   yarn install
  ```


4. Configuração das variáveis de ambiente
- O front-end requer variáveis de ambiente para conectar à API do back-end. Crie um arquivo .env na raiz do projeto com o seguinte conteúdo:
  ```bash
  # .env
    NEXT_PUBLIC_API_URL=http://localhost:3001
  ```

- Explicação das variáveis
  - NEXT_PUBLIC_API_URL: URL da API do back-end. Em desenvolvimento, use http://localhost:3001.


5. Rodando o projeto
- Inicie o servidor em modo de desenvolvimento:
  ```bash
  npm run dev
  ```
  Ou
  ```bash
  yarn dev
  ```


6. Autenticação
- O front-end possui uma página de login que consome o endpoint POST /auth/login do back-end. Para autenticar como administrador:

  1. Acesse a página de login (ex.: http://localhost:3000/login).
  2. Insira as credenciais:
    - Username: useradmin
    - Password: Será gerada pelo arquivo seed.ts (Consulte o back-end).
    - Após o login, o token JWT será armazenado no localStorage e usado para acessar funcionalidades protegidas.
