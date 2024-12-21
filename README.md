# API de Gestão de Usuários, Plantas e Vasos com Node.js e Express.js

Este projeto é uma API RESTful desenvolvida com Node.js e Express.js, criada como parte de um trabalho acadêmico na UTFPR. A API permite a gestão de usuários, plantas e vasos, oferecendo operações de criação, leitura, atualização e exclusão (CRUD).

## Autores

Desenvolvido por Daniel Jacob Jaroszczuk & Felipe Alves Barea.

## Funcionalidades

- **Autenticação e Autorização**: Implementação de JWT para autenticação e middleware para verificação de permissões.
- **Gestão de Usuários**: Endpoints para criar, listar, atualizar e deletar usuários.
- **Gestão de Plantas**: Endpoints para criar, listar, atualizar e deletar plantas.
- **Gestão de Vasos**: Endpoints para criar, listar, atualizar e deletar vasos.
- **Validação de Dados**: Utilização do `express-validator` para validar dados de entrada.
- **Tratamento de Erros**: Middleware personalizado para tratamento de erros.
- **Documentação**: Geração automática de documentação utilizando Swagger.

## Estrutura do Projeto

- `app.js`: Configuração principal do aplicativo Express.
- `index.js`: Ponto de entrada da aplicação.
- `src/config`: Configurações e scripts de inicialização.
- `src/controllers`: Controladores para gerenciar a lógica de negócios.
- `src/customErrors`: Definições de erros personalizados.
- `src/db`: Arquivos JSON que simulam um banco de dados.
- `src/middleware`: Middlewares para autenticação, validação e tratamento de erros.
- `src/models`: Modelos que interagem com os dados.
- `src/routes`: Definições de rotas da API.

## Como Executar

1. Clone o repositório.
2. Instale as dependências com `npm install`.
3. Configure as variáveis de ambiente no arquivo `.env`.
4. Inicie o servidor com `npm start`.

## Dependências

- `express`
- `dotenv`
- `express-validator`
- `jsonwebtoken`
- `nodemon`
- `swagger-autogen`
- `swagger-ui-express`

## Scripts

- `start`: Inicia o servidor com `nodemon`.
- `swagger-autogen`: Gera a documentação Swagger.
