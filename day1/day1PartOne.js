const fs=require('fs')

let count=0;
let prvMeasurement=0

fs.readFileSync('./input','utf-8').split(/\r?\n/).forEach(measurements=>{
    const measurement=Number(measurements);
    if(measurement>prvMeasurement) count++;
    prvMeasurement=measurement;
})

console.log(count-1)   