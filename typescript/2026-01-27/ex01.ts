interface AnimalI {
    id: number
    name: string

    going: () => void
    speak: () => void
}

class Animal implements AnimalI {
    id: number
    name = "Animal"
    going(): void {
        console.log("going")
    }
    speak(): void {
        console.log("speaking")
    }
}

class Dog extends Animal {
    speak() {
        super.speak()
        console.log("woof")
    }

    doSth() {
        // going + speaking
        this.going()
        this.speak()
    }
}

class Pug extends Dog {
    // speak() {
    //     super.speak()
    //     console.log("pug")
    // }
    going() {
        console.log("pug is running")
    }
}

const dog = new Dog()
const pug = new Pug()
pug.doSth()
// dog.doSth()

