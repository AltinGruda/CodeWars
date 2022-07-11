// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!
//this one comes first on my mind
// function createPhoneNumber(numbers){
//     let areaCode = numbers.slice(0, 3)
//     let phoneNumber1 = numbers.slice(3, 6)
//     let phoneNumber2 = numbers.slice(6, 10)
    
//     return `(${areaCode.join('')}) ${phoneNumber1.join('')}-${phoneNumber2.join('')}`
//   }

//a better solution is this:
function createPhoneNumber(numbers){
    var format = "(xxx) xxx-xxxx"
    
    numbers.forEach(item => format = format.replace('x', item))
    
    return format
  }