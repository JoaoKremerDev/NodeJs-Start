# Meu Projeto Node.js com Express e TypeScript

Este é um projeto básico que demonstra como criar um aplicativo web usando Node.js com o framework Express, Nodemon para reiniciar automaticamente o servidor quando houver alterações e TypeScript para adicionar tipagem ao JavaScript.

## Pré-requisitos

Certifique-se de ter o Node.js instalado em sua máquina. Você pode baixá-lo e instalá-lo a partir do site oficial: [Node.js](https://nodejs.org/).

## Instalação

1. Clone este repositório para o seu ambiente local:

    ```
    git clone git@github.com:JoaoKremerDev/NodeJs-Start.git
    ```

2. Navegue até o diretório do projeto:

    ```
    cd my-app
    ```

3. Instale as dependências usando o npm:

    ```
    npm install
    ```

## Executando o Servidor

Para iniciar o servidor, execute o seguinte comando: 
...
npm start-dev
...


Isso iniciará o servidor na porta padrão 3000. Para acessar a aplicação, vá para `http://localhost:3000` em seu navegador.

## Estrutura do Projeto


## MVC (Model-View-Controller)

O projeto segue o padrão de arquitetura MVC para organização:

- **Model**: Onde você define os modelos de dados da sua aplicação. No diretório `models/`, você encontrará arquivos como `Product.ts`, que definem os esquemas dos dados e interagem com o banco de dados, se aplicável.
  
- **View**: As visualizações da aplicação. Embora este projeto não tenha uma camada de visualização robusta, você pode encontrar diretórios como `pages` e `partials` para visualizações específicas com a utilização do Mustache.
  
- **Controller**: Responsável por manipular as solicitações do cliente e retornar as respostas apropriadas. Os arquivos no diretório `controllers/` como `info.controller.ts` e `user.controller.ts` lidam com a lógica de negócios e interagem com os modelos e visualizações, se necessário.




