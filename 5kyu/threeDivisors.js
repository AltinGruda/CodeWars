function solution(n, m) {
    let nums = [];
    let i = 2;
    while (true) {
      let cv = BigInt(i) ** BigInt(4); // cv is i raised to the 4th power, as a BigInt
      if (cv > m) break; // Exit loop if cv is greater than the upper limit m
      if (cv >= n) { // Check if cv is within the range [n, m]
        if (isPrime(i)) nums.push(cv); // If i is prime, add cv to the nums array
      }
      i++;
    }
    return nums;
  }
  
  function isPrime(value) {
    for (let i = 2; i < value; i++) {
      if (value % i === 0) return false; 
    }
    return true;
  }
  

solution(2, 20);