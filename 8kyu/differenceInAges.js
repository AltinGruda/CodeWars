function differenceInAges(ages){
    let arr = ages.sort((a, b) => a-b);
    let youngest = arr[0];
    let oldest = arr[arr.length-1];
    
    return [youngest, oldest, oldest-youngest];
}
