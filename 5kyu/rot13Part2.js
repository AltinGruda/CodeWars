// How can you tell an extrovert from an introvert at NSA? Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.

// I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it? According to Wikipedia, ROT13 (http://en.wikipedia.org/wiki/ROT13) is frequently used to obfuscate jokes on USENET.

// Hint: For this task you're only supposed to substitue characters. Not spaces, punctuation, numbers etc.

// Test examples:

// "EBG13 rknzcyr." -->
// "ROT13 example."

// "This is my first ROT13 excercise!" -->
// "Guvf vf zl svefg EBG13 rkprepvfr!"
function rot13(str) {
    return str.replace(/[a-z]/gi, letter => String.fromCharCode(letter.charCodeAt(0)
                      + ( letter.toLowerCase() <= 'm' ? 13 : -13 )))
}

rot13("This is my first ROT13 excercise!")  // Guvf vf zl svefg EBG13 rkprepvfr!
rot13("EBG13 rknzcyr.") // "ROT13 example."