
// var arr=[3,4,5,6,7]
// square=[]
// for(key of arr){
//   key*=key
//   square.push(key)
// }
// console.log(square) 



// var arr=[10,25,67,45,70,36,50]
// numb=[]
// for(key of arr){
// if(key%10==0){
//   numb.push(key)
// }
// }
// console.log(numb)

// target=5
// var arr=[3,4,5,6,7,8]
// for(i=0;i<arr.length;i++){
//   if(target==arr[i]){
//     console.log(i)
//   }
// }



var arr=[3,4,5,6,7,8]
target=9;
function array(arr,target){
 for(i=0;i<arr.length;i++){
  if(target==arr[i]){
    return i
  }
}
  
}
console.log(array(arr,target));








