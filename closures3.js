//More common use cases if you're using something like axios or fetch.
function outerFunction(url) {
  fetch(url).then(() => { //we're fetching some random url and inside here, we have an actual promise that's being returned so we can say .then. And this is going to take a function and this function is a function that's insdie our outer function. Inside of here, we would have access to our outer variable so we could say outerVariable.
    console.log(url); // we would have access to the url inside the inner function. It's still a function defined inside of another function. And this inner function has access to all of the scope of this outer function. So it has access to this URL variable even though this fetch is only going to call this .then funciton long after outer functino is done being called. All you need to know about closures it aht when you have a function defined inside of another function like this, that inner function has access to the variables and scope of the outer function even if the outer function finishes executing and those variables are no longer accessible outside that function. 
  })
}

const newFunction = outerFunction("outside");
newFunction("inner")