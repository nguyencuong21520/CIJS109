// 1 Array
// 1.0 Khai báo mảng
// let fruits = ["apple", "banana", "cherry"];
// var student = ["Cuong", "Ha", "Khoa"];

// console.log("fruits:", fruits);

// 1.1 Truy cập vào phần tử của mảng

// Lưu ý: truy cập mảng theo vị trí, và bắt đầu từ 0
// console.log("fruits[1]:", fruits[1]);

// C1: Truy cập mảng theo vị trí
// let fruit1 = fruits[0];
// let fruit2 = fruits[1];
// let fruit3 = fruits[2];

// C2: Destructuring
// let [fruit1, fruit3, fruit2] = fruits;

// 1.2 Thêm phần tử vào mảng

// - thêm phần tử vào cuối mảng
// fruits.push("orange");
// fruits.push("avocado");

// - xóa phần tử cuối cùng của mảng
// fruits.pop();

// - xóa phần tử đầu tiên của mảng
// fruits.shift();

//- thêm phần tử vào đầu mảng
// fruits.unshift("pineapple");
// let fruits = ["apple", "banana", "cherry"];
//- xóa phần tử ở vị trí bất kỳ của mảng
// fruits.splice(1, 1);
//- từ vị trí số 0, xoá 1 phần tử

//- thêm phần tử vào vị trí bất kỳ của mảng

// fruits.splice(1, 1, "orange");
// fruits.splice(1, 0, "grape");
// => ["apple", "grape","banana", "cherry"]

// let arr = [1, 2, 3, 4, 5];

// 2.3 Các phương thức của mảng
// - length: trả về độ dài của mảng
// console.log("arr.length:", arr.length);
//
// **- map: tạo ra một mảng mới từ mảng cũ áp dụng công thức cho từng phần tử của mảng
//C1:
// let result = [];

// for (let i = 0; i < arr.length; i++) {
//   result.push(arr[i] * 3);
// }

//C2:
// let result2 = arr.map((item) => {
//   console.log("🚀 ~ item:", item);

//   return item*2;
// });

// [2,3,4] => [4, 9, 16]

// let arr = [2, 3, 4];
// let result = arr.map((currentValue) => {
//   console.log("🚀 ~ currentValue:", currentValue);

//   return currentValue * currentValue;
// });

// console.log("🚀 ~ result:", result);

// ** - filter: tạo ra một mảng mới từ mảng cũ áp dụng công thức cho từng phần tử của mảng

// let numbers = [1, 2, 3, 4, 5];

// let result = numbers.filter((currentValue) => {
//   return currentValue > 3;
// });

// console.log("result:", result);

// ** - find: tìm phần tử đầu tiên trong mảng thoả mãn điều kiện return
// let numbers = [3, 20, 1, 5, 6, 8];

// let result = numbers.find((currentValue) => {
//   return currentValue > 3;
// });

// console.log("result:", result);

// ** - findIndex: tìm vị trí của phần tử đầu tiên trong mảng thoả mãn điều kiện return
// let numbers = [3, 20, 1, 5, 6, 8];

// let result = numbers.findIndex((currentValue) => {
//   return currentValue > 100;
// });

// console.log("result:", result);

//các method khác
// - every: kiểm tra xem tất cả các phần tử trong mảng thoả mãn điều kiện return không
// - some: kiểm tra xem có phần tử nào trong mảng thoả mãn điều kiện return không
// - reduce: tính tổng của các phần tử trong mảng
// - sort: sắp xếp các phần tử trong mảng
// - reverse: đảo ngược các phần tử trong mảng
// - join: nối các phần tử trong mảng thành một chuỗi
// - split: tách chuỗi thành các phần tử trong mảng
// - slice: cắt phần tử trong mảng
// - splice: xóa phần tử trong mảng
// - concat: nối các mảng thành một mảng
