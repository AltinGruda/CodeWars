// The drawing below gives an idea of how to cut a given "true" rectangle into squares("true" rectangle meaning that the two dimensions are different).

// Can you translate this drawing into an algorithm ?

//     You will be given two dimensions

// a positive integer length
// a positive integer width
// You will return a collection or a string(depending on the language; Shell bash, PowerShell, Pascal and Fortran return a string) with the size of each of the squares.
function sqInRect(lng, wdth) {
    let arr = []
    if (lng === wdth) return null
    while (lng > 0 && wdth > 0) {
        arr.push(lng > wdth ? wdth : lng)
        lng > wdth ? lng -= wdth : wdth -= lng
    }
    console.log(arr)
}

sqInRect(5, 3) //should return [3, 2, 1, 1]
sqInRect(3, 5) //should return [3, 2, 1, 1]