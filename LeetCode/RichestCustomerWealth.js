// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

// A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

/**
 * 1672. Richest Customer Wealth
 * @param {number[][]} accounts
 * @return {number}
 */
 const maximumWealth = function(accounts) {
    let maxWealth = 0;
    accounts.forEach((accountHolder) => {
       let runningTotal = 0;
       accountHolder.forEach((account) => {
           runningTotal += account
       })
       if(runningTotal > maxWealth) {
           maxWealth = runningTotal
       }
   })
   return maxWealth
}

// for(let i = 0; i < accounts.length; ++i){
//         let runningTotal = 0;
//         for(let j = 0; j < accounts[i].length; ++j) {
//             runningTotal += accounts[i][j];
//         }
//         if(runningTotal > richestAmount) {
//             richestAmount = runningTotal
//         }
//     }
//     return richestAmount
// };


console.log(maximumWealth([[1,2,3],[3,2,1]]))
console.log(maximumWealth([[1,5],[7,3],[3,5]]))
console.log(maximumWealth([[2,8,7],[7,1,3],[1,9,5]]))