module.exports=  function (input){
    let horizontalPosition = 0
    let depth = 0
    input.forEach(currentValue => {
        const [action, position] = currentValue;
        if(action==='forward')   horizontalPosition+= position
        else if(action==='down') depth += position
        else if(action==='up')   depth -= position
    });
    return horizontalPosition*depth
}



