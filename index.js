const express = require("express");
const app = express();

app.get("/hello", function(req, res){
    res.send("Hello World");
});

app.listen(process.env.PORT || 8089, function(){
    console.log("Servidor Rodando", process.env.PORT);
});