exports.middlewareGlobal = (req, res, next) =>{
    if(req.body.cliente){     
        console.log();
        console.log('passei no middleware Global');
        console.log(`Vi que você enviou um ${req.body.cliente}`);
    }
    console.log('Caiu no else');
    next();
}

exports.checkCsrfError = (err, res, req, next) =>{
    if(err &&  'EBADCSRFTOKEN' ===  err.code){
        return res.render('error')
    } 
}

exports.csrfMiddleware = (res, req, next)=>{
    res.locals.csrfToken = req.csrfToken()
    next()
}
