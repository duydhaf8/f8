// // const numbers = [4, 3, 2, 5, 1];
// //
// // const copy = numbers
// // copy[0] =  2000 // số 0 gọi là index
// // console.log(copy);
// // console.log(numbers);
// // // lưu cùng địa chỉ nên array numbers cũng thay đổi theo copy, chỉ áp dụng với kiểu dữ liệu object
// // numbers[0] = 40
// //
// // // hàm lấy chìu dài
// // console.log(numbers.length);
// // console.log(numbers[numbers.length - 1])
// //
// // //
// // const a = 1
// // let b = a
// // b = 2
// // console.log(a)
// //
// // const c = [1, 2, 3] // c = 0x01
// // let d = c // d = 0x01
// // d = 1 // d = 1
// // console.log(d)
// //
// const studentA =
//     {
//         name: "Duy",
//         age: 20,
//         scores: [9, 9, 10]
//     }
// //     console.log(studentA.name, studentA.age)
// // console.log(studentA.scores[2])
// //     const studentB = studentA
// //
//
// const scores = [1, 2, 3]
// scores[0] = 10
// studentA.scores = scores
// console.log(studentA)
// console.log(scores)
//
// const studentC = studentA
// studentC.name = "Duy2"
// console.log(studentC)
// console.log(studentA)

// let a = "1"
// let b = 1
// let c = a + b
// // "1" + "1" => 11
// console.log(c)

const a = true
const b = true
let c = a || b
console.log(c)