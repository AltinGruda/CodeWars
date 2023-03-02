// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""
function cleanString(s) {
  // use a stack, iterate through string and push the char if its not a #
  // if it's a #, then pop from stack
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "#") {
      arr.push(s[i]);
    } else {
      arr.pop();
    }
  }

  return arr.join("");
}

cleanString("abc#d##c"); // ==>  "ac"
cleanString("abc##d######"); // ==>  ""
cleanString("#######"); //==>  ""
cleanString(""); //==>  ""
