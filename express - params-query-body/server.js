/*
REQ.QUERY -> strings, devem seguir o seguinte padrão ex: 127.0.0.1/slug/?nome=jorge
Devem começar com ponto de interrrogação seguido da query e valor
Quando tiver mais de uma query é necessário usar & para unir as query

REQ.BODY -> Permite recuperar dados enviados no corpo da requesição
*/

const express = require('express')
const app = express()

app.use(express.urlencoded({extended:true}))

app.listen(3000,()=>{
    console.log('Servidor executando na porta 3000');
})

app.get('/', (req, res)=>{
    res.send(
        `
        <form action="/" method="POST">
            <label>Nome:</label>
            <input type="text" name="name"></input>
            <button>Enviando formulário</button>
        </form>
        `
    )
})

app.post('/', (req, res)=>{
    console.log(req.body);
    res.send(
        `
        O que você me enviou foi ${req.body.name}
        `
    )
})

app.get('/teste/:id_user?', (req, res) =>{
    console.log(req.params)
    console.log(req.query)//Query params ->Strings como parâmetros
    res.send(req.params.id_user? `Esse é o ID:${req.params.id_user}`:'Usuário não encontrado!')
})