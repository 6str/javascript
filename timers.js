// count with setTimeout used recursively
const doThing1 = () => {

    console.log(++counter1)

    if(counter1 < 5) {
        setTimeout(doThing1, 1000)
    } else {
        console.log("done")
    }
}

let counter1 = 0
doThing1()



// count with setInterval and clearInterval
const doThing2 = () => {
    
    console.log(++counter2)
    
    if(counter2 >= 5) {
        clearInterval(timer2)
        console.log("done")
    }
}

let counter2 = 0
timer2 = setInterval(doThing2, 1000)



// count with setInterval and stop at time
const doThing3 = () => {

    console.log(++counter3)
    
    if(Date.now() >= timeStart + 5 * 1000) {
        clearInterval(timer3)
        console.log("finished:", new Date(Date.now()).toDateString())
    }
}
let timeStart = Date.now()
console.log(timeStart)
let counter3 = 0
let timer3 = setInterval(doThing3, 1000)