function multImplication(arr) {
    const len = arr.length;
    if (len === 0) return null;
    
    let answer = true;
    for (let i = 0; i < len; i++) {
      if (answer && arr[i] === false) {
        answer = false;
      } else {
        answer = true;
      }
    }
    return answer;
}