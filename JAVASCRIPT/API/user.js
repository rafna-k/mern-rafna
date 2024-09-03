function myfunction(){
    var request = new XMLHttpRequest()
    request.open('get','https://jsonplaceholder.typicode.com/users')
    request.send()
    request.onreadystatechange=()=>{
        if(request.status>199 && request.status<300){
          let data= JSON.parse(request.response)
          displayData(data)
        }
       }
      }
      const displayData=(data)=>{
        console.log(data)
        let innerData=''
    console.log(data)
        for(let items of data){
            innerData+= 
             `<div style="border:1px solid black;">${items.username}</div>
             <div style="border:1px solid black">${items.email}</div>`
            }
            document.getElementById('display').innerHTML=innerData
         }
         
   
