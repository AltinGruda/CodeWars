// I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

function generateShape(integer){
    let squareArr = [];
    
    for(let i = 0; i < integer; i++){
      let arr = [];
      for(let j = 0; j < integer; j++){
        arr.push('+');
      }
      squareArr.push(arr);
    }
    return squareArr.join('\n').split('').filter(char => char !== ',').join('');
}