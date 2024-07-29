const express=require('express');
const server =express();
server.get('/',(req,res)=>{
    //3 respondendo a uma requisição
    res.send('<h1>Olá ExpressJS</h1>')
    })

server.get('/sobre',(req,res)=>{
    res.send('<h2>Somos quem podemos ser</h2>')
})

server.get('/json',(req,res)=>{
    //res.send({'nome':'Duda'})
    res.send('<h1>nome:Duda</h1>')
    })

server.use((req,res)=>{
    res.status(404).send("<h1>Erro!!</h1>");
})

server.listen(3000);
