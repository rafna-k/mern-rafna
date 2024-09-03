function multiply(){
   var a= document.getElementById("firstnum").value
   var b= document.getElementById("secondnum").value
   localStorage.setItem("n",a)
   localStorage.getItem("n")
    var c= a*b
   document.getElementById("result").innerHTML=`The Result is: ${c}`
}
function divide(){
    var num1=document.getElementById("firstnum").value
    var num2=document.getElementById("secondnum").value
    localStorage.setItem("d",num1)
    localStorage.getItem("d")
    var c=num1/num2
    document.getElementById("result").innerHTML=`The Result is: ${c}`
}