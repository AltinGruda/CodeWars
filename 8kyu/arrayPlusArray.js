function arrayPlusArray(arr1, arr2) {
  return arr1.reduce((acc, c) => acc + c, 0) + arr2.reduce((acc, c) => acc + c, 0);
}

arrayPlusArray([1, 2, 3], [4, 5, 6])
arrayPlusArray([-1, -2, -3], [-4, -5, -6])