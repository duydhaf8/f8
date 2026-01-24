interface AnimalI {
    arm: number
    leg: number
    speaking: () => string
    going: () => void

    setArm: (arm: number) => void
    setLeg: (leg: number) => void
}

class Animal implements AnimalI {
    arm: number
    leg: number
    speaking(){
        return 'speak'
    }
    going (){
        console.log("go")
    }

    setArm(arm: number) {
        console.log(arm);
    }

    setLeg(leg: number){

    }
}

const animal = new Animal()
console.log(animal.speaking())
animal.going()
animal.setArm(10)


class Dog implements AnimalI {
    arm: number = 2
    leg: number = 2
    speaking(): string {
        return 'woof'
    }
    going(): void {
        console.log("4 legs")
    }
    setArm(arm: number): void {
        console.log(arm);
    }
    setLeg(leg: number): void {
        throw new Error("Method not implemented.")
    }
}