function flickSwitch(arr){
    let booleanVal = true;
    let finalArr = [];
    for(let i = 0; i < arr.length; i++){
      if(arr[i] === 'flick') {
        booleanVal = !booleanVal;
        finalArr.push(booleanVal);
      } else {
          finalArr.push(booleanVal);
      }
    }
    return finalArr;
}

flickSwitch(["codewars", "flick", "code", "wars"]) //, [true, false, false, false]);
flickSwitch(["flick", "chocolate", "adventure", "sunshine"]) //, [false, false, false, false]);
flickSwitch(["bicycle", "jarmony", "flick", "sheep", "flick"]) //, [true, true, false, false, true]);
flickSwitch(["flick", "flick", "flick", "flick", "flick"]) //, [false, true, false, true, false]);
flickSwitch(["john, smith, susan", "flick"]) //, [true, false]);
flickSwitch(["bicycle"]) //, [true]);
flickSwitch(["flick"]) //, [false]);
flickSwitch([]) //, []);