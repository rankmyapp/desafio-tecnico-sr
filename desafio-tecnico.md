# Teste Técnico - Desenvolvedor Júnior Backend (Node.js)

## Objetivo

Este teste tem como objetivo avaliar suas habilidades em desenvolvimento backend utilizando Node.js. Você deverá desenvolver uma API RESTful simples, que permita realizar operações de CRUD (Create, Read, Update, Delete) sobre um recurso de **usuários**.

1. Fork este repositório (ou crie um novo) e, ao finalizar, envie o link do repositório para a avaliação.
2. Você deverá utilizar **Node.js** puro com **Express.js**, **Fastify.js**.
3. O banco de dados pode ser **MongoDB** ou **PostgreSQL** ou **MySQL**.
4. Utilize **JWT** para autenticação e proteção de rotas.
5. Inclua testes unitários para as principais funcionalidades da aplicação.
6. O uso de bibliotecas populares como **Yup** para validação de dados e **Mongoose** (caso use MongoDB) é recomendado, mas não obrigatório.
7. Escreva um Dockerfile
8. Escreva uma stack de serviços com Docker Compose

## Requisitos do Projeto

### Funcionalidades da API:

1. **Registrar Usuário (Sign Up)**

   - Rota: `POST /api/auth/signup`
   - Campos obrigatórios: `nome`, `email`, `senha`
   - Validação:
     - O campo `email` deve ser único.
     - A senha deve ter no mínimo 6 caracteres.

2. **Buscar Usuário Autenticvado**

   - Rota: `GET /api/account/me`
   - Deve retornar os dados do usuário especificado pelo `id`.

3. **Atualizar Informações do Usuário Autenticado**

   - Rota: `PUT /api/account/profile`
   - Permite atualizar os dados de um usuário específico.

4. **Cancelar a conta do usuṕario Usuário**
   - Rota: `DELETE /api/account/cancel`
   - Permite remover um usuário específico.

### Regras de Autenticação:

- Apenas usuários autenticados podem acessar as rotas de listagem, busca, atualização e remoção de usuários.
- Utilize JWT para gerar e validar tokens de autenticação.
- Rota para login:
- **Login**
- Rota: `POST /api/signin`
- Parâmetros: `email`, `senha`
- Retorna: Token JWT válido para autenticação.

### Requisitos Extras (Bônus):

- **Paginação**: Implementar paginação na listagem de usuários.
- **Filtros de Pesquisa**: Permitir a busca de usuários por nome ou e-mail através de query params.
- **Log de Erros**: Implementar um sistema básico de log de erros.

---

## Testes Unitários

Implemente testes para as principais funcionalidades da API, utilizando um framework de testes como **Jest** ou **Mocha**:

- Teste as rotas na autenticação, atualização e deleção de conta.
- Teste a autenticação JWT (Opcional).
- Teste a validação de dados (como e-mail único e tamanho da senha).

---

## O que será avaliado:

- Estrutura e organização do código.
- Boas práticas na implementação da API (RESTful, uso correto de status HTTP, etc.).
- Conhecimento de autenticação com JWT.
- Validação e tratamento de erros.
- Implementação de testes unitários.
- Documentação básica da API (ex.: README com instruções de uso).

---

## Entrega:

Ao finalizar o teste, por favor envie um link para o repositório GitHub com o código desenvolvido.
