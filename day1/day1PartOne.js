const fs=require('fs')

let count=0;
let prvMeasurement=0
const compare=(array)=>{
    let sum1=array[0]+array[1]+array[2];
    let sum2=array[1]+array[2]+array[3];
    return sum1<sum2 ? true:false 
}

fs.readFileSync('./input','utf-8').split(/\r?\n/).forEach(measurements=>{
    const measurement=Number(measurements);
    if(measurement>prvMeasurement) count++;
    prvMeasurement=measurement;
})

console.log(count-1)   