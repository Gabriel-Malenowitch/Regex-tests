import {arquivos} from './base.js'
// * (opcionais) 0 ou n
// + (obrigatório) 1 ou n
// ? (opcionais) 0 ou 1
// \ caracter de escape (tipo o \\)
const regExp = /\.(jpe{0,}g|txt)/ig;

for(const arquivo of arquivos){
    console.log(arquivo, arquivo.match(regExp))
}

 