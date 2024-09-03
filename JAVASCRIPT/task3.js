const prompt = require ('prompt-sync')();
var year=(prompt('enter a year:'))
if(year%400==0 || year%4==0){
    console.log("leap year")
}
    else
    {
        console.log('not a leap year')
    }