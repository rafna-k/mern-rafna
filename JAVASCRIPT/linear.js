// var arr=[3,4,5,6,7,8]
// target=9;
// function array(arr,target){
//  for(i=0;i<arr.length;i++){
//   if(target==arr[i]){
//     return i
//   }
// }
//   return -1
  
// }
// console.log(array(arr,target));




var arr=[21,3,43,51,6]
arr=arr.sort((a,b)=>a-b);
target=3
function array(arr,target){
l=0;
r=arr.length-1;
    while(l<=r){
        var mid=Math.floor((r+l)/2);
        if(arr[mid]==target){
            return mid;
        }
        if(arr[mid]>target){
            r=mid-1;
        }
        else{
            l=mid+1;
        }
    }
    return -1;
}
console.log(array(arr,target))


