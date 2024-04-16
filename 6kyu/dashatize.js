function dashatize(num) {
    if(num < 0) {
        num = num*-1;
    }
    let numStrArr = String(num).split('');
    let str = numStrArr.map((num, index) => index !== 0 && index !== numStrArr.length-1 && num % 2 !== 0 ? `-${num}-` : index === 0 && num % 2 !== 0 && numStrArr.length > 1 ? `${num}-` : index !== 0 && num % 2 !== 0 ? `-${num}` : num).join('')
    str = str.replaceAll('--', '-');
    return str;
}

dashatize(0); //0
dashatize(-1); //1
dashatize(-28369); //28-3-6-9
dashatize(-363);
