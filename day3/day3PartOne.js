const fs = require('fs')
const input=fs.readFileSync('./input','utf-8').split(/\r?\n/).map((payload)=>payload)
const dataLength=input[0].length;

const calcule=(input)=>{
    let height=''
    let lower=''
    for(let count=0;count<dataLength;count++){
        let countZero = 0 ;let countOne = 0
        input.forEach(data=>{(data[count]==='0')?countZero++:countOne++})
        countZero>countOne?(height+='0',lower+='1'):(height+='1',lower+='0')
    }
  
  
    return  console.log(parseInt(height,2)*parseInt(lower,2))
}

calcule(input)

