//Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

function minValue(values){
    // filter out the duplicates
    // sort the array
    return Number(Array.from(new Set(values)).sort((a,b) => a-b).join(""))
}