// You are playing a game with integers. You start with the integer 1 and you want to 
// reach the integer target. 
// In one move, you can either:

// Increment the current integer by one (i.e., x = x + 1).
// Double the current integer (i.e., x = 2 * x).
// You can use the increment operation any number of times, however, you can only use the double operation at most maxDoubles times.

// Given the two integers target and maxDoubles, return the minimum number of moves needed to reach target starting with 1.

/**
 * 2139. Minimum Moves to Reach Target Score
 * @param {number} target
 * @param {number} maxDoubles
 * @return {number}
 */
 var minMoves = function(target, maxDoubles) {
    var [runningTotal, steps, halves] = [target, 0, 0]

    // figure out the best bang for buck doubles by working backwards from the target and halving the biggest numbers
    // until halves/doubles used up (or runningTotal hits < 2). the rest must then be reached by increments/decrements
    while((runningTotal > 2) && (halves < maxDoubles)) {
        if(runningTotal % 2 == 0) {
            ++steps
            runningTotal /= 2
            ++halves
        } else {
            ++steps
            runningTotal -= 1
            ++steps
            runningTotal /= 2
            ++halves
        }
    }
    steps += runningTotal - 1
    return steps     
  };


  console.log("steps: ", minMoves(1,2))
  console.log("steps: ", minMoves(3,2))
  console.log("steps: ", minMoves(3,5))
  console.log("steps: ", minMoves(4,2))
  console.log("steps: ", minMoves(4,10))
  console.log("steps: ", minMoves(5,2))
  console.log("steps: ", minMoves(10,2))
  console.log("steps: ", minMoves(15,2))
  console.log("steps: ", minMoves(20,2))
  console.log("steps: ", minMoves(42,2))
  console.log("steps: ", minMoves(128,2))