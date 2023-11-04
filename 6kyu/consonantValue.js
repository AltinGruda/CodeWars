// Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

// We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

// For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"

// -- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
// solve("zodiacs") = 26

// For the word "strength", solve("strength") = 57
// -- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.

function solve(s) {

  // create an object with vowels and iterate through the string with a loop
  // if a character is a vowel, replace it with a character (e.x: ,)
  // then split the string into that character and we have an array of only consonants
  // map the array and calculate the position in the alphabet each character of the array element 
  // with Math.max find the maximum number inside the array
  let vowels = {
    'a': "a",
    'e': "e",
    'i': "i",
    'o': "o",
    'u': "u",
  };

  for (let i = 0; i < s.length; i++) {
    if (s[i] === vowels[s[i]]) {
      s = s.replace(s[i], ",");
    }
  }
  let consonantSubstringArr = s.split(',').filter(e => e !== '')

  let maxValue = 0;
  
  consonantSubstringArr = consonantSubstringArr.map(element => {
    maxValue = 0;
    for(let i = 0; i < element.length; i++){
      maxValue += element.charCodeAt(i) - 96;
    }
    return maxValue;
  })

  return Math.max(...consonantSubstringArr)
}

solve("zodiac"); //,26);
solve("chruschtschov"); //,80);
solve("khrushchev"); //,38);
solve("strength"); //,57);
solve("catchphrase"); //,73);
solve("twelfthstreet"); //,103);
solve("mischtschenkoana"); //,80);vvvvvv
solve("az"); //,26);
