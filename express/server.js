/*
EXPRESS -> Ajuda a trabalhar com rotas
CRUD 
C -> Create
R -> Read
U - > Update
D -> Delete
*/

const express = require('express')
const app = express()


app.listen(3000,()=>{
    console.log('Servidor executando na porta 3000');
})

app.get('/', (req, res)=>{
    res.send(
         `
        <section style="background: black; display: flex; justify-content: center; align-items: center; height:100%; border-radius: 8px; padding-left: 4rem; padding-right: 4rem;">
            <div>
                <h1 style="color: white; text-transform: uppercase;">Meu primeiro servidor</h1>
                <p style="color: white;">
                    Mussum Ipsum, cacilds vidis litro abertis.  Negão é teu passadis, eu sou faxa pretis. 
                    Sapien in monti palavris qui num significa nadis i pareci latim. 
                    Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.
                    Interagi no mé, cursus quis, vehicula ac nisi.
                </p>
            </div>
        </section>
         `
        )
})

app.get('/formulario', (req, res)=>{
    res.send(
        `
        <form action="/formulario" method="POST">
            <label>Nome:</label>
            <input type="text"></input>
            <button>Enviando formulário</button>
        </form>
        `
    )
})

app.post('/formulario', (req, res)=>{
    res.send(
        `
        <h1>Recebi a respota</h1>
        `
    )
})

app.get('/contato', (req, res)=>{
    res.send(`<h1>Essa é a rota de contato</h1>`)
})