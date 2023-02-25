const inAscOrder = (arr) => arr.join("") === arr.sort((a, b) => a - b).join("");

inAscOrder([1, 6, 10, 18, 2, 4, 20]);
inAscOrder([1, 2, 4, 7, 19]);
