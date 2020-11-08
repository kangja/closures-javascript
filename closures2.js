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
// function outerFunction(outerVariable) {
//   return function innerFunction(innerVariable) {
//     console.log("Outer Variable: " + outerVariable);
//     console.log("Inner Variable: " + innerVariable);
//   }
// }

// const newFunction = outerFunction("outside"); 
// console.log(outerVariable)
// ReferenceError: outerVariable is not defined
 //as you can see, it doesn't actually exist. So how is the inner function able to access this outerVariable even after it's done being executed? Because the outerVariable has gone out of scope and that is where closures come in. So what happens is this inner function is essentially saying "Okay, I'm inside the outerfunction, it has this outer variable, I'm going to save this outer variable. 



//  I'm going to make sure I know what this outer variable is at all times. And even if the function that defined this variable is no longer executed anymore, I'm still going to keep track of outer variable and that's why you can see outer variable is being printed out.
//  function outerFunction(outerVariable) {
//   return function innerFunction(innerVariable) {
//     console.log("Outer Variable: " + outerVariable);
//     console.log("Inner Variable: " + innerVariable);
//   }
// }

// const newFunction = outerFunction("outside"); 
// newFunction();
// Outer Variable: outside
// Inner Variable: undefined



// innervariable shows up when I pass the inner variable
// function outerFunction(outerVariable) {
//   return function innerFunction(innerVariable) {
//     console.log("Outer Variable: " + outerVariable);
//     console.log("Inner Variable: " + innerVariable);
//   }
// }


// const newFunction = outerFunction("outside"); 
// newFunction("inner");
// Outer Variable: outside
// Inner Variable: inner



function outerFunction(outerVariable) {
  const outer2 = "hi"; //this is inside the scoe that is outdie of this function. Everything in the outer function is available inside the inner function since in JavaScript anything on the inside has access to the things on the outside of the scope. 

  // Essentially it has access to its parent scope, its parent's parent scope and etc, and everything outside of it. 
  return function innerFunction(innerVariable) {
    console.log("Outer Variable: " + outerVariable);
    console.log("Inner Variable: " + innerVariable);
    console.log(outer2)
  }
}

const newFunction = outerFunction("outside"); 
newFunction("inner");
// Outer Variable: outside
// Inner Variable: inner
// hi