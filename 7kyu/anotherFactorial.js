//Your task is to write function factorial.

function factorial(n){
    let factorial = 1;
    while(n > 0) {
      factorial *= n;
      n--;
    }
    
    return factorial;
}