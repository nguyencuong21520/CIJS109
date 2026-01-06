// let price = 5000;
// let msg = "Giá " + price + " VNĐ";
// let msg2 = `Giá ${price} VNĐ`;
// console.log("msg:", msg);
// console.log("msg2:", msg2);

// let name = "Cuong";
// let age = 18;
// let school = "MindX";

// let msg = `Tên tôi là ${name} và tôi ${age} tuổi và tôi học tại ${school}`;
// console.log("msg:", msg);

// function greet(name, age, school, address) {
//   //Name: MindX
//   //Age: Cuong
//   //School: 18
//   return `Hello, ${name} ${age} tuổi tại ${school} ở ${address}!`;
// }

// console.log(greet("MindX", "Cuong", 18));

// Hàm tính tổng hai số
// const sum = (name) => {
//   return `Hello, ${name}!`;
// };

// const sum2 = (name) => `Hello, ${name}!`;

// const sum3 = (name) => {
//   return `Hello, ${name}!`;
// };

// // thực thi
// console.log(sum("MindX")); // Output: 8

// const sumAll = (a, ...numbers) => {
//   console.log("🚀 ~ sumAll ~ a:", a);
//   console.log("🚀 ~ sumAll ~ numbers:", numbers);
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum = sum + numbers[i];
//   }
//   return sum;
// };

// console.log(sumAll(4, 6, 3, 5, 7)); // Output: 6
import { sum, sub, mul, div } from "./math.js";
// import aaaaa from "./math.js";
// console.log("sum:", sum(5, 3));
console.log("sub:", sub(5, 3));

console.log("mul:", mul(5, 3));
console.log("div:", div(5, 3));

// console.log("alo:", alo(5, 3));
