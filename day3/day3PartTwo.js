const fs = require('fs')
const input=fs.readFileSync('./input','utf-8').split(/\r?\n/).map((payload)=>payload)
let table1=input;
let table2 =input


const calcule=(input,index)=>{
    let height='';let lower=''
    let countZero = 0;let countOne = 0
    let values=[]
          input.forEach(data=>{(data[index]==='0')?countZero++:countOne++})
            countZero>countOne?(height+='0',lower+='1'):(height+='1',lower+='0')
            values.push(lower,height)
    return values
}

const getElement=(table,flag)=>{
    let index=0
    while(table.length>1){
        let swap=calcule(table,index)[flag]
        table=table.filter(data=>data[index]==swap)
        index++
    }
    return table

}

console.log(parseInt(getElement(table1,1),2)
*parseInt(getElement(table2,0),2))













