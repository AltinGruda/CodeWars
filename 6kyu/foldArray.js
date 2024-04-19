function foldArray(array, runs){
  // finalArray variable
  // push last item + first item into array
  // double for loop: first one for the runs, second for the array
  let finalArr = [];
  let dupArr = array;
  for(let i = 0; i < runs; i++){
    finalArr = [];
    for(let j = 0; j < Math.ceil(dupArr.length / 2); j++){
        if(j === dupArr.length - j - 1 && dupArr.length % 2 !== 0 ) {
            finalArr.push(dupArr[j]);
        } else {
            finalArr.push(dupArr[j] + dupArr[dupArr.length-j-1]);
        }
    }
    dupArr = finalArr;
  }
  return finalArr;
}

foldArray([1,2,3,4,5], 2 )// -> [9,6] //2times
foldArray([ -9, 9, -8, 8, 66, 23 ], 1) //[ 14, 75, 0 ]