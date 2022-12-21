// 13. Roman to Integer

var lookup = {
    "I":1,
    "V":5,
    "X":10,
    "L":50,
    "C":100,
    "D":500,
    "M":1000
}

/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    let input = s.split("")
    let runTot = 0        
    let current, previous
    for(i = input.length -1;i >= 0; --i) {
        current = lookup[input[i]]
        if(current < previous) {
            runTot -= current    
        } else {
            runTot += current
        }
        previous = current
    }
    return runTot
};

console.log("expected 3:", romanToInt("III"))
console.log("expected 58:", romanToInt("LVIII"))
console.log("expected 1994:", romanToInt("MCMXCIV"))
console.log("expected 19:", romanToInt("XIX"))
console.log("expected 14:", romanToInt("XIV"))


// same thing with foreach
var romanToInt2 = function(s) {
      let runTot = 0        
    let current, previous
      let input = s.split("").reverse()
    input.forEach(function(romanNum) {
        current = lookup[romanNum]
        if(current < previous) {
            runTot -= current    
        } else {
            runTot += current
        }
        previous = current
    })
    return runTot
};