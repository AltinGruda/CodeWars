// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// Examples:
// strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

// Concatenate the consecutive strings of strarr by 2, we get:

// treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
// folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
// trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
// blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
// abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

// Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
// The first that came is "folingtrashy" so 
// longest_consec(strarr, 2) should return "folingtrashy".

// In the same way:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
// n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm, "nothing" in Erlang).

// Note
// consecutive strings : follow one after another without an interruption

function longestConsec(arr, k){
    //P: array, integer
    //R: string
    //E: 
            // treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
            // folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
            // trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
            // blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
            // abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]
    //P:
    //  - loop from 0  to i <= arr.length-k (gets the last str when k === 1, and ignores last when k > 1 )
    //  - slice from i to i+k
    //  - tempstr join the temp array 
    //  - test if tempstr length > longest.length
    //  - if yes longest = tempstr if not ignore
    if(strarr.length === 0  || k > strarr.length || k<= 0)
        return "";
    let longest = "";
    for(let i = 0;i <= strarr.length-k; i++){
        let tempArr = strarr.slice(i, i+k);
        let tempStr = tempArr.join('');
        if(tempStr.length > longest.length)
            longest = tempStr;
    }

    return longest;
}