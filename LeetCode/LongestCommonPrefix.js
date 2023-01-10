// 14. Longest Common Prefix
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.


/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {

    let len = Math.min(...strs.map(word => word.length))
    console.log(len)

    for(let word = 1; word < strs.length; ++word) {
        console.log(strs[word])
        for(let letter = 0; letter < len; ++letter) {
            if(strs[0][letter] !== strs[word][letter]) {
                len = letter
            }
        }
    }

    return strs[0].substring(0, len)

};