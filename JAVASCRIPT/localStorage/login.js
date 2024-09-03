const myfunction=()=>{
    var user=document.getElementById("inp").value
    localStorage.setItem("name",user)
    window.location='logout.html'
}
function logout(){
    window.location="login.html"
}
function load(){
    var a=localStorage.getItem("name")
    document.getElementById('message').innerHTML=`<h1>Welcome ${a}</h1>`
}


