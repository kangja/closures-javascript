const myName = "Jason" //this variable, which is external to the function below, is actually available internally inside the function. This is a global variable and it's available inside the function. 

function printName() {
  console.log(myName);
}

printName();

// The function is using closures. In fact, the entire function is a giant closure. Most of the time, when you run code in other languages other than Javascript, you CANNOT access variables outside of a function. That is not always possible in other languages. BUT, it is possible in JavaScript and it is what we call a closure. 

// The way closures work in Javascript is that every scope, for example, we have the entire javascript file that is one scope and then our printName is an another scope. Every scope has an access to everything outside of its scope. So our printName scope has an outer scope of our entire file so it has access to everything inside the outer file. 