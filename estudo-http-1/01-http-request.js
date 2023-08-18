const express = require('express');
const app = express();

function home(request, response){
    console.log(request.method);
    console.log(request.url);
    response.status(404);
    response.send("Home Page");
}

function contato(req, res){
    res.send("<h1>Contato<h1>");
}

function contact(req, res){
    res.status(301);
    res.header("Location", "/contato")
    res.send();
}

app.get("/", home);
app.get("/contato", contato);
app.get("/contact", contact); //Redirect
app.get("/sobre", (req, res) => {
    res.send("Sobre");
})

app.listen(3001, () => console.log("Rodando porta 3001"));

// localhost: 3001