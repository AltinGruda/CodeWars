function next(n) {
  if(n === 0) return 0;
  const digits = n.toString();
  
  if (digits.length === 1) {
    return n + n;
  }
  
  return digits.split('').reduce((acc, c) => acc * (parseInt(c) || 1), 1) + n;
}

function convergence(n) {
  let counterOne = 1
  let counterN = n
  
  const seriesOne = [counterOne]
  const seriesN = [counterN]
  
  while (true) {
    counterOne = next(counterOne)
    counterN = next(counterN)

    seriesOne.push(counterOne)
    seriesN.push(counterN)
    
    const matchOne = seriesOne.indexOf(counterN)
    const matchN = seriesN.indexOf(counterOne)
    
    
    if (matchOne > 0) return seriesOne.length - 1
    if (matchN > 0) return matchN
  }
}