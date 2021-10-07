import { print, emails } from "./base.js";

// const regExp = /.{1,30}@([a-z]{1,20}\.){1,5}[a-z]{1,20}$/
const regExp = /^(?!.*\s).+/gi

for(const email of emails){
    print(regExp.test(email), email)
}
