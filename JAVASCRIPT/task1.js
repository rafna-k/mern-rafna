const prompt = require ('prompt-sync')();
var n1=Number(prompt('enter value of n1:'));
var n2=Number(prompt('enter value of n2:'));
n1=n1+n2;
n2=n1-n2;
n1=n1-n2;
console.log('after swapping value of n1',n1)
console.log('after swapping value of n2', n2)



// to find greater nmbr 
// var n1=Number(prompt('enter your marks'))
// if(n1>=90&&n1<=100)
// {
//     console.log("your grade is A")
// }
// else if(n1>100){
//     console.log("invalide mark")
// }
// else if(n1>=80)
// {
//     console.log("your grade is B")
// }
// else if(n1>=70)
// {
//     console.log("your grade is C")
// }
// else if(n1>=60)
// {
//         console.log("your grade is D")
// }
// else{
//     console.log("your grade is F")
// }