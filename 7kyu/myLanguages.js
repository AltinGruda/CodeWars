function myLanguages(results) {
    // return the languages in an array where the score is at least 60, in descending order
    let arr = [];
    
    for(const [key, value] of Object.entries(results) ) {
        if(value >= 60) {
            arr.push(key);
        }
    }
    return arr.sort((a,b) => results[b] - results[a]);
}

myLanguages({"Java" : 10, "Ruby" : 80, "Python" : 65}) //, ["Ruby", "Python"])
myLanguages({"Hindi" : 60, "Greek" : 71, "Dutch" : 93})//, ["Dutch", "Greek", "Hindi"])
myLanguages({"C++" : 50, "ASM" : 10, "Haskell" : 20})//, [])