// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

/**
 * 1. Two Sum
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 var twoSum = function(nums, target) {
    for(var n1 = 0; n1 < nums.length; ++n1) {
        for(var n2 = n1+1; n2 < nums.length; ++n2) {
            if(nums[n1] + nums[n2] === target) {
                return [n1, n2]
            }
        }
    }
};
