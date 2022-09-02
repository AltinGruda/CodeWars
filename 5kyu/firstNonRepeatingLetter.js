// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. 
//For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.
function firstNonRepeatingLetter(string){
    let str = string.toLowerCase()
    let strIdx;
    result = str.split('').find( (item, index) => {
        strIdx = index
        return str.indexOf(item) === str.lastIndexOf(item)
    })
    
    string = string.charAt(strIdx)
    return typeof(result) !== 'undefined' ? string : ''
}
firstNonRepeatingLetter('sTreSS') // should return T -> T === t