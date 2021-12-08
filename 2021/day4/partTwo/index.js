module.exports=  function (  numbers, boards , set = [] ){

   for ( let numberCount = 0 ; numberCount < numbers.length ; numberCount++ ){
       set.push(numbers[numberCount])
       for ( let boardCount = 0 ; boardCount < boards.length ; boardCount++ ){
            let board = boards[boardCount]
        //check  start
            for(let i = 0 ; i < 5 ; i++){
                let row=0
                 let col=0
                for(let j = 0 ; j < 5 ; j++){
                    if(set.find(element=> element === board[i][j])!==undefined){
                                row++ ;
                    }
                    if(set.find(element=> element === board[j][i])!==undefined){
                                col++ ; 
                    }
                }
                if(row===5||col===5) {
                    if(boards.length===1){
                        // sum start
                        let sum = 0;
                        for(let i = 0 ; i < 5 ; i++){
                            for(let j = 0 ; j < 5 ; j++){
                                let trv = false;
                                for(let countSet = 0; countSet < set.length ; countSet++ ){
                                    if(board[i][j] === set[countSet])trv = true   
                                }
                                
                                if(!trv){
                                    sum += board[i][j]
                                }
                            }
                        }
                        return sum*numbers[numberCount]
                        // sun end
                    }
                    boards.splice(boardCount, 1)
                }
            }

        //check  end


        }

   }

}

