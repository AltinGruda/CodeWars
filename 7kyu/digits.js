// Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

// All inputs will be valid.
function digits(n) {
//   return String(n).length;
 if(n===0) return 1;

  let count = 0;
  while(n > 0){
    count++;
    n = Math.floor(n/10);
  }
  return count;
}

digits(128685) //, 6],
digits(9876543210)//, 10],
digits(9007199254740991)//, 16],