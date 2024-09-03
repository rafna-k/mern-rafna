function myfunction(){
console.log('button created')
const vr=document.getElementsByTagName('p')
console.log(vr)
Array.from(vr).map(item=>item.style.color='blue')
Array.from(vr).map(item=>item.style.background='pink')
}