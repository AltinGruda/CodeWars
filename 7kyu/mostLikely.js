function mostLikely(prob1,prob2){
    prob1 = prob1.replace(":", "/");
    prob2 = prob2.replace(":", "/");
    let result = eval(prob1) > eval(prob2);
    
    return result;
}

mostLikely('1:2', '1:3');