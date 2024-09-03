const myfunction=()=>{
    var user=document.getElementById("inp").value
    localStorage.setItem("name",user)
    if(user==""){
     document.getElementById('text').innerHTML=`please enter your name` 
    }
    else{
        window.location='birthday1.html'

    }
}
function load(){
    var a=localStorage.getItem("name")
    document.getElementById('message').innerHTML=`<h1>Happy birthday ${a}</h1>`
}
