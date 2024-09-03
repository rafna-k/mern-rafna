products=[
    {id:100,name:"apple",brand:"5G",price:120000,display:"led"},
    {id:101,name:"samsung",brand:"5G",price:20000,display:"lcd"},
    {id:102,name:"oppo",brand:"3G",price:12000,display:"oled"},
    {id:103,name:"vivo",brand:"4G",price:18000,display:"led"},
    {id:104,name:"oneplus",brand:"5G",price:120000,display:"lcd"},
]
console.log(products.map(item=>item.name))
console.log(products.filter(item=>item.display=="lcd"))
products.filter(item=>item.brand=="5G").forEach(item=>console.log(item.name))
console.log(products.reduce((a,b)=>a.price>b.price?a:b))
console.log(products.reduce((a,b)=>a.price<b.price?a:b))

