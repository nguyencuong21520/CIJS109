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

// ---------------------------------

// 2. Object
// 2.1 Khai báo object
// let person = {
//   name: "John",
//   age: 20,
//   city: "New York",
// };

// let apple = {
//   color: "red",
//   weight: "100g",
//   price: 10000,
//   state: "fresh",
//   isFresh: true,
// };

// console.log("person:", person);

// 2.2 Truy cập vào phần tử của object

// console.log("person:", person.city);
// console.log("person:", person["age"]);

// console.log("apple:", apple.color);
// console.log("apple:", apple["color"]);

// -- Destructuring
// let { age, name, city } = person;

// console.log("name:", name);
// console.log("age:", age);
// console.log("city:", city);

// - thay đổi giá trị

// console.log("apple:", apple);
// apple.color = "green";
// apple["weight"] = "200g";

// console.log("apple: - 1", apple);

//- xoá key của object

// delete apple.isFresh;

// console.log("apple: - 2", apple);

// For in : duyệt qua từng key của object

// const person = {
//   name: "MindX",
//   age: 10,
//   country: "VietNam",
// };

// for (const key in person) {
//   console.log("🚀 ~ key:", key);

//   console.log(key + " là " + person[key]);
// }

//- object.key

// let keysOfPerson = Object.keys(person);
// let valuesOfPerson = Object.values(person);
// console.log("🚀 ~ keysOfPerson:", keysOfPerson);
// console.log("🚀 ~ valuesOfPerson:", valuesOfPerson);

//- 0bject assign

// const obj1 = { a: 1 };
// const obj2 = { b: 2 };
// const mergedObj = Object.assign({}, obj1, obj2);
// console.log(mergedObj); // Output: { a: 1, b: 2 }

//Spread operator

let person = {
  name: "MindX",
  age: 10,
  country: "VietNam",
};

let arr = [1, 2, 3, 4, 5];

let person2 = { ...person, adress: "Ha Noi" };
let arr2 = [...arr];

console.log("person: - 1", person);
console.log("person2: - 1", person2);

person2.name = "Cuong";

console.log("person2: - 2", person2);
console.log("person: - 2", person);
