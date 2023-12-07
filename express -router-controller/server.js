/*
REQ.QUERY -> strings, devem seguir o seguinte padrão ex: 127.0.0.1/slug/?nome=jorge
Devem começar com ponto de interrrogação seguido da query e valor
Quando tiver mais de uma query é necessário usar & para unir as query

REQ.BODY -> Permite recuperar dados enviados no corpo da requesição
*/
/*
Trabalhando com rotas
*/
const routes = require('./routes')
const express = require('express')
const app = express()

app.use(express.urlencoded({extended:true}))
app.use(routes)//Faz com que o app use todas as rotas definidas no arquivo de routes

app.listen(3000,()=>{
    console.log('Servidor executando na porta 3000');
})

