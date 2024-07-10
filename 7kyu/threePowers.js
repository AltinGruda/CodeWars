function threePowers(n) {
    if(n < 3) {
      return false;
    }
    
    let binaryStr = n.toString(2);
    let countBits = 0;
    for(let i = 0; i < binaryStr.length; i++){
      if(binaryStr[i] === '1'){
        countBits++;
      }
    }
    
    return countBits <= 3;
}

threePowers(3); //true