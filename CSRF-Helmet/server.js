/*
Conectando com a base de dados MONGO DB

OBS: caso o npm run dev tenha problema use o seguinte comando  'npm install webpack@latest'
*/
require('dotenv').config()
const routes = require('./routes')
const express = require('express')
const app = express()
const helmet = require('helmet')
const csrf = require('csurf')
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
const {middlewareGlobal,checkCsrfError,csrfMiddleware} = require('./src/middlewares/middleware')//Middleware Global

//Express session
const session = require('express-session')//Captura as sessions/dados do user no browser
const MongoStore = require('connect-mongo')//Salva as sessions do user no browser
const flash = require('connect-flash')

app.use(express.urlencoded({extended:true}))//Passa o caminho absoluto da views
app.use(csrf())
app.use(routes)//Faz com que o app use todas as rotas definidas no arquivo de routes
app.use(express.static(path.resolve(__dirname, 'public')))//Passando o caminho onde ficarão  os arquivos estáticos
app.use(middlewareGlobal)//Faz com que todas as rotas passem pelo middleware definido
app.use(checkCsrfError)
app.use(csrfMiddleware)
app.use(helmet())
// const sessionOptions = session({
//     secret: 'akasdfj0út23453456+54qt23qv  qwf qwer qwer qewr asdasdasda a6()',
//     store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//       maxAge: 1000 * 60 * 60 * 24 * 7,
//       httpOnly: true
//     }
//   });
app.use(flash())
//app.use(sessionOptions)


app.set('views', path.resolve(__dirname, 'src' , 'views')) //Seta o caminho da views
app.set('view engine', 'ejs' )

app.on('pronto',()=>{
    app.listen(3000,()=>{
        console.log('Servidor executando na porta 3000');
    })
})

