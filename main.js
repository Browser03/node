const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("Hello World 6");
});

app.listen(21116, function(){
    console.log("Servidor Rodando");
});