import {base} from './base.js'
//g global (encontrar todas)
//i insensitive (não difere maiusculas de minusculas)
//() grupos
//| ou
const regExp1 = /(Teve )(5 filhos)/gi;

console.log(regExp1.exec(base))

