const express = require('express')
const route = express.Router()
const homeController = require('./controllers/homeController')
const contatoController = require('./controllers/contatoController')
//Rotas da Home
route.get('/',homeController.paginaHome)
route.post('/', homeController.trataPost)
route.get('/contato',contatoController.paginaContato)

module.exports = route;