function multiply(number){
    let power = String(number).length;
    if(number < 0) {
      power -= 1;
    }
    return number*Math.pow(5, power);
}


