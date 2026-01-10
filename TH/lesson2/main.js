import {
  sumArray,
  countOccurrences,
  removeDuplicates,
  flattenArray,
  isSymmetric,
  findSecondLargest,
} from "./utils.js";

//- Tính tổng của các phần tử trong mảng
let arr = [1, 2, 3, 5];
console.log(sumArray(arr));

//- Đếm số lần xuất hiện của một giá trị trong mảng
let arr2 = [1, 2, 3, 2, 2, 6];
console.log(countOccurrences(arr2, 9));

//- Xóa các phần tử trùng lặp trong mảng
let arr3 = [1, 2, 3, 3, 4, 5, 4, 5];
console.log(removeDuplicates(arr3));

//- Flatten mảng
let arr4 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(flattenArray(arr4));

//- Kiểm tra mảng có đối xứng không
let arr5 = [1, 2, 3, 2, 1, 3];
console.log(isSymmetric(arr5));

//- Tìm số lớn thứ hai trong mảng
let arr6 = [2, 3, 6, 4];
console.log(findSecondLargest(arr6));
