exports.paginaContato = (req, res)=>{
    res.send(
        [
        {
            nome:'Jorge',
            sobrenome: 'lopes'
        },
        {
            nome:'Antônio',
            sobrenome: 'lopes'
        }
        ]
    )
}