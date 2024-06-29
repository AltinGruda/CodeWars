function myParseInt(str) {
    for(let i = 0; i < str.length; i++) {
    let a = str.split("");
    if(isNaN(a[i])) {
       return str = NaN;
      }
    }
    return Number(str);
}