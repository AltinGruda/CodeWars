// Scenario
// the rhythm of beautiful musical notes is drawing a Pendulum
// Beautiful musical notes are the Numbers
// Task
// Given an array/list [] of n integers , Arrange them in a way similar to the to-and-fro movement of a Pendulum
// The Smallest element of the list of integers , must come in center position of array/list.
// The Higher than smallest, goes to the right.
// The Next higher number goes to the left of minimum number and So on, in a to-and-fro manner similar to that of a Pendulum.
// Array/list size is at least 3 .
// In Even array size, The minimum element should be moved to (n-1)/2 index (considering that indexes start from 0)
// Repetition of numbers in the array/list could occur, So (duplications are included when Arranging).

// pendulum ([6, 6, 8 ,5 ,10]) ==> [10, 6, 5, 6, 8]
// pendulum ([-9, -2, -10, -6]) ==> [-6, -10, -9, -2]
// pendulum ([11, -16, -18, 13, -11, -12, 3, 18]) ==> [13, 3, -12, -18, -16, -11, 11, 18]

function pendulum(values) {
    const sorted = [...values].sort((a, b) => a - b);
    const result = [];

    for (let i = 0; i < sorted.length; i++) {
        if (i % 2 === 0) {
            result.unshift(sorted[i]);
        } else {
            result.push(sorted[i]);
        }
    }

    return result;
}

pendulum([4, 10, 9])//, [10, 4, 9])
pendulum([8, 7, 10, 3])//, [8, 3, 7, 10])
pendulum([6, 6, 8, 5, 10])//, [10, 6, 5, 6, 8])
pendulum([9, 4, 6, 4, 10, 5])//, [9, 5, 4, 4, 6, 10])
pendulum([4, 6, 8, 7, 5])//, [8, 6, 4, 5, 7])
pendulum([10, 5, 6, 10])//, [10, 5, 6, 10])
pendulum([11, 12, 12])//, [12, 11, 12])