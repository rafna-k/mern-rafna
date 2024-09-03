accounts=[
    {
        acno:1000,ac_type:'savings',balance:45000,transaction:[
            {
                to:1001,amount:6000,msg:'ebil', mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi', mode:'neft'  
            },
            {
                to:1003,amount:1000,msg:'recharge', mode:'phonepe'
            },
        ]
    },
    {
        acno:1001,ac_type:'current',balance:30000,transaction:[
            {
                to:1000,amount:1000,msg:'grossary', mode:'gpay'
            },
            {
                to:1001,amount:5000,msg:'ebil', mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi', mode:'neft'  
            },
            {
                to:1003,amount:1000,msg:'recharge', mode:'phonepe'
            },
        ]
    },
    {
        acno:1002,ac_type:'fixed',balance:100000,transaction:[
            {
                to:1000,amount:5000,msg:'ebil', mode:'gpay'
            },
            {
                to:1001,amount:2000,msg:'emi', mode:'neft'  
            },
            {
                to:1003,amount:1000,msg:'recharge', mode:'phonepe'
            },
        ]
    },
    {
        acno:1003,ac_type:'savings',balance:30000,transaction:[
            {
                to:1001,amount:7000,msg:'ebil', mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi', mode:'neft'  
            },
            {
                to:1000,amount:1000,msg:'recharge', mode:'phonepe'
            },
        ]
    }
]
console.log(accounts.length)
// console.log(accounts.filter(item=>item.ac_type=="savings"))
// accounts.filter(item=>item.acno==1000).forEach(item=>console.log(item.balance))
