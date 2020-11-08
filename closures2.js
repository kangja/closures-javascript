// here is a more common use case of closures where most people talk about closures. We have a function called outerFunction and that function is returning another function called inside of it called innterFunction. 
function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log("Outer Variable: " + outerVariable);
    console.log("Inner Variable: " + innerVariable);
  }
}

const newFunction = outerFunction("outside");
newFunction("inside");
// Outer Variable: outside
// Inner Variable: inside