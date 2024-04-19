const express = require("express");
const bodyParser = require("body-parser")

const app = express();
app.use(bodyParser.json());

var aluno = {
    nome: "Vinicius",
    nota: 9.6,
    curso: "ADS"
}

app.get("/", (req,res)=>{
    res.send(aluno);
})

app.post("/", (req,res)=>{
    console.log(req.body);
    res.send("OK");
})

app.listen(8000, () =>{
    console.log("O servidor está rodando na porta 8000");
})