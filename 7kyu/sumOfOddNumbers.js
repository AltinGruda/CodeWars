// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8
// function rowSumOddNumbers(n) {
//     let rowNumbers = []

//     let firstNum = n * (n - 1)
//     if (firstNum % 2 === 0)
//         firstNum++
//     rowNumbers.push(firstNum)

//     let numberToBePushed = firstNum

//     for (let i = 1; i < n; i++) {
//         numberToBePushed += 2
//         rowNumbers.push(numberToBePushed)
//     }

//     return n === 1 ? 1 : rowNumbers.reduce((acc, c) => acc + c, 0)
// }
function rowSumOddNumbers(n) {
    return Math.pow(n, 3)
}

rowSumOddNumbers(1) //, 1);
rowSumOddNumbers(42) //, 74088);