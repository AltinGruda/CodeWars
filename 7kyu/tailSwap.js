// You'll be given a list of two strings, and each will contain exactly one colon (":") in the middle (but not at beginning or end). The length of the strings, before and after the colon, are random.

// Your job is to return a list of two strings (in the same order as the original list), but with the characters after each colon swapped.

// Examples
// ["abc:123", "cde:456"]  -->  ["abc:456", "cde:123"]
// ["a:12345", "777:xyz"]  -->  ["a:xyz", "777:12345"]

function tailSwap(arr) {
    // split each string
    // store the second part in an array
    // then go to every element and swap that
    let secondPartArr = [];

    for(let i = 0; i < arr.length; i++){
        secondPartArr.push(arr[i].split(':')[1]);
    }

    for(let i = 0; i < arr.length; i++){
        let element = arr[i].split(":");
        element[1] = secondPartArr[1-i];
        arr[i] = element.join(':');
    }

    return arr;
}

tailSwap(["abc:123", "cde:456"]); //  -->  ["abc:456", "cde:123"]
tailSwap(["a:12345", "777:xyz"]); // -->  ["a:xyz", "777:12345"]