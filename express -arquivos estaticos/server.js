/*
TRABALHANDO COM VIEWS -> Parte onde é passado o html para ser renderizado na tela
Dividir uma pasta de views e lá especificar as views usadas no app
É necessário usar o ejs para renderizar a views criadas
para instalar o ejs npm install ejs
*/

const routes = require('./routes')
const express = require('express')
const app = express()
const path = require('path')

app.use(express.urlencoded({extended:true}))//Passa o caminho absoluto da views
app.use(routes)//Faz com que o app use todas as rotas definidas no arquivo de routes
app.use(express.static(path.resolve(__dirname, 'public')))//Passando o caminho onde ficarão  os arquivos estáticos

app.set('views', path.resolve(__dirname, 'src' , 'views')) //Seta o caminho da views
app.set('view engine', 'ejs' )

app.listen(3000,()=>{
    console.log('Servidor executando na porta 3000');
})

