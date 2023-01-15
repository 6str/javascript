/* Chef Mario's Recipe Book 
Chef Mario was in the middle of writing his cookbook masterpiece
when he spilled coffee on his keyboard! Now all his recipes have repeat
ingredients.

Help save Chef Mario's cookbook by writing a function that takes in an array 
and returns a new array with all the duplicates removed. 

Example input: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops", "🦄 unicorn", "🍭 lollipops"];
Example output: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops"];
*/ 

const eggScrambleRecipe = [
        "🥓 bacon",
        "🥓 bacon", 
        "🍳 eggs",
        "🫑 green peppers",
        "🧀 cheese",
        "🌶️ hot sauce",
        "🥓 bacon",
        "🥦 broccoli", 
        "🧀 cheese",
        "🥦 broccoli", 
        "🌶️ hot sauce"
    ]


function removeDupesFromArray(arr) {
    const newArr = []
    arr.map(ingredient => {
        if(!newArr.includes(ingredient))newArr.push(ingredient)
    })
    return newArr
}


// if the array is very large with a lot of duplicates, this would be more efficient
function removeDupesFromArray2(arr) {
    
    let trackedItems = []
    
    return arr.filter(item => {
        if(trackedItems.includes(item)) return false
        else {
            trackedItems.push(item)
            return true
        }
    })
}


// using an object to track
function removeDupesFromArray3(arr) {
    
    let trackedItems = {}
    
    return arr.filter(item => {
        if(trackedItems[item]) return false
        else {
            trackedItems[item] = true
            return true
        }
    })
}


// and using set which removes duplicates
function removeDupesFromArray4(arr){
    return [...new Set(arr)]
}



console.log(removeDupesFromArray(eggScrambleRecipe));
console.log(removeDupesFromArray2(eggScrambleRecipe));
console.log(removeDupesFromArray3(eggScrambleRecipe));
console.log(removeDupesFromArray4(eggScrambleRecipe));