// You are given three arguments:
// answerOfTom: Tom's answer. It's a string of length 10, contains only o or x.
// scoreOfTom: Tom's score. an integer that can be 0,10,20,...,100.
// answerOfJohn: John's answer. It's a string of length 10, contains only o or x.
// Your result should be a 2-elements integer array/tuple: <minimum possible score of John>, <maximum possible score of John>
// Still not understand the task? Look at the following example ;-)
// Examples
// For answerOfTom="oooooooooo", scoreOfTom=20, answerOfJohn="oooooooooo" the output should be 20,20
// In this case, John's answer is same as Tom's, so his scores can only be 20.
// For answerOfTom="oooooooooo", scoreOfTom=20, answerOfJohn="xxxxxxxxxx" the output should be 80,80
// In this case, John's answer is just the opposite of Tom's, so his scores can only be 80.
// For answerOfTom="oooooooooo", scoreOfTom=20, answerOfJohn="oooooxxxxx" the output should be 30,70
// In this case, Tom's score is 20. It means two questions Tom answered correctly.
// Let's think about some situations:
// If the first question and second question Tom answered correctly, the whole correct answer may be "ooxxxxxxxx", John will get 70 points;
// If the last question and second last question Tom answered correctly, the whole correct answer may be "xxxxxxxxoo", John will get 30 points;
// If the 5th question and 6th question Tom answered correctly, the whole correct answer may be "xxxxooxxxx", John will get 50 points;
// ...and other situations...
// So, John can get at least 30 points, at most 70 points.
function possibleScores(aTom, sTom, aJohn) {
  let same = 0;
  
  for (let i = 0; i < aTom.length; i++)
    if (aTom[i] === aJohn[i])
      same += 10;

  const a = 100 - Math.abs(sTom - same);
  const b = Math.abs(100 - sTom - same);
  
  return a > b ? [ b, a ] : [ a, b ];
}

possibleScores("oooooooooo",20,"oooooooooo") //,[20,20])
possibleScores("oooooooooo",20,"xxxxxxxxxx") //,[80,80])
possibleScores("oooooooooo",20,"oooooxxxxx") //,[30,70])
possibleScores("oooooooooo",100,"oooooooooo") //,[100,100])
possibleScores("oooooooooo",100,"xxxxxxxxxx") //,[0,0])
possibleScores("oooooooooo",100,"oooooxxxxx") //,[50,50])
possibleScores("oooooooooo",50,"oooooxxxxx") //,[0,100])
possibleScores("oooooooooo",40,"oooooxxxxx") //,[10,90])
possibleScores("oooooooooo",60,"oooooxxxxx") //,[10,90])
possibleScores("ooxooxooxo",50,"oooooxxxxx") //,[10,90])
possibleScores("xxxooxoooo",70,"xxxoxxoooo") //,[60,80]