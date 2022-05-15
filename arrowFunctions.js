//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

// arrow functions don't need parentheses if only 1 arg, but they're needed for 0 or multiple args
// arrow functions don't require braces {} if only 1 line, but still needed if more than 1
// arrow functions don't require a return statement if only 1 line, but still needed if more than 1 line
// Advanced syntax
// To return an object literal expression requires parentheses around expression:
// params => ({foo: "a"}) // returning the object {foo: "a"}


// Arrow functions: https://www.javascripttutorial.net/javascript-anonymous-functions/
// ES6 introduced arrow function expression that provides a shorthand for declaring anonymous functions:



function doThing1a() { 
    return "doThing1a";
 };

// functions with no args : arrow function needs () for 0 args
 doThing1b = () => {
   return "doThing1b";  //similar to 1a but don't need return for one liner
};
 doThing1c = () => "doThing1c";   // 1 liner, return is implicit and don't need braces {}
 doThing1d = () => 1 * 10;   // 1 line return is implicit
 doThing1e = arg => arg * 10;   // 1 arg don't even need parentheses around the arg
 doThing1f = (arg) => arg * 10;   // 1 arg don't need parentheses around the arg, but it is allowed? possibly required in Solidity
 doThing1g = (arg1, arg2) => arg1 * arg2; // multiple args you need the parentheses again
 doThing1h = arg => {         // muliple lines you need the braces {} and the return statement
    var tmp = arg * 11;
    return tmp - arg;
 }

 
 arg => arg * 10;  // anonymous function. An anonymous function is not accessible after its initial creation. Therefore, you often need to assign it to a variable. 
 let doThing1x = (arg) => arg * 10;   // which makes it look much like a named function but the variable can be re-assigned

// In practice, you often pass anonymous functions as arguments to other functions. For example:
// In this example, we pass an anonymous function into the setTimeout() function. setTimeout takes a function as an argument
// The setTimeout() function executes this anonymous function one second later.
 setTimeout(function() {
    console.log('Execute later after 1 second')
 }, 1000);


 console.log("doThing1a : " + doThing1a());
 console.log("doThing1b : " + doThing1b());
 console.log("doThing1c : " + doThing1c());
 console.log("doThing1d : " + doThing1d());
 console.log("doThing1e : " + doThing1e(2));
 console.log("doThing1f : " + doThing1f(3));
 console.log("doThing1g : " + doThing1g(4, 10));
 console.log("doThing1h : " + doThing1h(5));
 console.log("doThing1x : " + doThing1x(6));
 doThing1x = 1000;    // reassign the function variable
 console.log("doThing1x after function variable reassiged : " + doThing1x);
 
 // Advanced syntax
 // To return an object literal expression requires parentheses around expression:
 console.log(params => ({foo: "a"})) // returning the object {foo: "a"}
