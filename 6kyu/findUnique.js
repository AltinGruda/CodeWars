// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

function findUniq(arr){
    //arr.find test if arr.indexOf(num) === lastIndexof num and return it
    return arr.find( (num, index ,arr) => arr.indexOf(num) === arr.lastIndexOf(num))
}

findUniq([ 1, 1, 1, 2, 1, 1 ]) //2
findUniq([ 0, 0, 0.55, 0, 0 ])//0.55
findUniq([ 1, 0, 0 ]) // 1