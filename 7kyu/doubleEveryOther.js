function doubleEveryOther(a) {
    return a.map((num, index) => index % 2 !== 0 ? num+num : num);
}