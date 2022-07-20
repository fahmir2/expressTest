const express = require('express');
const app = express(); 
const path = require('path');
app.use(express.static('public'));

app.listen(3000, ()=>{
    console.log("Servidor corriendo")
})
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '/views/index.html'));
})

app.get('/babbage', function(req, res){
    res.sendFile(path.join(__dirname, '/views/babbage.html'));
})

app.get('/berbers-lee', function(req, res){
    res.sendFile(path.join(__dirname, '/views/berbers-lee.html'));
})

app.get('/clarke', function(req, res){
    res.sendFile(path.join(__dirname, '/views/clarke.html'));
})


app.get('/hamilton', function(req, res){
    res.sendFile(path.join(__dirname, '/views/hamilton.html'));
})


app.get('/hopper', function(req, res){
    res.sendFile(path.join(__dirname, '/views/hopper.html'));
})

app.get('/lovelace', function(req, res){
    res.sendFile(path.join(__dirname, '/views/lovelace.html'));
})

app.get('/turing', function(req, res){
    res.sendFile(path.join(__dirname, '/views/turing.html'));
})