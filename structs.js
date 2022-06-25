//https://dev.to/joelbonetr/structs-in-javascript-1p9l
//https://thewebdev.info/2022/05/01/how-to-create-structs-in-javascript/

//tl;dr : no structs in javascript. can create literal objects or a function that creates objects
// you're probably better off using functionless classes in lieu of structs 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

const obj1 = { id: 1, speaker: "john", country: "au" };
const obj2 = { 
    id: 2,
    speaker: "mike",
    country: "nz" 
};

console.log(obj1.id, obj1.name, obj1.country)
console.log(obj2.id, obj2.name, obj2.country)

// /**
//  * @constructor Generates a constructor for a given data structure
//  * @param {string} keys separated by a comma + whitespace. struct('id, name, age')
//  * @returns {constructor} Constructor for the new struct
//  */
 function makeStruct(names) {
    var names = names.split(', ');
    function constructor() {
      for (var i = 0; i < names.length; i++) {
        this[names[i]] = arguments[i];
      }
    }
    return constructor;
  }

//** @type {ObjectConstructor|any} */
const User2 = makeStruct('id, name, country')

//** @type {User} */
const obj3 = new User2('3 Steve UK')
console.log(obj3.id, obj3.name, obj3.country)


// you're probably better off using functionless classes in lieu of structs 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

class User3 {
    constructor(id, name, country) {
        this.id = id;
        this.name = name;
        this.country = country;
    }
}

const obj4 = new User3();

obj4.id = 4
obj4.name = 'Tim'
obj4.country = 'US'
console.log(obj4.id, obj4.name, obj4.country)


const obj5 = new User3(5, 'Bob', 'NZ')
console.log(obj5.id, obj5.name, obj5.country)