const express = require('express')
const route = express.Router()
const homeController = require('./src/controllers/homeController')
const contatoController = require('./src/controllers/contatoController')

//Middleware

// function meuMiddleware (req, res, next) {
//     req.session = {nome:'Jorge',sobrenome: 'Lopes'}
//     console.log();
//     console.log('Passei no middleware');
//     console.log();
//     next()//Indica que terá um novo middleware adiante, faz com que o próximo seja executado
// }

//Rotas da Home
route.get('/', homeController.paginaHome)
route.post('/', homeController.trataPost)
route.get('/contato',contatoController.paginaContato)

module.exports = route;