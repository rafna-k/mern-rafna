// text="one two one two one"
// {
//     one: 3,
//     two:2
// // }
// const obj={}
// arr=text.split(" ")

// arr.map(item=> item in obj? obj[item]+=1 : obj[item]=1)
// console.log(obj)

// text="one two one two one"
// const obj={}
// arr=text.split(" ")
// arr.map(item=>item in obj? obj[item]+=1: obj[item]=1)
// console.log(obj)


a=[10,10,20,20,30,30,40,40,50,50,50,60]
const obj={}
a.map(item=>item in obj? obj[item]+=1 : obj[item]=1)
console.log(obj)