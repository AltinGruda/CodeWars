function prefill(n, v) {
    if(isNaN(Number(n)) || !isFinite(n) || n < 0 || parseInt(n, 10) != n || Boolean(n) === n ){
      throw new TypeError(`${n} is invalid`);
    }
    if(Number(n) === 0) return [];
    
    return Array(n).fill(v);
  }



console.log(prefill(3,1)) //--> [1,1,1]
console.log(prefill(2,"abc")) //--> ['abc','abc']
console.log(prefill("1", 1)) //--> [1]
console.log(prefill(3, prefill(2,'2d'))) //--> [['2d','2d'],['2d','2d'],['2d','2d']]
console.log(prefill("xyz", 1)) //--> throws TypeError with message "xyz is invalid"