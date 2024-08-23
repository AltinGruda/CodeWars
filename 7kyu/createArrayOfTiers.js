function createArrayOfTiers(num) {
    let numArr = num.toString().split('');
    let sliceAmount = 1;
    let result = [];
    
    for(let i = 0; i < numArr.length; i++){
      result.push(numArr.slice(0, sliceAmount).join(''));
      sliceAmount++;
    }
    
    return result;
}