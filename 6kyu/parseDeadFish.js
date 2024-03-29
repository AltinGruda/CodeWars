// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.

// parse("iiisdoso") => [ 8, 64 ]

// Return the output array, and ignore all non-op characters
function parse(data) {
    let value = 0;
    let dataArr = data.split('');
    let finalArr = []
    dataArr.forEach(data => {
        if (data === 'i') {
            value++;
        } else if (data === 's') {
            value = Math.pow(value, 2);
        } else if (data === 'd') {
            value--;
        } else if (data === 'o') {
            finalArr.push(value)
        }
    })

    return finalArr
}

parse("iiisdoso") // => [ 8, 64 ]
