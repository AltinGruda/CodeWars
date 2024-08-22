// Create a function isAlt() that accepts a string as an argument and validates whether the vowels (a, e, i, o, u) and consonants are in alternate order.
function isAlt(word) {
    // if vowel in 0, then consonant in 1
    // if consonant in 0, then vowel in 0
    // meaning: modulo 2 shows the alternate positions

    // edge cases when vowel and consonant are distant
    const vowels = {
        'a': true,
        'e': true,
        'i': true,
        'o': true,
        'u': true
    }
    if (word.length === 1) {
        return true;
    }
    
    if(vowels[word[0]] && vowels[word[1]]) {
        return false;
    } else if (!vowels.hasOwnProperty(word[0]) && !vowels.hasOwnProperty(word[1])) {
        return false;
    }
    if(vowels[word[0]]) {
        for(let i = 0; i < word.length; i++){
            if(vowels[word[i]] && i % 2 === 0) {
                continue;
            } else if(vowels[word[i]] && i % 2 !== 0) {
                return false;
            } else if(!vowels.hasOwnProperty(word[i]) && i % 2 === 0) {
                return false;
            } else {
                continue;
            }
        }
    } else if (vowels[word[1]]) {
        for(let i = 0; i < word.length; i++){
            if(vowels[word[i]] && i % 2 !== 0) {
                continue;
            } else if(vowels[word[i]] && i % 2 === 0) {
                return false;
            } else if(!vowels.hasOwnProperty(word[i]) && i % 2 !== 0) {
                return false;
            } else {
                continue;
            }
        }
    }


    return true;
}

isAlt("amazon") // true
isAlt("apple") // false
isAlt("banana") // true