const express = require('express');
const app = express(); 
app.listen(3000, ()=>{
    console.log("Servidor corriendo")
})
app.get('/', function(req, res){
    res.send("Bienvenidos al sitio")
})
app.get("/home", function(req, res){
    res.send("Estamos en el home")
})
