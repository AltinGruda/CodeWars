// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// function highestRank(arr){
//     const obj = arr.reduce((e, v) => ({...e, [v]: countOccurences(arr, v)}),{})

//     const values = Object.values(obj);
//     const max = Math.max(...values);
//     let highestRankArr = [];

//     for(const value in obj){
//         if(obj[value] === max) {
//             highestRankArr.push(Number(value));
//         }
//     }

//     return Math.max(...highestRankArr);
// }

// function countOccurences(arr, e){
//     let count = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === e){
//             count++;
//         }
//     }

//     return count;
// }


const highestRank = arr => {console.log(arr.sort((a,b) => arr.filter(val => val === b).length - arr.filter(val => val === a).length)[0] || b - a)}
highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]); //12
highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10]); //12
highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]); //3
highestRank([1,2,3,4,5,6,7,8,9]);