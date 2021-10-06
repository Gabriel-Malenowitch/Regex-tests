import { print, ip, CPFs } from "./base.js";
// ^ começa com
// $ termina com

const regExpIP = /(((25[0-5])|([0-2][0-4]\d)|(1\d{2})|([1-9]\d)|(\d))\.){3}((25[0-5])|([0-2][0-4]\d)|(1\d{2})|([1-9]\d)|(\d))(\/\d{1,4})$/
const regExpCPF = /(\d{3}\.){2}\d{3}\-\d{2}/ 

for(const i of ip){
    // print(regExpCPF.test(i), i)
    print(regExpIP.test(i), i)
}

//Outro exercício:
// //const ipRegExp = /((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)/g;
// const regExpIP = /((25[0-5]\.)|([0-2][0-4][0-9]\.)|(1\d{2}\.)|([1-9]\d\.)|(\d\.)){3}((25[0-5])|([0-2][0-4][0-9])|(1\d{2})|([1-9]\d)|(\d))/
// for(let i = 0; i<=300; i++){
//     const ip = `${i}.${i}.${i}.${i}`;
//     print(regExpIP.test(ip), ip)
//     // print(ipRegExp.test(ip), ip)
// }
 