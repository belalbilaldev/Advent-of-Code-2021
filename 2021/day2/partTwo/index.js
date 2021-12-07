module.exports=  function (input){
    let horizontalPosition = 0
    let depth = 0
    let aim = 0
    input.forEach(currentValue => {
        const [action, position] = currentValue;
        if(action==='forward') { horizontalPosition+=
                                 position;depth += aim*position
                                }
        else if(action==='down') aim += position
        else if(action==='up')   aim -= position
    });
    return horizontalPosition*depth
}






