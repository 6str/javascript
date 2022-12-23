
/* 
Scrimba mascot Pumpkin has won the grand prize at an international 
cat show. Below are Pumpkin's scores from the judges, as well as all the 
prizes he's won. In all the excitement of victory,
they've become a jumbled mess of nested arrays. Let's 
help Pumpkin by sorting it out. 

Write a function to flatten nested arrays of strings or
numbers into a single array. There's a method
for this, but pratice both doing it manually and using the method. 

Example input: [1, [4,5], [4,7,6,4], 3, 5]
Example output: [1, 4, 5, 4, 7, 6, 4, 3, 5]
*/

const kittyScores = [
    [39, 99, 76], 89, 98, [87, 56, 90], 
    [96, 95], 40, 78, 50, [63]
];

const kittyPrizes = [
    ["💰", "🐟", "🐟"], "🏆", "💐", "💵", ["💵", "🏆"],
    ["🐟","💐", "💐"], "💵", "💵", ["🐟"], "🐟"
    ];


// using Array.flat()
function flatten(arr) {
    return arr.flat()
}


// using concat but only handles 1 level depth
function flattenConcat(arr) {
    
    let flatArray = [];

    arr.forEach(element => flatArray = flatArray.concat(element))

    return flatArray
}

// recursive using concat
function flattenRecurse(arr) {
    
    let flatArray = [];
    
    arr.forEach(element =>
        Array.isArray(element) ?
            flatArray = flatArray.concat(flattenRecurse(element)) :
            flatArray.push(element)
    )
        
    return flatArray
}

console.log(flatten(kittyPrizes));
console.log(flattenConcat(kittyPrizes));
console.log(flattenRecurse(kittyPrizes));

console.log(flatten(kittyScores));
console.log(flattenConcat(kittyScores));
console.log(flattenRecurse(kittyScores));


