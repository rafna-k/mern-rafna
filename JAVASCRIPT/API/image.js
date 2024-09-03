function myfunction(){
    var request = new XMLHttpRequest()
    request.open('get','https://jsonplaceholder.typicode.com/photos')
    request.send()
   
    request.onreadystatechange=()=>{
     if(request.status>199 && request.status<300){
       let img= JSON.parse(request.response)
       displayData(img)
     }
    }
   }
   const displayData=(img)=>{
    console.log(img)
    let innerData=''
console.log(img)
    for(let items of img){
        innerData+= 
       `<div style="border:1px solid black">${items.title}</div>
        <img src=${items.thumbnailUrl} alt="" >

        `
    }
    document.getElementById('result').innerHTML=innerData
 }
 