import { emails } from "./base.js";

const regExp = /.{1,30}@(.{1,20}(?!\.)){1,7}/

for(const email of emails){
    console.log(email, regExp.test(email))
}
