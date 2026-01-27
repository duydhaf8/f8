interface ProductI {
    // id: number
    // name: string
    // price: number
    getName: () => string
    getPrice: () => number
    getId: () => number
    setName: (name: string) => void
    setPrice: (price: number) => void
}


interface StoreI {
    // id: string // NHỮNG CÁI NÀY PHẢI ẨN ĐI
    // name: string
    // address: string
    getID: () => number
    getName: () => string
    getAddress: () => string
    setName: (name: string) => void
    setAddress: (address: string) => void

    addNewProducts: (product: ProductI[]) => void
    addNewProduct: (product: ProductI) => void
    getProducts: () => ProductI[]
    deleteProduct: (productID: number) => void
    deleteProducts: (productIDs: number[]) => void

    getCustomers: () => CustomerI[]
    addNewCustomer: (customer: CustomerI) => void
    addNewCustomers: (customers: CustomerI[]) => void
    deleteCustomer: (customerID: number) => void
    deleteCustomers: (customerIDs: number[]) => void

    sendNotification: () => void
}

interface CustomerI {
    getID: () => number
    getName: () => string
    setName: (name: string) => void
}

class Product implements ProductI {
    private id: number
    private name: string
    private price: number

    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    setName(name: string) {
        this.name = name
    }

    setPrice(price: number) {
        this.price = price
    }

    getName() {
        return this.name
    }

    getPrice() {
        return this.price
    }

    getId() {
        return this.id
    }
}

const iphone16: ProductI = new Product(1, "iphone 16", 1000000000)
const iphone17: ProductI = new Product(2, "iphone 17", 2222222222)

// iphone16.setName("iphone 16 pro")
// iphone17.setPrice(99999999999)


// CÁCH DÀI VL
// iphone16.id = "1"
// iphone16.name = "iphone 16"
// iphone16.price = "1000000000"


// console.log(iphone16);
// console.log(iphone17);

