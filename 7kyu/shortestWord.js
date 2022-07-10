// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

//with for loop
// function findShort(s){
  
//     let arr = s.split(' ')
//     let shortestWord = arr[0]
//     for(let i = 1; i < arr.length; i++){
//       if(shortestWord.length > arr[i].length)
//         shortestWord = arr[i]
//     }
    
//     return shortestWord.length
//   }

//i want a better answer:
function findShort(s){
    return Math.min(...s.split(' ').map( item => item.length ))
  }