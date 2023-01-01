// The Collatz conjecture (also known as 3n+1 conjecture) is a conjecture that applying the following algorithm to any number we will always eventually reach one:

// [This is writen in pseudocode]
// if(number is even) number = number / 2
// if(number is odd) number = 3*number + 1
// #Task

// Your task is to make a function hotpo that takes a positive n as input and returns the number of times you need to perform this algorithm to get n = 1.

const hotpo = (n) => {
    if (n == 0) return 0; //Optional Handler to n = 0
    let count = 0;
    for (let i = 0; n !== 1; i++) {
        if (n % 2 === 0) {
            n /= 2
            count++
        } else {
            n = 3 * n + 1
            count++
        }
    }
    return count
}


hotpo(1) // returns 0
hotpo(5) // returns 5
hotpo(6) // returns 8
hotpo(23) // returns 15
