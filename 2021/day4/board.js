const fs = require('fs');
const input =fs.readFileSync('./input','utf-8').split('\r\n') 

const fillBoards = (inputs)=>{
    let input =inputs.map(data=>data.split(' ').filter(data=>data!=''))
    let line = []
    let Boards = []
     for(let i=1; i< input.length; i++ ){       
         if(input[i].length===0)line = []
         else{
             line.push(input[i].map(Number))
             if(line.length===5){
                Boards.push(line)         
          }
       }
    }
    return Boards
}


const randomNumbers= (input) => {
    const numbers = input[0].split(',').map(Number)
    return numbers

}

/*
module.exports =  function (){
    numbers =  randomNumbers(input)
    boards = fillBoards(input)
 }*/
 exports.numbers=randomNumbers(input)
 exports.boards=fillBoards(input)


