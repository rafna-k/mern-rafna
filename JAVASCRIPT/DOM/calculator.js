function keys(number){
    document.getElementById('i').value+=number

}
const eql=()=>{
    var str= document.getElementById('i').value
    document.getElementById('i').value=eval(str)
}

const clos=()=>{
    var clear= document.getElementById('i').value=''
}

const dlt=()=>{
    var d= document.getElementById('i').value;
    document.getElementById('i').value=d.slice(0,-1)

}

