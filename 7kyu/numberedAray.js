// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

const number = (array) => {
    array = array.map((item, index) => item = `${index + 1}: ${item}`)
    return array
}

number([]) //, [], 'Empty array should return empty array');
number(["a", "b", "c"]) //, ["1: a", "2: b", "3: c"], 'Return the correct line numbers');        