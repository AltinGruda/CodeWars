// What is the remainder when 1234567 is divided by 13?

// 7      6     5      4     3     2     1  (digits of 1234567 from the right)
// ×      ×     ×      ×     ×     ×     ×  (multiplication)
// 1     10     9     12     3     4     1  (the repeating sequence)
// Therefore following the method we get:

//  7×1 + 6×10 + 5×9 + 4×12 + 3×3 + 2×4 + 1×1 = 178

// We repeat the process with the number 178:

// 8x1 + 7x10 + 1x9 = 87

// and again with 87:

// 7x1 + 8x10 = 87

// From now on the sequence is stationary (we always get 87) and the remainder of 1234567 by 13 is the same as the remainder of 87 by 13 ( i.e 9).

// Task:
// Call thirt the function which processes this sequence of operations on an integer n (>=0). thirt will return the stationary number.

// thirt(1234567) calculates 178, then 87, then 87 and returns 87.

// thirt(321) calculates 48, 48 and returns 48

function thirt(n) {
    let sequenceArr = [];
    let length = String(n).length;
    for(let i = 0; i < length; i++){
        sequenceArr.push(Math.pow(10, i) % 13);
    }

    let stationaryNum = 0;
    let reversedNumber = reverseNumber(n);

    for(let i = 0; i < length; i++){
        stationaryNum += Number(String(reversedNumber)[i]) * sequenceArr[i];
    }

    

    console.log(stationaryNum);
}

function reverseNumber(num) {
    return Number(String(num).split('').reverse().join(''));
}

thirt(1234567);