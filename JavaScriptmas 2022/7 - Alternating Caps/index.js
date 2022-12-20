/* Alternating Caps 
 Write a function that takes in a string of letters
 and returns a sentence in which every other letter is capitalized.

Example input: "I'm so happy it's Monday"
Example output: "I'M So hApPy iT'S MoNdAy"
*/

function altCaps(str){
    //const newStr = str.split('').map(function(letter, index) {
    const newStr = [...str].map(function(letter, index) {  
        return index % 2 == 0 
            ? letter.toUpperCase() 
            : letter.toLowerCase()
        }).join('')
    return newStr;
}

console.log(altCaps("When you visit Portland you have to go to VooDoo Donuts"));
console.log(altCaps("breakfast is the most important meal of the day"))