const countries=[
    {name:'United States',population:331002651,continent:'north America',capital:'washington,D.C.'},
    {name:'China',population:1439323776,continent:'Asia',capital:'Beijing'},
    {name:'Brazil',population:212559417,continent:'South America',capital:'brasilia'},
    {name:'United kingdom',population:67886011,continent:'Europe',capital:'London'},
    {name:'South Africa',population:59308690,continent:'Africa',capital:'pretoria,capetown,bloemfontein'}

]
// console.log(countries.map(key=>key.name))
// countries.forEach(key=>console.log(key.name))
// console.log(countries.reduce((a,b)=>a.population>b.population?a:b))
// console.log(countries.map(key=>key.population).reduce((a,b)=>a+b))
// countries.filter(key=>key.continent=="Asia").forEach(item=>console.log(item.name))

// for(key of countries){
//     var cap= key.capital.split(",")
//     if(cap.length>1){
//         console.log(cap)
//     }
// }
// console.log(countries.sort((a,b)=>b.population-a.population))
// console.log(countries.reduce((a,b)=>a.population<b.population?a:b))

// console.log(countries.reduce((a,b)=>a.name.length>b.name.length?a:b))
// console.log(countries.reduce((a,b)=>a.name.length<b.name.length?a:b))
console.log(countries.map((key)=>key.population).reduce((a,b)=>(a+b)/countries.length))
