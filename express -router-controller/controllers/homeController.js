exports.paginaHome = (req, res) =>{
    res.send(
        `
        <form action="/" method="POST">
            <label>Nome:</label>
            <input type="text" name="name"></input>
            <button>Enviando formulário</button>
        </form>
        `
    )
}

exports.trataPost = (req, res) =>{
    res.send(
        `
        <h1>Recebi o Form</h1> 
        `
    )
}