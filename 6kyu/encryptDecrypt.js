// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

// Examples:

// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
// Together with the encryption function, you should also implement a decryption function which reverses the process.

// If the string S is an empty value or the integer N is not positive, return the first argument without changes.

function encrypt(text, n) {
    if (!text) return text
    let oddArr = []
    let evenArr = []
    let finalArr = []
    for (let i = 0; i < n; i++) {
        oddArr = text.split('').map((item, index) => index % 2 !== 0 ? item : '').filter(item => item !== '')
        evenArr = text.split('').map((item, index) => index % 2 === 0 ? item : '').filter(item => item !== '')
        finalArr = oddArr.concat(evenArr).join('')
        text = finalArr
    }

    return text
}

function decrypt(encryptedText, n) {
    if (!encryptedText) return encryptedText

    let chars = encryptedText.split('')
    let mid = parseInt(chars.length / 2)

    while (n > 0) {
        let oddChars = chars.slice(0, mid)
        let evenChars = chars.slice(mid)
        chars = []

        while (oddChars.length || evenChars.length) {
            if (evenChars.length) {
                chars.push(evenChars.shift());
            }
            if (oddChars.length) {
                chars.push(oddChars.shift());
            }
        }
    }
    return chars.join('')
}

encrypt("012345", 1) // =>  "135024"
encrypt("012345", 2) // =>  "135024"  ->  "304152"
encrypt("012345", 3) // =>  "135024"  ->  "304152"  ->  "012345"

decrypt("135024", 1) // => "012345"
decrypt("304152", 2) // => "012345"