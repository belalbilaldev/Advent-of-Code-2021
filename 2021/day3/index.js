const fs = require('fs');
const input =fs.readFileSync('./input','utf-8').split('\r\n')
const partOne = require('./partOne')
const partTwo = require('./partTwo')


console.log('partOne : '+ partOne(input))
console.log('partTwo : '+ partTwo(input))



