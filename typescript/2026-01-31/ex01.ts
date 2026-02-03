interface ProductI {
    getName: () => string;
    getPrice: () => number;
    getID: () => number;
    setName: (name: string) => void;
    setPrice: (price: number) => void;
}
class Product implements ProductI {
    private id: number;
    private name: string;
    private price: number;

    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }


    getName(): string {
        return this.name;
    }
    getPrice(): number {
        return this.price;
    }
    getID(): number {
        return this.id;
    }
    setName(name: string) {
        this.name = name;
    };
    setPrice(price: number) {
        this.price = price;
    }
}

interface PhoneI extends ProductI {
    getBranch: () => string;
    setBranch: (branch: string) => void;
}

class Phone extends Product implements PhoneI {
    private branch: string

    constructor(id: number, name: string, price: number, branch: string) {
        super(id, name, price);
        this.branch = branch;
    }

    getBranch() {
        return this.branch;
    }
    setBranch(branch: string) {
        this.branch = branch;
    }
}

const iphone5: PhoneI = new Phone(1, "phone5", 3000000, "apple");

console.log(iphone5.getBranch());