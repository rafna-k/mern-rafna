// function add(a,b){
//     console.log("sum of two nmbrs")
// }
// function add(a,b,c){
//     console.log("sum of three nmbrs")
// }
// function add(a,b,c,d){
//     console.log("sum of four nmbrs")
// }

// add();

function processArgs(...args){
    if(args.length==0){
        console.log('no argument provided')
    }
    if(args.length==1){
        console.log("one argument provided:",args[0])
    }
    if(args.length>1){
        console.log('multiple argument provided:',args[1])
    }
}
processArgs();
processArgs(4);
processArgs(2,3,4,5);