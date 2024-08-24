function zeros (n) {
    let sum = 0;
    while(n>0){
      n=Math.floor(n/5);
      sum+=n
    }
    return sum;
}