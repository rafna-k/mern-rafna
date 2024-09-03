// n=4
// fact=1;
// while(n>0){
//     fact*=n
//     n--
// }
//     console.log(fact)


    // n=3;
    // i=1;
    // a="";
   
    // while(i<=n){
    //     a+=n;
    //     console.log(a)
    //     i++;
    // }

   


    // n=3;
    // i=1
    // while(n<=3){
    //     console.log(n)
    //     n++
    // }
    // console.log(n,i*1)
    // { 
    //    console.log(n*2)
    // }

    i=153
    temp=i
    sum=0
    while(temp>0){
        b=temp%10
        sum+=b*b*b
        temp=Math.floor(temp/10)
       
    }

    if(sum==i){
    console.log(`${i}`,"is an armstrong number")
    }
    else{
        console.log(`${i}`,"not an armstrong number")
    }
        

   
 i=175
 sum=0
 temp=i
 while(temp>0){
    b=temp%10;
    sum+=b*b*b;
    temp=Math.floor(temp/10);
 }  
 if(sum==i){
    console.log(`${i}`,"is an armstrong number")
 }
 else{
    console.log(`${i}`,"not an armstrong number")
 }
   
   
    

