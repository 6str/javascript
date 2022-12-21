// Given an integer n, return a string array answer (1-indexed) where:
// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.

/**
 * 412. Fizz Buzz
 * @param {number} n
 * @return {string[]}
 */

// standard
const fizzBuzz1 = function(n) {
    
    const fizzNum = 3
    const buzzNum = 5
    const fizzBuzzNum = fizzNum * buzzNum

    const answer = new Array(n)
    
    for(let i=0; i < answer.length; ++i) {
        const num = i + 1

        if(num % fizzBuzzNum == 0) answer[i] = 'FizzBuzz'
        else if(num % fizzNum == 0) answer[i] = 'Fizz'
        else if(num % buzzNum == 0) answer[i] = 'Buzz'
        else answer[i] = String(num)
    }

    return answer
}

// with IIFE
const fizzBuzz2 = function(n) {
    
    const fizzNum = 3
    const buzzNum = 5
    const fizzBuzzNum = fizzNum * buzzNum

    const answer = new Array(n)
    
    for(let i=0; i < answer.length; ++i) {
        const num = i + 1

        answer[i] = (() => {
            if(num % fizzBuzzNum == 0) return 'FizzBuzz'
            if(num % fizzNum == 0) return 'Fizz'
            if(num % buzzNum == 0) return 'Buzz'
            return String(num)
        })()
    }

    return answer
}


// with nested ternary operators
const fizzBuzz3 = function(n) {
    
    const fizzNum = 3
    const buzzNum = 5
    const fizzBuzzNum = fizzNum * buzzNum

    const answer = new Array(n)
    
    for(let i=0; i < answer.length; ++i) {
        const num = i + 1

        answer[i] = 
          !(num % fizzBuzzNum) ? 'FizzBuzz' : 
            !(num % fizzNum) ? 'Fizz' :
              !(num % buzzNum) ? 'Buzz' :
                String(num)
    
    }

    return answer
}


const nums = 30
console.log(fizzBuzz1(nums))
console.log(fizzBuzz2(nums))
console.log(fizzBuzz3(nums))

