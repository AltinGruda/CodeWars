function drawStairs(n) {
    let result = [];
    
    for(let i = 0; i < n; i++){
      result.push(`${' '.repeat(i)}I`);
    }
    
    return result.join("\n")
}