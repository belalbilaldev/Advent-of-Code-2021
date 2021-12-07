const fs = require('fs');
const input =fs.readFileSync('./input','utf-8').split('\r\n').map(data=>{
    const [action, position]=data.split(' ')
    return [action, parseInt(position, 10)]
})
const partOne = require('./partOne')
const partTwo = require('./partTwo')


console.log('partOne : '+ partOne(input))
console.log('partTwo : '+ partTwo(input))



