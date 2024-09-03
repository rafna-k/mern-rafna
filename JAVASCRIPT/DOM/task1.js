function myfunction(){
    const vr=document.getElementsByClassName('first')
    arr=Array.from(vr)
    // Array.from(vr).map(item=>item.style.color='red')
    for (i=0;i<arr.length;i++){
        arr[i].style.color='red'
    }

}