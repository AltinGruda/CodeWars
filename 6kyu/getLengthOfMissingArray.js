// You get an array of arrays.
// If you sort the arrays by their length, you will see, that their length-values are consecutive.
// But one array is missing!

// You have to write a method, that return the length of the missing array.

// Example:
// [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

// If the array of arrays is null/nil or empty, the method should return 0.

// When an array in the array is null or empty, the method should return 0 too!
// There will always be a missing element and its length will be always between the given arrays.

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have created other katas. Have a look if you like coding and challenges.
function getLengthOfMissingArray(arrayOfArrays) {
  console.log(arrayOfArrays);
  if (
    arrayOfArrays === null ||
    arrayOfArrays === [] ||
    arrayOfArrays === undefined ||
    arrayOfArrays.length === 0
  )
    return 0;
  let arr = arrayOfArrays.sort((a, b) => {
    if (a && b) {
      return a.length - b.length;
    }
  });
  for (let i = 0; i < arr.length - 1; i++) {
    if (!arr[i] || arr[i] === null || arr[i].length === 0) {
      return 0;
    }
    if (arr[i] && arr[i + 1] && arr[i + 1].length - arr[i].length > 1) {
      return arr[i].length + 1;
    }
  }

  return 0;
}

// getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]); //, 3);
// getLengthOfMissingArray([[5, 2, 9], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]); //, 2);
// getLengthOfMissingArray([]);
getLengthOfMissingArray([[1, 2, 2], null]);
getLengthOfMissingArray(null);
getLengthOfMissingArray([]);
