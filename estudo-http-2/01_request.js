const express = require("express");

const app = express();

//funções para lidar com a request e response

function home(req, res){
    res.send("Home Page");
}

function principal(req, res){
    res.status(301);
    res.header("Location", "/");
    res.send();
}

// rotas
app.get("/", home);
app.get("/principal", principal);

app.listen(3001, () => console.log("Rodando na porta 3001"));

//localhost:numero-da-porta
