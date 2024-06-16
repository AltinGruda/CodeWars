// Given integers a and b, determine whether the following pseudocode results in an infinite loop

function isInfiniteProcess(a, b) {
    while(a !== b) {
      a++;
      b--;
      if(a > b) return true;
    }
  return false;
}
