// 190. Reverse Bits

// Reverse bits of a given 32 bits unsigned integer.

// Input: n = 11111111111111111111111111111101
// Output:   3221225471 (10111111111111111111111111111111)
// Explanation: The input binary string 11111111111111111111111111111101 represents the unsigned integer 4294967293, 
// so return 3221225471 which its binary representation is 10111111111111111111111111111111.

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */

var reverseBits = function(n) {
    return parseInt([...n.toString(2).padStart(32,'0')].reverse().join(''), 2)
};``

