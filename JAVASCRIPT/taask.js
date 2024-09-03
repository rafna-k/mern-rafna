//find duplicate elements
// var arr=[10,6,7,8,10,5,7,3,5]
// arr=(arr.sort((a,b)=>a-b));
// for(i=0;i<arr.length;i++){
//     if(arr[i]==arr[i+1])
//         console.log(arr[i])
// }

// //finde common elements 
// var arr=[5,7,8,3]
// var arr2=[7,8,2,1,5]
// for(key of arr){
// for(items of arr2)
//         if(key==items)
//             console.log(key)
//     }
    


// var arr=[5,3,4,2,7,9,0]
// for(key of arr){
//     for(items of arr){
//         if(key+items==9)
//             console.log("pairs are",key,items)
//     }
// }



  var arr=[[1,2],[10,22],[14,21],[3,6],[5,9],[19,28],[1,9],[10,0]]
 for(key of arr){
        if(key[0]+key[1]<=10){
            console.log(key)
        }
    }
