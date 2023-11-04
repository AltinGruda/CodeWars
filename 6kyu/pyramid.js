// Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

// pyramid(0) => [ ]
// pyramid(1) => [ [1] ]
// pyramid(2) => [ [1], [1, 1] ]
// pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
// Note: the subarrays should be filled with 1s
function pyramid(n) {
    // declare the result array
    let result = [];
    // 1. Create n subarrays inside the result array
    for(let i = 0; i < n; i++){
        //      a. create the subarray
        let subArray = new Array(i+1);
        //      b. fill the subarrays with 1s => Array.fill(value, start, end)
        subArray.fill(1, 0, i+1);
        //      c. push it into result
        result.push(subArray);
    }
    // 3. Return the result array
    return result;
}

// given a number, return an array of arrays of n

console.log(pyramid(0), []) // => []
console.log(pyramid(1), [[1]]) //, [[1]]
console.log(pyramid(2), [[1], [1, 1]]) //, [[1], [1, 1]]
console.log(pyramid(3), [[1], [1, 1], [1, 1, 1]]) //, [[1], [1, 1], [1, 1, 1]]

