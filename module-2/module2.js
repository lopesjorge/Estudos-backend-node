/*
Dessa forma é possível exportar funções classes diretamente sem instânciar a variável ou classe
*/

/*
module.exports = function(a,b){
    return a * b
}
*/

module.exports = class Pessoa {
    constructor(nome){
        this.nome = nome
    }

    get fala(){
        return `${this.nome} está falando Oi`
    }
}