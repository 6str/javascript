
let animalSounds = [];

// sensationalist story
animalSounds.push({animal: "cat", sound: "meow"})
animalSounds.push({animal: "dog", sound: "bark"})
animalSounds.push({animal: "bird", sound: "tweet"})
animalSounds.push({animal: "mouse", sound: "squeak"})


console.log("all animals")
animalSounds.forEach((element) => {
    console.log(element.animal, element.sound)
})
console.log("")

console.log("animal by name: cat")
let current = animalSounds.find(element => element.animal == "cat" )
console.log(current.animal, current.sound)
console.log("")

console.log("animal by sound: bark")
current = animalSounds.find(element => element.sound == "bark" )
console.log(current.animal, current.sound)
console.log("")









