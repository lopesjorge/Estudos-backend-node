/*
A importação de módulos é feita com REQUIRE
Arquivos nodes que pertencem a pasta nodemodules não preciam passar o caminho completo, basta apenas o nome
*/
const falaNome1 = require('./modulo')//Modo 1
const falaNome2 = require('./modulo').falaNome//Modo 2 -> Passar o nome da chave que quero importar
const {nome, sobrenome, falaNome} = require('./modulo')//Modo 3 -> Passar o objeto de forma desestruturada (OBS: Sempre passar os mesmo nomes usados para criar o objeto)

const aux = falaNome2()
console.log(falaNome1, falaNome1.teste);
console.log(falaNome2(), aux);
console.log(nome,sobrenome,falaNome());

const {Pessoa} = require('./modulo')//Desestruturando o a chave pessoa do objeto importado
const Pessoa2 = require('./modulo').Pessoa // Só funciona pegando a chave pessoa do objeto, se não fizer dessa forma apresenta erro!

const p = new Pessoa('Jõao')
const p2 = new Pessoa2('Antônio')

console.log(p,p2);

const axios = require('axios')//Arquivos instalados direto do node basta apenas add o nome do arquivo como caminho

axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
.then(reponse => console.log(reponse.data))
.catch(e=>console.log(e))