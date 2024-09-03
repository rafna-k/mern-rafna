const keys=()=>{
localStorage.setItem("keys",document.getElementById("i").value+=number)
console.log(localStorage)
}

const eql=()=>{
     document.getElementById('i').value
    document.getElementById('i').value=eval(str)
}


const clos=()=>{
  localStorage.removeItem('keys',document.getElementById('i').value="val")
  console.log(localStorage)
}

// const dlt=()=>{
//     var d= document.getElementById('i').value;
//     document.getElementById('i').value=d.slice(0,-1)
// }

const dlt=()=>{
    localStorage.removeItem("value")

}
