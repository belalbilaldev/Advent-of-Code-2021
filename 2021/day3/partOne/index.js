module.exports=  function (input){
    const bitCount=[]
    for (binaryNumber of input){
      for(let count = 0; count< binaryNumber.length; count ++){
        if(bitCount[count]===undefined){
                  bitCount[count]= [0,0]
        }
        binaryNumber[count] = parseInt(binaryNumber[count])
        bitCount[count][binaryNumber[count]]++
      }
    }


    let gamma = 0;
    let epsilon = 0;
    for(let count=0 ; count < bitCount.length ; count ++){
        if(bitCount[count][0]>bitCount[count][1]){
          gamma = gamma << 1 | 1
          epsilon = epsilon << 1 | 0
        }else  if(bitCount[count][0]<bitCount[count][1]){
          gamma = gamma << 1 | 0
          epsilon = epsilon << 1 | 1
        }
    }
    return gamma * epsilon
}



