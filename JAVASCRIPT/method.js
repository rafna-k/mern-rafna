// v
// var flag=false

// var arr=[1,2,3,4,5]
// for(key of arr){
//     if(key==2){
//         flag=true
//         }
//          else{
//          }
    
//     }
    
//     if(flag==true){
//         console.log("is present")
//     }
//     else {
//         console.log("not present")
//     }


//    total=15
//    var arr=[4,5,6]
//    for(key in arr){
//     arr[key]=total-arr[key]
//    }
//    console.log(arr)

   
sum=0
var expense=[1800,30,5500,10,22300]
for(key of expense){
    sum+=key
}
console.log(sum)


larg=expense[0]
for(key of expense){
    if(key>larg){
       larg=key 
    }
}
console.log(larg)


min=expense[0]
for(key of expense){
    if(key<min){
        min=key
    }
}
console.log(min)



