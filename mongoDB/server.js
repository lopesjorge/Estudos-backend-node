/*
Conectando com a base de dados MONGO DB

OBS: caso o npm run dev tenha problema use o seguinte comando  'npm install webpack@latest'
*/
require('dotenv').config()
const routes = require('./routes')
const express = require('express')
const app = express()

const mongoose = require('mongoose')

mongoose.connect(process.env.CONNECTIONSTRING, {useNewUrlParser: true}, {useUnifieldTopology: true})
.then(()=>{
    app.emit('pronto')
    console.log('DB connected');
})
.catch(e =>{
    console.log(e);
})

const path = require('path')
const {middlewareGlobal} = require('./src/middlewares/middleware')//Middleware Global
const { connect } = require('http2')
const { log } = require('console')

app.use(express.urlencoded({extended:true}))//Passa o caminho absoluto da views
app.use(routes)//Faz com que o app use todas as rotas definidas no arquivo de routes
app.use(express.static(path.resolve(__dirname, 'public')))//Passando o caminho onde ficarão  os arquivos estáticos
app.use(middlewareGlobal)//Faz com que todas as rotas passem pelo middleware definido

app.set('views', path.resolve(__dirname, 'src' , 'views')) //Seta o caminho da views
app.set('view engine', 'ejs' )

app.on('pronto',()=>{
    app.listen(3000,()=>{
        console.log('Servidor executando na porta 3000');
    })
})

