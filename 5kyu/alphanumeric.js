// In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

// The string has the following conditions to be alphanumeric:

// At least one character ("" is not valid)
// Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
// No whitespaces / underscore
function alphanumeric(string){
    let punctuation = '.!,;_?:$&()'
    let arr = string.split('')
    return punctuation.indexOf(arr.find( str => punctuation.indexOf(str) !== -1)) !== -1 
            || string.length === 0 || string.includes(' ') || string.includes("\n") ? false : true
}
alphanumeric("Mazinkaiser") // true
alphanumeric("hello world_") // false
alphanumeric("PassW0rd") // true
alphanumeric("     ") //false
alphanumeric("54kE_IajzLoaHtFTIpqAAeJUv") //false
alphanumeric('ciao$$_') // false