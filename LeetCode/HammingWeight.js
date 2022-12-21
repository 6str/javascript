// 191. Number of 1 Bits
// problem : count the number of 1 bits aka the Hamming weight
//
// n -1 flips the right most 1 bit and all the following 0 bits 
// so a bitwise and/& operation on n and n -1 removes the right most 1 bit
// loop through removing the right most 1 bits and count each time 
// gives you the number of 1 bits in n i.e. the hamming weight

// leet code environment seems to work without explicitly converting binary string to number

// no unsigned integers in javascript and blows out with test cases over 2 ** 31 -1
// so can only handle up to 31 bits without extra logic to check bit 32
// if n > 2 ** 31 -1         //  1111111111111111111111111111111 (31 bits)
// then n = n - 2 ** 31      // 10000000000000000000000000000000 (32 bits)
// i.e. if bit 32 is 1, delete the 1 on bit 32 by subtracting 2 ** 31

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    var n = parseInt(n, 2)  // convert binary string number

    // check for edge case: bit 32 set to 1
    if(n > (2 ** 31) -1) {
        n = n - (2 ** 31)
        numOf1Bits = 1;
    } else {
        numOf1Bits = 0;
    }

    while(n > 0) {
        ++numOf1Bits
        n = n & n -1
    }
  return numOf1Bits
};

console.log( 2 ** 32)
//4,294,967,296
console.log( (2 ** 32).toString(2))
//100000000000000000000000000000000
console.log( (2 ** 32 -1).toString(2))
//11111111111111111111111111111111
console.log("11111111111111111111111111111111".length)

console.log( (2 ** 32 -1).toString(2))

console.log("check:", hammingWeight("111111111111111111111111111111"))
//1 0000 0000 0000 0000 0000 0000 0000 0000
console.log( (2 ** 32 -1).toString(2))


let bits = (2 ** 31 -1).toString(2)
console.log(bits, bits.length)

// 2 ** 32
// 100000000000000000000000000000000 (33 bits)





console.log(bits31.length, bits31)
console.log( (2 ** 31 -1).toString(2))


console.log("10000000000000000000000000000000".length)
console.log("test case 1:   ", hammingWeight("00000000000000000000000000000000"))
console.log("test case 2:   ", hammingWeight("10000000000000000000000000000000"))
console.log("test case 3:   ", hammingWeight("11111111111111111111111111111111"))
console.log("test case 4:   ", hammingWeight("11111100000000000000000000101100"))
console.log("test case 5:   ", hammingWeight("11000000000000000001111111111111"))
console.log("test case 6:   ", hammingWeight("10000000000000000011111111111111"))
console.log("test case 7:   ", hammingWeight("00000000010101000001000010001011"))
console.log("test case 8:   ", hammingWeight("01110000010101000001000010001011"))
console.log("test case 9:   ", hammingWeight("00000000000000000111111100000001"))
console.log("test case 10:  ", hammingWeight("00100000000000100000001000001011"))
console.log("test case 11:  ", hammingWeight("10000000000000000001000010001011"))
console.log("test case 12:  ", hammingWeight("11110000010101000001000010001011"))
console.log("test case 13:  ", hammingWeight("01110000010101000001000010001010"))
console.log("test case 14:  ", hammingWeight("00000000000000000000000000001011"))





test = "11111111111111111111111111111111"
console.log(test.length)
console.log("test:", hammingWeight(test))


11111111111111111111111111111101
111111111111111111111111111111

