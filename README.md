# API de carros - WEBAPI

Esta é uma API em construção, que será uma API RESTful desenvolvida para o gerenciamento de informação de carros, utilizando
**Node.js** e **express.js**. A API permite criar, ler, atualizar e excluir carros, com validação de dados utilizando
a biblioteca **Joi**.

Este é um projeto de CRUD (Create, Read, Update, Delete), que sera expandido no futuro. Este é apenas o escopo inicial.

## funcionalidades

- **GET /**: retorna a lista completa de carros.
- **GET /:sigla**: Retorna as informaçoes de um carro especifíco, identificado pela sigla.
- **POST /**: Adicione um novo carro a lista.
- **PUT /:sigla**: Atualiza as informações de um carro específico, identificando pela sigla.
- **DELETE /:sigla**: remove um carro específico pela sigla.

## Estrutura inicial do projeto

- **app.js**: Arquivo principal que configura o servidor express e as rotas de API.
- **tabelacarros.js**: contém a lista de carros (dados fictícios).
- **validacao.js**: Contém as validação Joi para os dados do carros.

## Tecnologias Usadas

- **Node.js**: Ambiente de execução para JavaScript.
- **Express**: framework para a contrução de API REST.
- **JOI**: Bibliotéca de validação de dados.

## Endpoints

### 1. **GET /**

Retorna a lista completa de carros disponiveis.

#### Exemplos de repostas

```json
[
  {
    "nome": "Ferrari",
    "sigla": "FER",
    "velocidadeMaxima": "340",
    "potencia": "800",
    "consumo": "5.5",
  },
  {
    "nome": "Lamborghini",
    "sigla": "LAM",
    "velocidadeMaxima": "355",
    "potencia": "770",
    "consumo": "6.2",
  },
]
```

## Como Rodar o Projeto

1. **Clone este repositório:**

    ```Bash
    git clone https://github.com/NicholasYuri/API-UC13.git
    ```
2. **Instale as dependências:**

    navegue até o diretório do projeto e execute o comando:

    ```bash
    npm install
    ```

3. **Inicie o servidor:**

    Após as instalação das dependências, inicie o servidor:

    ```bash
    node ./app.js
    ```

4. **Acesse a API:**

    A API estara disponível em [http://localhost:3000](http://localhost:3000)