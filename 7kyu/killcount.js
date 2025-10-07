// It's Friday the 13th, and Jason is ready for his first killing spree!

// Create a function, killcount, that accepts two arguments: an array of array pairs (the conselor's name and intelligence - ["Chad", 2]) and an integer representing Jason's intellegence.
    
// JavaScript:

// let counselors = [["Chad", 2], ["Tommy", 9]];
// let jason = 7;

// Your function must return an array of the names of all the counselors who can be outsmarted and killed by Jason.

// Happy Friday the 13th!

function killcount(counselors, jason){
  let filtered = counselors.filter(counselor => {
    let canBeKilled = counselor[1] < jason;
    return canBeKilled;
  });

  let mapped = filtered.map(counselor => {
    return counselor[0];
  });

  return mapped;
}


let counselors = [["Chad", 2], ["Tommy", 9]];
let jason = 7;

// killcount(counselors, jason);

counselors = [["Mike", 7],["Alysa", 3]];
killcount(counselors, jason);

