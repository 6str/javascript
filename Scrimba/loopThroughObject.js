/* Pizza Night? 
It's the weekend and you and your friends can't agree on 
what to order for dinner, so you put it to a vote. 

Write a function to find the food with the highest number of votes. 

Your function should take in a food object and find the food
with the most votes. It should log the winner, along with 
how many votes it received.  

Example input: {"🐈 cats": 19, "🐕 dogs": 17} 
Example output: The winner is 🐈 cats with 19 votes!
*/ 

const gameNightFood = {
    "🍕 pizza": 3, 
    "🌮 tacos": 10, 
    "🥗 salads": 7,
    "🍝 pasta": 5
}

function findTheWinner(obj){
    
    let winningVotes = 0
    let winningFood = ''
    
    for(let key in obj) {
        if(gameNightFood[key] > winningVotes) {
            winningFood = key
            winningVotes = gameNightFood[key]
        } 
    }
    
    return `The winner is ${winningFood} with ${winningVotes} votes!`
}

console.log(findTheWinner(gameNightFood));