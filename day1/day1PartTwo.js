const fs=require('fs')

let count=0;
let array=[];
const compare=(array)=>{
    let sum1=array[0]+array[1]+array[2];
    let sum2=array[1]+array[2]+array[3];
    return sum1<sum2 ? true:false 
}

fs.readFileSync('./input','utf-8').split(/\r?\n/).forEach(measurements=>{
    const measurement=Number(measurements);
    array.push(measurement)
    if(array.length===4){
        if(compare(array))count++;
        array.shift();
    }  
})

console.log(count)   