//type import { arguments } from "../arguments.js";
const constructorArgs = require('../constructorArgs');  
console.log(constructorArgs);

// even though the literal string outputs looks wrong 
// it does work with deploy when passed with the spread operator
// e.g. const gameContract = await gameContractFactory.deploy(...constructorArgs);
console.log(...constructorArgs);  

