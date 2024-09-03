function load(){
        var username= document.getElementById("username").value
       var person= document.getElementById("email").value
       var code=document.getElementById("password").value
       localStorage.setItem("name",username)
        localStorage.setItem("email",person)
        localStorage.setItem("paswrd",code)
        if(username=="" && person==""){
                document.getElementById("text1").innerHTML=`<p style="color:red enter a valid user</p>`
        }
        else{
                alert("registerd succesfully")
            
        }

}
function login(){
        var user=document.getElementById("u").value
        var code=document.getElementById("p").value
       var a=localStorage.getItem("name")
       var b= localStorage.getItem("paswrd")
       if (user==a && code==b){
       window.location="familycalculator2.html"
       alert("login succesfull")
       }
       else{
        document.getElementById("text").innerHTML=`<p style="color:red">please enter a valid user</p>` 
       }
}
function logout(){
    window.location="familycalculator.html"
}
var balance=0;
function addinc(){
        let amount = document.getElementById('amnt').value
        balance+=Number(amount);
        document.getElementById('blnce').innerHTML=balance
        var c=document.getElementById("incme").value
        localStorage.setItem("inn",c)
        var d=localStorage.getItem("inn")
        document.getElementById("incme").value=''
        document.getElementById("amnt").value=''
        document.getElementById("calc1").innerHTML=`${balance}`
        document.getElementById("sc").innerHTML+=`<div style="color:white;border:2px solid green; width:300px;margin:25px;>
         <h4 style="color:white">${d} : ${amount}</h4>
        </div>`
}

//         var a=Number(document.getElementById("amnt").value)
//         console.log(typeof(a))
//         localStorage.setItem("in",a)
//        var b=Number(localStorage.getItem("in"))
// //        var e=0
var expense_a=0
function addexp(){
        var e=Number(document.getElementById("amnt1").value)
        // expense_a-=e
        expense_a+=Number(document.getElementById("amnt1").value)
        console.log(expense_a)
        console.log(typeof(expense_a))
        localStorage.setItem("ex",expense_a)
        var b=localStorage.getItem("ex")
        console.log(typeof(a))
        var c=document.getElementById("expns").value
        localStorage.setItem("exp",c)
        var d=localStorage.getItem("exp")
        var f=document.getElementById("amnt1").value
        document.getElementById("calc").innerHTML=expense_a
        document.getElementById("scr").innerHTML+=`<div style="color:white;border:2px solid red; width:300px; margin:25px;">
       <h4>${d} : ${f}</h4>
        </div>`

if(balance<expense_a){
        alert("No balance")
}
else{    
        document.getElementById("blnce").innerHTML-=`${expense_a}`
         document.getElementById("blnce").innerHTML=`${expense_a}`
        document.getElementById("expns").value=''
        document.getElementById("amnt1").value=''
}

}
function resetinc(){
        document.getElementById("calc1").innerHTML=`<h3>💸0</h3>`
        document.getElementById("blnce").innerHTML=`<h2>Total Balance</h2>`
        document.getElementById("sc").innerHTML=``

}
function reset(){
        document.getElementById("calc").innerHTML=`<h3>💸0</h3>`
        document.getElementById("blnce").innerHTML=`<h2>Total Balance</h2>`
        document.getElementById("scr").innerHTML=``
}
