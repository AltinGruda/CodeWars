// Write a function that accepts a string, and returns true if it is in the form of a phone number.
// Assume that any integer from 0-9 in any of the spots will produce a valid phone number.

// Only worry about the following format:
// (123) 456-7890 (don't forget the space after the close parentheses)

// Examples:

// "(123) 456-7890"  => true
// "(1111)555 2345"  => false
// "(098) 123 4567"  => false
function validPhoneNumber(phoneNumber) {
  let pattern = "(xxx) xxx-xxxx";
  let regex = /[0-9a-zA-Z]/gi;

  return phoneNumber.replaceAll(regex, "x") === pattern;
}
validPhoneNumber("(123) 456-7890"); //  => true
validPhoneNumber("(1111)555 2345"); // => false
validPhoneNumber("(098) 123 4567"); //  => false
