// return an array of numbers (that are a power of 2)
// for which the input "n" is the sum
const powers = n => {
    const binaryN = n.toString(2);
    const result = [];
    for (let i = binaryN.length - 1; i >= 0; i--) {
        const bit = Number(binaryN[i]);
        if (bit) {
            result.push(Math.pow(2, binaryN.length - 1 - i));
        }
    }
    return result;
};

powers(2)//, [2]);
powers(6)//, [2, 4]);
