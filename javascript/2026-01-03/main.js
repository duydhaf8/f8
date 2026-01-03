// // console.log('123');
// //
// // let name = "Anh Duy";
// // console.log(name[3]);
// // console.log(name);
// // console.log(name[0]);
// // let age = 20;
// // switch (true) {
// //     case age > 18:
// //         console.log("lớn hơn 18");
// //         break;
// //     case age === 18:
// //         console.log("bằng 18");
// //         break;
// //     default:
// //         console.log("nhỏ hơn 18");
// // }
// // Bài 1: Toán tử & Điều kiện
//
//
//
// // 1. Viết chương trình tính chỉ số BMI (Cân nặng / (Chiều cao ^ 2)). Nhập chiều cao (m), cân nặng (kg). In ra phân loại: Gầy (BMI < 18.5), Bình thường (18.5 - 24.9), Thừa cân (>= 25).
// let height = 1.65;
// let weight = 68;
// let BMI = (weight / (height * height))
// if (BMI >= 25) {
//     console.log("Thừa cân");
// } else if (BMI >= 18.5) {
//     console.log("Bình thường");
// } else {
//     console.log("Gầy");
// }
//
// // 2. Viết chương trình kiểm tra xem một số có phải là số chẵn hay lẻ, đồng thời kiểm tra nó có chia hết cho 3 không.
// let number = 11;
// if (number % 2 === 0) {
//     console.log("Số chẵn");
// } else {
//     console.log("Số lẻ");
// }
//
// if (number % 3 === 0) {
//     console.log("Chia hết cho 3");
// } else {
//     console.log("Không chia hết cho 3");
// }
//
// // 3. Viết chương trình nhập tuổi và xác định độ tuổi: Trẻ em (<12), Thanh niên (12-25), Trưởng thành (25-60), Người già (>60).
// let age = 59;
// if (age < 12) {
//     console.log("Trẻ em");
// } else if (age <= 25) {
//     console.log("Thanh niên");
// } else if (age <= 60) {
//     console.log("Trưởng thành");
// } else {
//     console.log("Người già");
// }

let year = 2025;
console.log((year = year + 1) - 1);
console.log(year);