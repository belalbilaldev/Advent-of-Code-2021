module.exports=  function (input){
    const answer =input.reduce((floor,currentItem) => {
        return currentItem==='('
                        ? ++floor
                        :--floor  
    },0);
    return answer
}




