const fs = require('fs');
const input =fs.readFileSync('./input','utf-8').split('\r\n').map(text=>parseInt(text, 10))
const partOne = require('./partOne')
const partTwo = require('./partTwo')



console.log('partOne : '+ partOne(input))
console.log('partTwo : '+ partTwo(input))



