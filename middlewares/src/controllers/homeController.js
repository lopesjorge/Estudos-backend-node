exports.paginaHome = (req, res) =>{
    res.render('index')//Nome do arquivo no qual será renderizado a views na tela
}

exports.trataPost = (req, res) =>{
    res.send(req.body)    
}