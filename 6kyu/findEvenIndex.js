// You are going to be given an array of integers. 
// Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. 
// If there is no index that would make this happen, return -1.

// P.R.E.P
// Parameters, Returns, Examples, Pseudo Code

function findEvenIndex(arr)
{
    let leftCalc = 0, rightCalc = 0;
  //P: array
  //R: return -> num, whole, -1 if not found
  //E:

  //P left is 0, right is sum of arr, for loop: decrement right the value of arr[i], test if equals left, if not increment left the value of arr[i]
    let left = 0;
    let right = arr.reduce( (acc, c) => acc + c ,0);

    for(let i = 0; i < arr.length; i++){
        right -= arr[i]
        if(right === left)
            return i;

        left += arr[i]
    }

    return -1;
}
findEvenIndex([1,2,3,4,3,2,1]) //3
findEvenIndex([1,100,50,-51,1,1]) //1
findEvenIndex([1,2,3,4,5,6]) //-1
findEvenIndex([20,10,30,10,10,15,35]) //3