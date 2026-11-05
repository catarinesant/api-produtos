*API de Produtos*

Sobre o projeto: Este projeto consiste em uma API de cadastro de produtos, desenvolvida utilizando Node.js e MongoDB.

A API permite realizar operações de cadastro, consulta, atualização e exclusão de produtos.

**Tecnologias utilizadas:** Node.js, Express, MongoDB, Mongoose, Dotenv.

**Funcionalidades:** Cadastrar produtos, Listar todos os produtos, Buscar produtos pelo ID, Atualizar produtos, Excluir produtos.

*Estrutura dos produtos*

**Cada produto possui as seguintes informações:** Nome, Preço, Quantidade, ID

**Rotas da API/Método:**

GET

/produtos

Lista todos os produtos

POST

/produtos

Cadastra um produto

GET

/produtos/

Busca um produto pelo ID

PUT

/produtos/

Atualiza um produto

DELETE

/produtos/

Exclui um produto

**Como executar o projeto:** Baixe ou clone o repositório, abra a pasta no VS Code, execute o comando npm install, crie o arquivo .env e configure a conexão com o MongoDB, execute npm run dev para iniciar a API.

**Testes:**As rotas foram testadas utilizando o ThunderClient.