interface AnimalI {
    id: number
    name: string


    speak: () => void
}

abstract class Animal {
    id: number;
    name = "Animal";

    abstract going: () => void;

    abstract speak: () =>  void;
}
class Dog extends Animal {
    speak: () => void;
    going: () => void;
}

const dog = new Dog();
dog.speak();