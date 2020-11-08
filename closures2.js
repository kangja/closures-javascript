// here is a more common use case of closures where most people talk about closures. We have a function called outerFunction and that function is returning another function called inside of it called innterFunction. 
// function outerFunction(outerVariable) {
//   return function innerFunction(innerVariable) {
//     console.log("Outer Variable: " + outerVariable);
//     console.log("Inner Variable: " + innerVariable);
//   }
// }

// const newFunction = outerFunction("outside"); //we are calling outerFunction with the variable caleld "outside". 
// newFunction("inside"); //we're calling the new funciton with the variable "inside". What's happening is that when we first called this outer function, we have this outerVariable, which we set to outside, which gets set and we have this function that gets returned here. And the reason we're able to access this outervariable inside of this function is because of closures. 

// Outer Variable: outside
// Inner Variable: inside



// Now, it's kind of weird when you think about it at first becuase this outer function runs and this outervariable is only available inside this function. But htis function is done executing. For example, when the last line of code is removed, nothing gets printed out. It's because we call this outerfunction right here and it executes all of the code and then it's done executing and this outer variable is is no longer accessible. For example, I can't log out the outerVariable if I try to. It will give me an error. 
function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log("Outer Variable: " + outerVariable);
    console.log("Inner Variable: " + innerVariable);
  }
}

const newFunction = outerFunction("outside"); 
// console.log(outerVariable) //as you can see, it doesn't actually exist. So how is the inner function able to access this outerVariable even after it's done being executed?
// ReferenceError: outerVariable is not defined