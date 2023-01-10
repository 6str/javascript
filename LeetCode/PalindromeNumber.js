// 9. Palindrome Number
// Given an integer x, return true if x is a palindrome, and false otherwise.


/**
 * @param {number} x
 * @return {boolean}
 */
 const isPalindrome = function(x) {
    
    let reversed = x.toString().split("").reverse().join("")
    console.log("%s:%s", x.toString(), reversed)
    return x.toString() == reversed;
};

console.log(isPalindrome(1))
console.log(isPalindrome(10))
console.log(isPalindrome(11))
console.log(isPalindrome(121))
console.log(isPalindrome(-121))
console.log(isPalindrome(12921))