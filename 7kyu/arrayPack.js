function arrayPacking(a) {
    return parseInt(a.map(b => b.toString(2).padStart(8,'0')).reverse().join(''), 2);
}