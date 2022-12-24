
var arr = ["aaaa", "aaaaaaaa", "aaaaaaaaaaaaaa", "aaaaa", "aaa", "aaaaaaaa"];

console.log(
  Math.min(...arr.map(e => e.length))
)