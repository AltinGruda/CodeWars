// Write a function called LCS that accepts two sequences and returns the longest subsequence common to 
//the passed in sequences.

// Subsequence
// A subsequence is different from a substring. 
//The terms of a subsequence need not be consecutive terms of the original sequence.

// Example subsequence
// Subsequences of "abc" = "a", "b", "c", "ab", "ac", "bc" and "abc".

// LCS examples
// LCS( "abcdef" , "abc" ) => returns "abc"
// LCS( "abcdef" , "acf" ) => returns "acf"
// LCS( "132535365" , "123456789" ) => returns "12356"
// Notes
// Both arguments will be strings
// Return value must be a string
// Return an empty string if there exists no common subsequence
// Both arguments will have one or more characters (in JavaScript)
// All tests will only have a single longest common subsequence. 
//Don't worry about cases such as LCS( "1234", "3412" ), which would have two possible longest common subsequences: "12" and "34".
function LCS(x, y) {
    let longest = (x, y) => { 
        return x.length > y.length ? x : y 
    }

    if (!x.length || !y.length) {
      return '';
    } else if (x[0] === y[0]) {
      return x[0] + LCS(x.slice(1), y.slice(1));
    } 

    return longest(LCS(x.slice(1), y), LCS(x, y.slice(1)));
}
LCS( "abcdef" , "abc" ) //=> returns "abc"
LCS( "abcdef" , "acf" ) //=> returns "acf"
LCS( "132535365" , "123456789" ) //=> returns "12356"
LCS("a", "b") // ''
LCS('anothertest', 'notatest') // nottest