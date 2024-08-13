function vectorAffinity(xs,ys) {
    if(xs.length === 0 && ys.length === 0) {
      return 1;
    }
    let valid = 0;
    
    for(let i = 0; i < Math.max(xs.length, ys.length); i++){
      if(xs[i] !== undefined && ys[i] !== undefined) {
        if(xs[i] === ys[i]) {
          valid += 1;
        }
      }
    }
    
    return Number(valid/Math.max(xs.length, ys.length));
}