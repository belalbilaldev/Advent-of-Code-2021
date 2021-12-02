const fs = require('fs')

let horizontalposition=0;
let depth=0;
fs.readFileSync('./input','utf-8').split(/\r?\n/).forEach((payload)=>{
    const data=payload.split(' ');
    const action= data[0];
    const value=Number(data[1]);


    switch(action){
        case 'forward':
            horizontalposition+=value; 
            break;   
        case 'down':
            depth+=value;
            break;
        case 'up':
            depth-=value;
            break;
        default:
            return 'unexpected action'
            break;
    }
    

})

console.log(horizontalposition*depth)