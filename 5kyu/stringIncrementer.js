// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100
function stringIncrementer(strng){
    if(isNaN(strng[strng.length-1])){
        return strng + 1
      }
      let nums = strng.split("").filter(e => !isNaN(e))
      let letters = strng.split("").filter(e => isNaN(e))
      let numLength = nums.length
      let numStr = (Number(nums.join("")) + 1).toString()
      let zeroCount = numLength - numStr.length;
      return zeroCount > 0 ? letters.join("") + "0".repeat(zeroCount) 
        + numStr : letters.join("") + numStr;
}
stringIncrementer('foo') // foo1
stringIncrementer('foobar23') // foobar24
stringIncrementer('foo9') // foo10
stringIncrementer('foo099') // foo100