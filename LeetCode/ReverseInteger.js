/*
    7. Reverse Integer
    Given a signed 32-bit integer x, return x with its digits reversed.
    If reversing x causes the value to go outside the 
    signed 32-bit integer range [-231, 231 - 1], then return 0.
*/

/**
 * @param {number} x
 * @return {number}
 */
const reverse = function(x) {

    let y = x.toString()

    if(y[0] == '-') y = '-' + [...y].slice(1).reverse().join('')
    else  y = [...y].reverse().join('')

    if(Math.abs(y) > Math.pow(2, 31) -1) return 0    

    return parseInt(y)

};

// (2 ** 32) -1 = 2147483647 ; 
// reversed 7463847412

console.log(reverse(123))
console.log(reverse(-123))
console.log(reverse(7463847412))
console.log(reverse(8463847412))
console.log(reverse(-7463847412))
console.log(reverse(-8463847412))