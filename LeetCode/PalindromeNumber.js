// 9. Palindrome Number
// Given an integer x, return true if x is a palindrome, and false otherwise.


/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    console.log("%s:%s", x.toString(), x.toString().split("").reverse().join(""))
    return x.toString() == x.toString().split("").reverse().join("");

};

console.log(isPalindrome(12921))