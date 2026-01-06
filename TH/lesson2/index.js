import {
  productInfo,
  greet,
  sumUpTo,
  square,
  isEven,
  firstElement,
  sum,
  printNames,
} from "./utils.js";
//Cau1
console.log("Cau 1 :", productInfo("Sách", 25000000));
//Cau2
console.log("Cau 2 :", greet("Cuong"));
//Cau3
console.log("Cau 3 :", `Tổng là: ${sumUpTo(5)}`);
//Cau4
console.log("Cau 4 :", `Bình phương của 5 là: ${square(5)}`);
//Cau5
console.log("Cau 5 :", `Số 5 là số chẵn: ${isEven(5)}`);
//Cau6
console.log("Cau 6 :", `Phần tử đầu tiên của mảng là: ${firstElement([])}`);
//Cau7
console.log("Cau 7 :", `Tổng của 1, 2, 3, 4, 5 là: ${sum(1, 2, 3, 4, 5)}`);
//Cau 8
const user = { name: "Nam", age: 30 };
console.log(
  "Cau 8 :",
  `Tên của user là: ${user.name}, tuổi của user là: ${user.age}`
);

//Cau 9
const people = [{ name: "An" }, { name: "Bình" }];
console.log("Cau 9 :", `Danh sách tên là: ${printNames(people)}`);
