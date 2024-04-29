function mergeArrays(arr1, arr2) {
    let set = new Set(arr1.concat(arr2));
    return Array.from(set).sort((a, b) => a - b);
}