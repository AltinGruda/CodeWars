function matrixAddition(a, b){
    let finalArr = [];

    for(let i = 0; i < a.length; i++){
        finalArr.push([]);
    }
    
    for(let i = 0; i < a.length; i++){
      for(let j = 0; j < a[i].length; j++){
        finalArr[i].push(a[i][j]+b[i][j]);
      }
    }
    
    console.log(finalArr.filter(arr => arr.length !== 0));
}


matrixAddition([
    [9, 2, 3, 4, 1, 5, 4, 1],
    [7, 9, 2, 5, 8, 9, 6, 4],
    [6, 9, 8, 6, 7, 6, 9, 2],
    [2, 5, 7, 6, 8, 1, 4, 6],
    [2, 2, 7, 2, 3, 6, 4, 8],
    [4, 7, 5, 4, 7, 9, 8, 3],
    [5, 8, 5, 6, 2, 1, 3, 5],
    [6, 8, 6, 3, 6, 5, 4, 1]
], 
[
    [8, 4, 8, 2, 3, 6, 7, 6],
    [9, 9, 8, 4, 6, 5, 4, 2],
    [8, 1, 7, 9, 7, 9, 1, 4],
    [4, 9, 6, 7, 5, 2, 4, 9],
    [4, 2, 9, 2, 8, 9, 3, 6],
    [2, 5, 8, 3, 3, 6, 5, 8],
    [4, 6, 3, 8, 4, 8, 8, 6],
    [9, 1, 2, 4, 1, 3, 6, 5]
]
)