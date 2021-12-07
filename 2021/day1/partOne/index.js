module.exports=  function (input){
    let sum=0;
    input.reduce((acc,currentItem)=>{
        if(currentItem > acc) ++sum;
        return currentItem;
    },0)
    return --sum
}



