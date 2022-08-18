// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !
// function pigIt(string){
//     let punctuation = ['!', '?', ',', '.']

//     return string.split(' ').map( word => punctuation.includes(word) ? word : word.slice(1) + word[0] + 'ay').join(' ')
// }
function pigIt(string){
    return string.split(' ').map( word => word.match(/[a-zA-Z]/) ? word.slice(1) + word[0] + 'ay' : word).join(' ')
}
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !