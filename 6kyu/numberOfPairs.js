function numberOfPairs(gloves) {
    const uniques = new Set(gloves);
    let amount = 0;
    for (let unique of uniques) {
        const count = Math.floor(gloves.filter((pair) => pair === unique).length/2);
        amount += count;
    }
    return amount;
}

numberOfPairs(["red", "green", "red", "blue", "blue", "blue"]);