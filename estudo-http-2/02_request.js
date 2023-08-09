const express = require("express");
const path = require("path");

const app = express();
app.use(express.urlencoded());

function Registro(req, res) {
    const caminho = path.join(__dirname, "pages", "registro.html"); //.join = concatena as string com uma barra no meio, \ no windows e / no linux
    res.sendFile(caminho); //ou res.sendFile(path.join(__dirname, "pages", "registro.html");
}

function Login(req, res) {
    const caminho = path.join(__dirname, "pages", "login.html");
    res.sendFile(caminho);
}

function processarRegistro(req, res) {
    const name = req.body.nome;
    const email = req.body.email;
    const password = req.body.senha;

    const erros = [];
    /*
    const object = {
        nome: "joao",
        idade: 20,
        email: "joao@email.com"
    }
    console.log(object.nome);
    */
    if (name == "") {
        erros.push("Nome Inválido");
    }
    if (email == "") {
        erros.push("Email Inválido");
    }
    if (password == "") {
        erros.push("Senha Inválido");
    }

    if (erros.length != 0) {
        res.send(erros);
        return; //ou else{console.log(req.body); res.send("Chegou Poha");}
    }
    /*
        caso trabalhando com SQL:
        primeiro um comando de verificação de duplicata de usuário;
        SELECT * FROM usuarios WHERE email = email;
        
        depois o insert do usuario;
        INSERT INTO usuarios VALUES ()
    */
    console.log(req.body);

    res.status(303);
    res.header("Location", "/login");
    res.send();
}

function processarLogin(req, res) {
    const email = req.body.email;
    const password = req.body.senha;

    const erros = [];

    if (email == "") {
        erros.push("Email Inválido");
    }
    if (password == "") {
        erros.push("Senha Inválido");
    }

    if (erros.length != 0) {
        res.send(erros);
        return;
    }
    console.log(req.body);
    res.send("Parabéns, você fez Login!");
}

app.get("/registro", Registro);
app.post("/registro", processarRegistro);

app.get("/login", Login);
app.post("/login", processarLogin);

app.listen(3001, () => console.log("Rodando na porta 3001"));
