function myfunction(){
 var request = new XMLHttpRequest()
 request.open('get','https://jsonplaceholder.typicode.com/todos')
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
        `    <tr>
                <td>${items.userId}</td>
                <td>${items.id}</td>
                <td>${items.title}</td>
                <td>${items.completed}</td>
            </tr>`
   }
   document.getElementById('result').innerHTML=innerData
}
