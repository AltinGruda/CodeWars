// Description:
// Encrypt this!

// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.
// Examples:
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"
const encryptThis = function (text) {
  let encryptedText = text
    .split(" ")
    .map((str) => {
      return (
        str[0].charCodeAt() +
        (str.length > 2 ? str[str.length - 1] : "") +
        (str.length > 2 ? str.slice(2, -1) : "") +
        (str[1] || "")
      );
    })
    .join(" ");

  return encryptedText;
};

encryptThis("Hello"); // === "72olle"
encryptThis("good"); // === "103doo"
encryptThis("hello world"); // === "104olle 119drlo"
encryptThis("A"); // === '65'
encryptThis("A wise old owl lived in an oak"); // 65 119esi 111dl 111lw 108dvei 105n 97n 111ka
