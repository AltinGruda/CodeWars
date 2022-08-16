// There is a queue for the self-checkout tills at the supermarket. 
//Your task is write a function to calculate the total time required for all the customers to check out!

// input
// customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// output
// The function should return an integer, the total time required.

// Important
// Please look at the examples and clarifications below, to ensure you understand the task correctly :)

// Examples
// queueTime([5,3,4], 1)
// // should return 12
// // because when there is 1 till, the total time is just the sum of the times

// queueTime([10,2,3,3], 2)
// // should return 10
// // because here n=2 and the 2nd, 3rd, and 4th people in the 
// // queue finish before the 1st person has finished.

// queueTime([2,3,10], 2)
// // should return 12
// Clarifications
// There is only ONE queue serving many tills, and
// The order of the queue NEVER changes, and
// The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.

function queueTime(customers, n) {
    let till = new Array(n).fill(0)
    for(let customer of customers){
        let index = Math.min(till.indexOf(Math.min(...till)))
        till[index] += customer
    }

    return Math.max(...till)
  }
queueTime([2,3,10], 2) //12
queueTime([2, 3, 10, 10], 2) //13
queueTime([10,2,3,3], 2) //10
queueTime([5,3,4], 1) //12
queueTime([], 1) // 0
queueTime([1,2,3,4], 1) // 10
queueTime([2,2,3,3,4,4], 2) // 9
queueTime([1,2,3,4,5], 100) //5
queueTime([7,30,37,6,45,30,3,18,18,15,39,49,16,35,27,19,4,14,43,48,7,15,9,20,11], 5) //128