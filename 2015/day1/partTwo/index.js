module.exports=  function (input){
    let floor=0;
    let basement=0;
    const answer=input.some((currentItem) => {
        currentItem==='('
        ? floor++
        : floor--
        basement++
        return floor===-1
    });
    return basement
}


