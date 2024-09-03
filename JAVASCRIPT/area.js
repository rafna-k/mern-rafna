
function calculateArea(...args){
if(args.length==1){
    let areacircle=Math.PI*args[0]*args[0]
    console.log('area of the circle:',areacircle)
    
}
if(args.length==2){
    let arearectangle=args[0]*args[1]
    console.log('area of the rectangle:',arearectangle)
}
if(args.length==3){
    let areatriangle=args[0]*args[1]*args[2]
    console.log('area of the triangle:',areatriangle)
}
}


calculateArea(3);
calculateArea(2,3);
calculateArea(0.5,3,5);

