module.exports=  function (input){
    let sum=0
    for (let count = 3 ; count < input.length ; count++){
        let windowA = input[count-3] + input[count - 2] + input[count - 1]
        let windowB = input[count-2] + input[count - 1] + input[count]
        if(windowA<windowB) sum++
    }
    return sum
}





