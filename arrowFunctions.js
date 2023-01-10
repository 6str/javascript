//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

// arrow functions don't need parentheses if only 1 arg, but they're needed for 0 or multiple args
// arrow functions don't require braces {} if only 1 line, but still needed if more than 1
// arrow functions don't require a return statement if only 1 line, but still needed if more than 1 line
// Advanced syntax
// To return an object literal expression requires parentheses around expression:
// params => ({foo: "a"}) // returning the object {foo: "a"}


// Arrow functions: https://www.javascripttutorial.net/javascript-anonymous-functions/
// ES6 introduced arrow function expression that provides a shorthand for declaring anonymous functions:


// These 3 are all, in essence, are accomplishing pretty much the same task, yet there are 
// important differences between the three, such as the first one being hoisted,
// and the last one having a different way to handle the this keyword.
function hello() {
   console.log("Hello world!")
}

const hi = function() {
   console.log("Hi there!")
}

const hey = () => {
   console.log("Hey, you!")
}

// IIFE - Immediately Invoked Function Expression
// many variations  
// https://developer.mozilla.org/en-US/docs/Glossary/IIFE
const iffy1 = (() => 'IFFE 1')();

const iffy2 = (() => {
   return 'IFFE 2'
})();

console.log("iffy 1:", iffy1)
console.log("iffy 2:", iffy2)


function doThing1a() { 
    return "doThing1a";
 };

// functions with no args : arrow function needs () for 0 args
 doThing1b = () => {
   return "doThing1b";  //similar to 1a but don't need return for one liner
};
 doThing1c = () => "doThing1c";   // 1 liner, no args need parentheses, return is implicit and don't need braces {}
 doThing1d = () => 1 * 10;   // 1 line return is implicit
 doThing1e = arg => arg * 10;   // 1 arg don't need parentheses around the arg
 doThing1f = (arg) => arg * 10;   // 1 arg don't need parentheses around the arg, but it is allowed
 doThing1g = (arg1, arg2) => arg1 * arg2; // multiple args you need the parentheses
 doThing1h = arg => {         // muliple lines you need the braces {} and the explicit return statement
    let tmp = arg * 11;
    return tmp - arg;
 }

 
 arg => arg * 10;  // anonymous function. An anonymous function is not accessible after its initial creation. Therefore, you often need to assign it to a variable. 
 const doThing1x = (arg) => arg * 10;   // which makes it look much like a named function

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
 

