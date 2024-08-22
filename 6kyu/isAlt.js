// Create a function isAlt() that accepts a string as an argument and validates whether the vowels (a, e, i, o, u) and consonants are in alternate order.
function isAlt(word) {
    let isVowels = {'a':1,'e':1,'i':1,'o':1,'u':1}
    let prev;
    let curr;
    for (let i = 0; i < word.length; i++) {
        curr = word[i] in isVowels ? 'vowel' : 'consonant';
        if (curr === prev) { 
            return false; 
        }

        prev = curr;
    }

    return true;
  }

isAlt("amazon") // true
isAlt("apple") // false
isAlt("banana") // true