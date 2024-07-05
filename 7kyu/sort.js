function sort(initialArray, sortingArray) {
    let sortingRule = {};
    
    for(let i = 0; i < initialArray.length; i++){
      sortingRule[initialArray[i]] = sortingArray[i];
    }
    
    console.log(initialArray.sort((a, b) => sortingRule[a] - sortingRule[b]));
}

sort([1, 2, 3, 4, 5], [0, 2, 1, 4, 3]) //[1, 3, 2, 5, 4]
sort(['x', 'y', 'z'], [1, 2, 0]) //=> ['z', 'x', 'y']
sort(['z', 'x', 'y'], [0, 2, 1]) //=> ['z', 'y', 'x']

