const HomeModel = require('../models/HomeModel')
/*
HomeModel.create({
    title:'Titulo de teste', 
    descricao:'Testando meu DB'
})
.then(data =>{
    console.log(data);
})
.catch(e => console.log(e))
*/

HomeModel.find({
    title:'Titulo de teste', 
    descricao:'Testando meu DB'
})
.then(data =>{
    console.log(data);
})
.catch(e => console.log(e))

exports.paginaHome = (req, res) =>{
    res.render('index')//Nome do arquivo no qual será renderizado a views na tela
}

exports.trataPost = (req, res) =>{
    res.send(req.body)    
}