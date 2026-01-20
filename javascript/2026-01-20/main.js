
// const numbers = [1, 2, 3, 4, 5];

// // includes
// console.log(numbers.includes(2));
// const productName = 'Gạo ST25';
// console.log(productName);
// console.log(productName.toLowerCase().includes('gạo'));
//

// // find
// const e = numbers.find((value, index) => {
//     return value === 2
// })
// console.log(e);

const products = [
    { id: 1, name: "Gạo ST25 (5kg)", price: 180000, remaining: 20 },
    { id: 2, name: "Dầu ăn Simply (1L)", price: 65000, remaining: 15 },
    { id: 3, name: "Nước mắm Nam Ngư (750ml)", price: 45000, remaining: 30 },
    { id: 4, name: "Sữa tươi Vinamilk (1L)", price: 38000, remaining: 25 },
    { id: 5, name: "Trứng gà (10 quả)", price: 42000, remaining: 18 }
];

// // find
// const product = products.find((product) => {
//     return product.id === 3;
// })
// console.log(product);

// filter
const filteredProducts = products.filter((product) => product.id > 3);
console.log(filteredProducts);

// map
const ids = products.map((product) => {
    return product.id;
})
console.log(ids);