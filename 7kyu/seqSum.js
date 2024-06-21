// Description:

// We want to generate a function that computes the series starting from 0 and ending until the given number.

// Example:
// Input:

// > 6
// Output:

// 0+1+2+3+4+5+6 = 21

const SequenceSum = (function() {
    function SequenceSum() {}
  
    SequenceSum.showSequence = function(count) {
        if(count == 0) {
            return "0=0";
        }
        if(count < 0) {
            return `${count}<0`
        }
        let result = 0;
        let sequence = "";
      for(let i = 0; i <= count; i++){
        if(i < count) {
            sequence += i + "+";
        } else {
            sequence += i;
        }
        result += i;
      }
      return sequence + " = " + result;
    };
  
    return SequenceSum;
  
})();