class wibble1 {

    log() {
        console.log("wibble1")
    }
}

class wibble2 {

    // with static method(s) can be used without instantiating
    static log() {
        console.log("wibble2")

    }
}



// wibble1.log()    // can't do. need to instantiate
const test1 = new wibble1()
test1.log()

wibble2.log() // with static methods, can be used without instatiating
