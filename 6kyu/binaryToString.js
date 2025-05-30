// Write a function that takes in a binary string and returns the equivalent decoded text (the text is ASCII encoded).
// Each 8 bits on the binary string represent 1 character on the ASCII table.
// The input string will always be a valid binary string.
// Characters can be in the range from "00000000" to "11111111" (inclusive)
// Note: In the case of an empty binary string your function should return an empty string.
function binaryToString(binary) {
    let binaryArr = [];
    for (let i = 0; i < binary.length; i += 8) {
        binaryArr.push(binary.slice(i, i + 8));
    }
    binaryArr = binaryArr.map(item => parseInt(item, 2));
    let word = '';
    for (let i = 0; i < binaryArr.length; i++) {
        word = String.fromCharCode(...binaryArr);
    }
    return word;
}
binaryToString('01100001')//, 'a')
binaryToString('01001011010101000100100001011000010000100101100101000101')//, 'KTHXBYE')
