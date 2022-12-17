// Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

// If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

// ball1 = new Ball();
// ball2 = new Ball("super");

// ball1.ballType     //=> "regular"
// ball2.ballType     //=> "super"

const Ball = function (ballType) {
  this.ballType = ballType || "regular";
};
const ball1 = new Ball().ballType; //, "regular"
const ball2 = new Ball("super").ballType; //, "super"

console.log(ball1);
console.log(ball2);
