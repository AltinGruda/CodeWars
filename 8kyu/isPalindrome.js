// Write a function that checks if a given string (case insensitive) is a palindrome. A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar, the date and time 12/21/33 12:21, and the sentence: "A man, a plan, a canal – Panama".
function isPalindrome(x) {
  const punctuationMarks = {
    ".": ".",
    ",": ",",
    "?": "?",
    "!": "!",
    ":": ":",
    ";": ";",
    "'": "'",
    "–": "–",
    " ": " ",
  };
  return (
    x
      .split("")
      .filter((char) => char !== punctuationMarks[char])
      .reverse()
      .join("")
      .toLowerCase() ===
    x
      .split("")
      .filter((char) => char !== punctuationMarks[char])
      .join("")
      .toLowerCase()
  );
}

isPalindrome("A man, a plan, a canal – Panama");
