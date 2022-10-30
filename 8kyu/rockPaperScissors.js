//create a game to play rock paper scissors

const rps = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  let rules = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
  };

  return p2 === rules[p1] ? "Player 1 won!" : "Player 2 won!"
};