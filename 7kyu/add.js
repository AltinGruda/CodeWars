function add(arr) {
    let sum = arr[0];
    const result = [];
    
    for(let i = 1; i <= arr.length; i++) {
      result.push(sum);
      sum += arr[i];
    }
    
    return result;
}