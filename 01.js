import {base} from './base.js'
//g global (encontrar todas)
//i insensitive (não difere maiusculas de minusculas)
//() grupos
//| ou
const regExp1 = /(joão|maria|luiz)(, hoje sua esposa)/gi;

console.log(base)
console.log(base.match(regExp1))
console.log(base.replace(/(a)|(e)|(o)/ig, '$1$2$3'))

 