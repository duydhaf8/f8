// const a = 10;
// const b = 4;
//
// const c = a % b;

// console.log(c);

// let a = 10;
//
// // a = 10
// console.log(a++ + ++a + a-- - --a);
// // 10 + 12 + 12 - 10




// f(x) = a * x^2 + b * x + c
// delta = b^2 - 4 * a * c
// delta = b^2 - ac
// x1, x2 = - b +- sqrt(delta) / 2a
const a = 6, b = 0, c = 6;

const delta = b ** 2 - 4 * a * c;
if (delta > 0) {
    const x1 = (-b + delta ** 0.5) / (2 * a);
    const x2 = (-b - delta ** 0.5) / (2 * a);
    console.log(x1, x2);
} else if (delta === 0) {
    const x = -b / (2 * a);
    console.log(x);
} else {
    console.log("Phương trình vô nghiệm");
}


