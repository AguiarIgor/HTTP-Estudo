// importar o express
const express = require("express");
const path = require("path");

// criar um app/server chamando a função express()
const app = express();

// middleware - static files
app.use(express.static("public"));

//funções
function home(req, res) {
    res.sendFile(path.join(__dirname, "pages", "home.html"));
}

// localhost:3001/contato?tipo=formulario
// localhost:3001/contato?tipo=texto
// localhost:3001/contato    ->texto
function contato(req, res) {
    if (req.query.tipo == "formulario") {
        res.sendFile(path.join(__dirname, "pages", "contato-form.html"));
    }
    else {
        res.sendFile(path.join(__dirname, "pages", "contato-text.html"));
    }
}

const produtos = [
    "Banana",
    "Coca-Cola",
    "Guaraná",
    "Macarrão"
];
//localhost:3001/produto?id=3
function produto(req, res) {
    if (req.query.id > produtos.length || req.query.id < 1) {
        res.status(404);
        res.send("Produto com ID Inexistente");
    }
    else {
        res.send(produtos[--req.query.id]);
    }
}

// configurar rotas
app.get("/", home);
app.get("/contato", contato);
app.get("/produto", produto);

// subir o servidor chamando função listen()
app.listen(3001, () => console.log("Rodando na porta 3001"));