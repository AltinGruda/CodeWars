// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.
function high(x){
    const computeStrValues = x.split(' ').map( str => [...str].reduce( (acc, c) => acc+c.charCodeAt(0)-96, 0))
    return x.split(' ')[computeStrValues.indexOf(Math.max(...computeStrValues))]
}


high('man i need a taxi up to ubud')//, 'taxi'
high('what time are we climbing up the volcano')//, 'volcano'
high('aa b')//, 'aa'