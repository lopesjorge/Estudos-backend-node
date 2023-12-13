/*
Um middleware no Express é a maneira de fazer alguma coisa antes da requisição ser processada. 
Coisas como verificar se o usuário está autenticado, logar algum dado para análise ou qualquer
coisa que precise ser feita antes de devolver uma resposta para a requisição.

OBS: caso o npm run dev tenha problema use o seguinte comando  'npm install webpack@latest'
*/

const routes = require('./routes')
const express = require('express')
const app = express()
const path = require('path')
const {middlewareGlobal} = require('./src/middlewares/middleware')//Middleware Global

app.use(express.urlencoded({extended:true}))//Passa o caminho absoluto da views
app.use(routes)//Faz com que o app use todas as rotas definidas no arquivo de routes
app.use(express.static(path.resolve(__dirname, 'public')))//Passando o caminho onde ficarão  os arquivos estáticos
app.use(middlewareGlobal)//Faz com que todas as rotas passem pelo middleware definido

app.set('views', path.resolve(__dirname, 'src' , 'views')) //Seta o caminho da views
app.set('view engine', 'ejs' )

app.listen(3000,()=>{
    console.log('Servidor executando na porta 3000');
})

