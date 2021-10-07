import {lookahead, print} from './base.js'


// [^in] negando a palavra in
// ?= Checando sem retorno
// ?<=checando se começa com 
// ?! diferente de
// ?: Este grupo não conta como nos retrovisores
// \s espaço
// \w qualquer letra ou numero ou underline
// \D não numeros

console.log(lookahead)
console.log(lookahead.match(/^.+(?<!online .+)$/gim))
// console.log(lookahead.match(/(?<=online \s+).+/gi))
// console.log(lookahead.match(/^(?!.+[^in]active).+$/gim))
// console.log(lookahead.match(/^(?!.+[^in]active).+$/gim))