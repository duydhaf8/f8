const products = [
    { id: 1, name: "Gạo ST25 (5kg)", price: 180000, remaining: 20 },
    { id: 2, name: "Dầu ăn Simply (1L)", price: 65000, remaining: 15 },
    { id: 3, name: "Nước mắm Nam Ngư (750ml)", price: 45000, remaining: 30 },
    { id: 4, name: "Sữa tươi Vinamilk (1L)", price: 38000, remaining: 25 },
    { id: 5, name: "Trứng gà (10 quả)", price: 42000, remaining: 18 }
];
// get product names with price greater than 20000
const filteredProducts = products.filter((product) => {
    return product.price > 100000;
})

const productNames = filteredProducts.map((product) => {
    return product.name;
})
console.log(productNames);

// const product = products
//     .filter(p => p.price > 100000)
//     .map(p => p.name);

