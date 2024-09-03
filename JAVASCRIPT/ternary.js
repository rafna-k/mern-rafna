const prompt = require('prompt-sync')();
var age=Number(prompt("enter your age:"))
var height=Number(prompt("enter your height:"));
function sample(age,height){
return age>=18&&height>=170?"eligible":"noteligible" 
}

console.log(sample(age,height));

