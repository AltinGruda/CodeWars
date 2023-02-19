// Task
// Given a string str, reverse it and omit all non-alphabetic characters.
function reverseLetter(str) {
  return str
    .split("")
    .reverse()
    .filter((letter) => letter.toUpperCase() !== letter.toLowerCase())
    .join("");
}
reverseLetter("krishan"); //,"nahsirk")

reverseLetter("ultr53o?n"); //,"nortlu")

reverseLetter("ab23c"); //,"cba")

reverseLetter("krish21an"); //,"nahsirk")
