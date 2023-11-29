/*
A exportação de módulos no node é diferente do ECMASCRIPT6
MODULE -> Objeto no qual tem a opção exports
ESPORTS -> Passa os objetos/chaves os quais deseja-se importar
Cria as chaves nas quais desejo importar, e associa as chaves criadas a elas

*/

const nome = 'Jorge'
const sobrenome = 'Lopes'

const falaNome = () => nome+ " "+sobrenome

exports.nome = nome
exports.sobrenome = sobrenome
exports.falaNome = falaNome

//Outras formas de exportar arquivos
// Exportar usando module.exports
module.exports.nomeFunction = 'qualquer coisa'
//Exportar usando o .this -> Não muito usado
this.teste = 'Olá estou usando o this'

class Pessoa {
   constructor(nome){
        this.nome = nome
   }
}

exports.Pessoa = Pessoa