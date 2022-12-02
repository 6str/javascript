const { stderr } = require("process")

// 1651682525
// moment-with-locales library is popular 

console.log(new Date(Date.now()).toISOString().replace("T"," ").slice(0,19))

const unixTimestamp = 1651682525 * 1e3  // * 1k so timestamp in seconds to milliseconds

const dateObject = new Date(unixTimestamp);  // js take timestamp in milliseconds

console.log(dateObject.toDateString())  // Wed May 04 2022
console.log(dateObject.toString());  // Wed May 04 2022 17:42:05 GMT+0100 (British Summer Time)
console.log(dateObject.toLocaleString()); // 04/05/2022, 17:42:05
console.log(dateObject.toLocaleDateString()); // 04/05/2022
console.log(dateObject.toLocaleTimeString()); // 17:42:05
console.log();

console.log("toLocaleDateString");
console.log(new Date(unixTimestamp).toLocaleDateString("en-GB"));  // 04/05/2022
console.log(new Date(unixTimestamp).toLocaleTimeString("en-GB"));  // 17:42:05
console.log();

console.log("toLocaleDateString with options");
var options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
console.log(new Date(unixTimestamp).toLocaleDateString("en-GB", options)); //Wednesday, 4 May 2022
console.log(new Date(unixTimestamp).toLocaleTimeString("en-GB", options));  //Wednesday, 4 May 2022, 17:42:05
var options = { year: 'numeric', month: 'numeric', day: 'numeric' };
console.log(new Date(unixTimestamp).toLocaleString("en-GB", options));  // 04/05/2022
console.log();


console.log("Date.now()");
console.log(Date.now());  // 1651692217420
console.log(Date.now().toLocaleString());  //1,651,693,939,597  // i guess this doesn't make sense to convert to locale string?
console.log(new Date(Date.now()).toLocaleString()); // but works from the Date object
console.log(new Date(Date.now()).toString()); // but works from the Date object
console.log();

console.log("toISOString");
console.log(dateObject.toISOString()); // 2022-05-04T16:42:05.000Z
console.log(dateObject.toISOString().slice(0,10)); // 2022-05-04
console.log(dateObject.toISOString().slice(11, 19)); // 16:42:05
console.log(dateObject.toISOString().replace("T"," ").slice(0,19)); // 2022-05-04 16:42:05
console.log();

const date = new Date(unixTimestamp);
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const year = date.getFullYear();
const monthShort = months[date.getMonth()];      // getting the month from the month array above
const month = date.getMonth() + 1;                    // but I just want the digits in this case
const dt = date.getDate();              // get month starts from 0
const hours = date.getHours();
const minutes = "0" + date.getMinutes();    // hack to pad combined with slice -2 below (-2 meaning from the end)
const seconds = "0" + date.getSeconds();    // couls use substring.padstart() too

console.log("manually formatted");
const formattedTimeHuman = `${year}-${monthShort}-${dt} ${hours}:${minutes.slice(-2)}:${seconds.slice(-2)}`;
console.log(formattedTimeHuman);  // 2022-May-4 17:42:05
const formattedTimeISO = `${year}-${month}-${dt} ${hours}:${minutes.slice(-2)}:${seconds.slice(-2)}`; 
console.log(formattedTimeISO);  // 2022-5-4 17:42:05

