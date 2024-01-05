function stringy(size) {
    let stringy = '';
    for(let i = 0; i < size; i++){
        if(i % 2 === 0) stringy += 1;
        else stringy += 0;
    }
    return stringy;
}

stringy(6);
stringy(12);