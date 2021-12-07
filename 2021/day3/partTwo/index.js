const bitCriteria  = ( input , action ,  position = 0 ) => {
    if(input.length === 1)return input
    const bitCountZero=[]
    const bitCountOne=[]
    for (binaryNumber of input){
        if(parseInt(binaryNumber[position])===0){
             bitCountZero.push(binaryNumber)
        }else if(parseInt(binaryNumber[position])===1){
            bitCountOne.push(binaryNumber)
        }
    }
    action==='oxygenGeneratorRating'
    ?input = bitCountZero.length > bitCountOne.length ? bitCountZero:bitCountOne
    :input = bitCountZero.length > bitCountOne.length ? bitCountOne:bitCountZero

   return bitCriteria (input , action , ++position)    

}  

module.exports=  function (input){
    const oxygenGeneratorRating = bitCriteria (input , 'oxygenGeneratorRating')
    const CO2ScrubberRating = bitCriteria (input , 'CO2ScrubberRating')
    return parseInt(oxygenGeneratorRating,2)
            *parseInt(CO2ScrubberRating,2)   
}






