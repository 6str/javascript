
// how even is the random number distribution

let distribution = {}
let [min, max, iterations] = [1, 10, 10000000]

for(let i=0; i < iterations; ++i) {
    let randNum = Math.floor(Math.random() * max) +1
    ++distribution[randNum] || (distribution[randNum] = 1)
}

console.log(distribution)

// {
//     '1': 999265,
//     '2': 1000540,
//     '3': 998744,
//     '4': 999853,
//     '5': 1000140,
//     '6': 1000287,
//     '7': 1000809,
//     '8': 999943,
//     '9': 999528,
//     '10': 1000891
//   }