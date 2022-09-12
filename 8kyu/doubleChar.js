// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!
function doubleChar(string){
    return string.split('').map(letter => letter+letter).join('')
}
doubleChar('String')
doubleChar('Hello World')
doubleChar('1234!_ ')