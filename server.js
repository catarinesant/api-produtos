const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(express.json());

// Modelo dos produtos
const Produto = mongoose.model("Produto", {
    nome: String,
    preco: Number,
    quantidade: Number
});

// Rota inicial
app.get("/", (req, res) => {
    res.send("API de Produtos funcionando!");
});

// Listar produtos
app.get("/produtos", async (req, res) => {
    const produtos = await Produto.find();
    res.json(produtos);
});

// Cadastrar produto
app.post("/produtos", async (req, res) => {
    const produto = await Produto.create(req.body);
    res.status(201).json(produto);
});

// Buscar produto por ID
app.get("/produtos/:id", async (req, res) => {
    const produto = await Produto.findById(req.params.id);

    if (!produto) {
        return res.status(404).json({ mensagem: "Produto não encontrado" });
    }

    res.json(produto);
});

// Atualizar produto
app.put("/produtos/:id", async (req, res) => {
    const produto = await Produto.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    if (!produto) {
        return res.status(404).json({ mensagem: "Produto não encontrado" });
    }

    res.json(produto);
});

// Excluir produto
app.delete("/produtos/:id", async (req, res) => {
    const produto = await Produto.findByIdAndDelete(req.params.id);

    if (!produto) {
        return res.status(404).json({ mensagem: "Produto não encontrado" });
    }

    res.json({ mensagem: "Produto excluído com sucesso!" });
});

// Conectar ao MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("MongoDB conectado!");

        const PORT = process.env.PORT || 3000;

        app.listen(PORT, "0.0.0.0", () => {
            console.log("Servidor rodando na porta " + PORT);
        });
    })
    .catch(erro => console.log("Erro:", erro.message));