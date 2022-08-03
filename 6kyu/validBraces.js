// Write a function that takes a string of braces, and determines if the order of the braces is valid. 
// It should return true if the string is valid, and false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

// What is considered Valid?
// A string of braces is considered valid if all braces are matched with the correct brace.

// Examples
// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False
function validBraces(braces){
    // solution 1: stack
    // let matchingBraces = {
    //     '(' : ')',
    //     '[' : ']',
    //     '{' : '}',
    //   };
    //   let stack = [];
    //   let currentChar;
      
    //   for(let i = 0; i < braces.length; i++){
    //     currentChar = braces[i];
        
    //     if(matchingBraces[currentChar]){
    //       stack.push(currentChar);
    //     } else {
    //       if(currentChar !== matchingBraces[stack.pop()])
    //         return false;
    //     }
    //   }
      
    //   return stack.length === 0;

    // solution 2: indexOf & replace 
    
    while(braces.indexOf('()') !== -1 || braces.indexOf('{}') !== -1 || braces.indexOf('[]') !== -1)
        braces = braces
                        .replace('()', '')
                        .replace('{}', '')
                        .replace('[]', '');
    
    
    console.log(braces.length === 0);
}

// validBraces('[({})](]')
// validBraces('([{}])')


