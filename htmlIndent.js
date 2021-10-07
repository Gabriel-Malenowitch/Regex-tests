import {htmlExample, print} from './base.js'

const RegExp = /<(\w+)([\s\S]*>)[\s\S]*<\/\1>/g
const lista = htmlExample.match(RegExp)
console.log(lista)

// const RegExp = /<(\w+).*?>/g
// lista.forEach(element => {
//     console.log(element.replace(/<(\w+).*?>/g, '$1'))
// });

// console.log(htmlExample)

