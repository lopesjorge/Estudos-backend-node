//const multiplica = require('./module2')
//console.log(multiplica(3,3));

const Pessoa = require('./module2')
const p = new Pessoa('jorge')

console.log(p.fala);

console.log(__filename);
console.log(__dirname);

/*
Module path -> Caminho
path.resolve() -> exibe o caminho relativo 
*/
const path = require('path')

console.log(path.resolve(__dirname, '..', '..'));
