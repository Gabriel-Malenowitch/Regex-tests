import {htmlExample} from './base.js'
// * (opcionais) 0 ou n
// + (obrigatório) 1 ou n
// ? (opcionais) 0 ou 1
// \ caracter de escape (tipo o \\)
const regExp = /<.+?>/g;

console.log(htmlExample.match(regExp))