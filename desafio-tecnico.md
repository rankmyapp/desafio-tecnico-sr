# Desafio Técnico - Desenvolvedor Frontend (React)

## Objetivo

O objetivo deste teste é avaliar suas habilidades práticas de desenvolvimento com React, HTML, CSS, e JavaScript. Você será responsável por criar uma aplicação simples que consuma uma API, exiba os dados de forma organizada e interativa, e tenha um design responsivo.

Você deverá criar uma aplicação React que exiba uma lista de naves espaciais consumida de uma API pública (Star Wars). A aplicação deve ter as seguintes funcionalidades:

### Requisitos Funcionais

Considerações gerais:

1. **Listagem de Naves Espaciais**:

   - Faça uma requisição HTTP para a API pública: `https://swapi.dev/` e exiba as starshipts em uma lista.
   - Cada item da lista será um card e deverá mostrar o máximpo de informações de uma starship (nave espacial).

2. **Detalhes de uma Nave Espacial**:

   - Ao clicar em uma starshit da lista, exibir uma modal com mais detalhes sobre a nave espacial.

3. **Filtragem de Naves Espaciais**:

   - Adicione um campo de busca para filtrar as naves espaciais pelo nome, modelo enquanto o usuário digita no campo de pesquisa.

4. **Responsividade**:

   - A interface deve ser completamente responsiva e funcionar bem em diferentes tamanhos de tela (mobile, tablet e desktop).

5. **Componentização**:

   - Quebre o layout e ou as funcionalidades em pequenos componentes

6. **Testes**:
   - Desenvolva ao menos um teste unitário para algum componente

### Requisitos Técnicos

- **React**: Utilize o React para estruturar a aplicação e componentes funcionais.
- **Hooks**: Utilize hooks para gerenciar o estado e efeitos colaterais (life cycle).
- **CSS**: O layout deve ser implementado com CSS, seja usando arquivos CSS simples ou bibliotecas como Styled Components.
- **Requisição HTTP**: Você pode usar `fetch` ou `axios` para fazer as requisições à API.
- **Gerenciamento de Estado Global** (Opcional): Se quiser demonstrar habilidades extras, implemente um sistema simples de gerenciamento de estado global (por exemplo, com Context API, Redux, Zustand, Atom ou outro).

## Entrega

- **Fork** este repositório ou crie um novo em seu GitHub.
- Implemente a solução e faça os commits com a sua evolução.
- Após finalizar, envie o link do repositório e, se possível, o link da aplicação rodando (você pode usar o [Vercel](https://vercel.com/) ou [Netlify](https://www.netlify.com/)).

## Critérios de Avaliação

1. **Funcionamento**: A aplicação atende a todos os requisitos funcionais?
2. **Código Limpo**: O código está organizado, com boa legibilidade, boas práticas e comentários, quando necessário?
3. **Componenteização**: A aplicação está dividida em componentes reutilizáveis e bem estruturados?
4. **Uso dos Hooks**: O candidato utilizou corretamente `useState`, `useEffect` e outros hooks, se necessário?
5. **Responsividade**: A aplicação se adapta bem a diferentes tamanhos de tela?
6. **Estilização**: O design da interface é agradável, funcional e utiliza boas práticas de CSS?
7. **Extras**: Se você implementar funcionalidades extras (como gerenciamento de estado global ou testes unitários), será considerado um diferencial.

## Dicas

- Use commits pequenos e frequentes para mostrar a progressão do trabalho.
- Faça uso de boas
