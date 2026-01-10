# Tổng Kết Kiến Thức - Lesson 2: Array và Object

## 1. Array (Mảng)

### 1.1 Khai báo mảng

```javascript
let fruits = ["apple", "banana", "cherry"];
var student = ["Cuong", "Ha", "Khoa"];
```

### 1.2 Truy cập phần tử của mảng

**Lưu ý:** Truy cập mảng theo vị trí, và bắt đầu từ 0

**Cách 1: Truy cập theo vị trí**
```javascript
let fruit1 = fruits[0];
let fruit2 = fruits[1];
let fruit3 = fruits[2];
```

**Cách 2: Destructuring**
```javascript
let [fruit1, fruit3, fruit2] = fruits;
```

### 1.3 Thêm và xóa phần tử

#### Thêm phần tử vào cuối mảng
```javascript
fruits.push("orange");
fruits.push("avocado");
```

#### Xóa phần tử cuối cùng của mảng
```javascript
fruits.pop();
```

#### Xóa phần tử đầu tiên của mảng
```javascript
fruits.shift();
```

#### Thêm phần tử vào đầu mảng
```javascript
fruits.unshift("pineapple");
```

#### Xóa phần tử ở vị trí bất kỳ
```javascript
fruits.splice(1, 1); // Từ vị trí số 1, xóa 1 phần tử
```

#### Thêm phần tử vào vị trí bất kỳ
```javascript
fruits.splice(1, 1, "orange"); // Thay thế phần tử tại vị trí 1 bằng "orange"
fruits.splice(1, 0, "grape");  // Thêm "grape" vào vị trí 1, không xóa phần tử nào
// Kết quả: ["apple", "grape", "banana", "cherry"]
```

### 1.4 Các phương thức của mảng

#### `length` - Trả về độ dài của mảng
```javascript
let arr = [1, 2, 3, 4, 5];
console.log(arr.length); // 5
```

#### `map()` - Tạo mảng mới bằng cách áp dụng hàm cho từng phần tử
```javascript
// Cách 1: Dùng vòng lặp for
let result = [];
for (let i = 0; i < arr.length; i++) {
  result.push(arr[i] * 3);
}

// Cách 2: Dùng map
let result2 = arr.map((item) => {
  return item * 2;
});

// Ví dụ: [2, 3, 4] => [4, 9, 16]
let arr = [2, 3, 4];
let result = arr.map((currentValue) => {
  return currentValue * currentValue;
});
```

#### `filter()` - Tạo mảng mới chứa các phần tử thỏa mãn điều kiện
```javascript
let numbers = [1, 2, 3, 4, 5];
let result = numbers.filter((currentValue) => {
  return currentValue > 3;
});
// Kết quả: [4, 5]
```

#### `find()` - Tìm phần tử đầu tiên thỏa mãn điều kiện
```javascript
let numbers = [3, 20, 1, 5, 6, 8];
let result = numbers.find((currentValue) => {
  return currentValue > 3;
});
// Kết quả: 20
```

#### `findIndex()` - Tìm vị trí của phần tử đầu tiên thỏa mãn điều kiện
```javascript
let numbers = [3, 20, 1, 5, 6, 8];
let result = numbers.findIndex((currentValue) => {
  return currentValue > 100;
});
// Kết quả: -1 (không tìm thấy)
```

#### Các phương thức khác
- **`every()`** - Kiểm tra xem tất cả các phần tử có thỏa mãn điều kiện không
- **`some()`** - Kiểm tra xem có phần tử nào thỏa mãn điều kiện không
- **`reduce()`** - Tính tổng hoặc tích lũy các phần tử trong mảng
- **`sort()`** - Sắp xếp các phần tử trong mảng
- **`reverse()`** - Đảo ngược thứ tự các phần tử trong mảng
- **`join()`** - Nối các phần tử trong mảng thành một chuỗi
- **`split()`** - Tách chuỗi thành các phần tử trong mảng
- **`slice()`** - Cắt một phần của mảng
- **`splice()`** - Xóa hoặc thêm phần tử trong mảng
- **`concat()`** - Nối các mảng thành một mảng

---

## 2. Object (Đối tượng)

### 2.1 Khai báo object

```javascript
let person = {
  name: "John",
  age: 20,
  city: "New York",
};

let apple = {
  color: "red",
  weight: "100g",
  price: 10000,
  state: "fresh",
  isFresh: true,
};
```

### 2.2 Truy cập phần tử của object

**Cách 1: Dùng dấu chấm (dot notation)**
```javascript
console.log(person.city);    // "New York"
console.log(apple.color);    // "red"
```

**Cách 2: Dùng dấu ngoặc vuông (bracket notation)**
```javascript
console.log(person["age"]);  // 20
console.log(apple["color"]); // "red"
```

**Cách 3: Destructuring**
```javascript
let { age, name, city } = person;
console.log(name); // "John"
console.log(age);  // 20
console.log(city); // "New York"
```

### 2.3 Thay đổi giá trị

```javascript
apple.color = "green";
apple["weight"] = "200g";
```

### 2.4 Xóa key của object

```javascript
delete apple.isFresh;
```

### 2.5 Duyệt qua object

#### Sử dụng `for...in`
```javascript
const person = {
  name: "MindX",
  age: 10,
  country: "VietNam",
};

for (const key in person) {
  console.log(key + " là " + person[key]);
}
```

#### Sử dụng `Object.keys()` và `Object.values()`
```javascript
let keysOfPerson = Object.keys(person);
let valuesOfPerson = Object.values(person);
console.log(keysOfPerson);   // ["name", "age", "country"]
console.log(valuesOfPerson); // ["MindX", 10, "VietNam"]
```

### 2.6 Merge objects

#### Sử dụng `Object.assign()`
```javascript
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const mergedObj = Object.assign({}, obj1, obj2);
console.log(mergedObj); // { a: 1, b: 2 }
```

#### Sử dụng Spread Operator (`...`)
```javascript
let person = {
  name: "MindX",
  age: 10,
  country: "VietNam",
};

// Tạo object mới với các thuộc tính của person và thêm thuộc tính mới
let person2 = { ...person, address: "Ha Noi" };

// Spread operator cũng áp dụng cho mảng
let arr = [1, 2, 3, 4, 5];
let arr2 = [...arr]; // Tạo bản sao của mảng

// Khi thay đổi person2, person không bị ảnh hưởng (shallow copy)
person2.name = "Cuong";
console.log(person2); // { name: "Cuong", age: 10, country: "VietNam", address: "Ha Noi" }
console.log(person);  // { name: "MindX", age: 10, country: "VietNam" }
```

---

## Tóm tắt

### Array
- Là tập hợp các phần tử được sắp xếp theo thứ tự
- Truy cập bằng chỉ số (bắt đầu từ 0)
- Có nhiều phương thức để thao tác: `push`, `pop`, `shift`, `unshift`, `splice`, `map`, `filter`, `find`, `findIndex`, v.v.
- Hỗ trợ destructuring và spread operator

### Object
- Là tập hợp các cặp key-value
- Truy cập bằng key (dot notation hoặc bracket notation)
- Có thể thêm, sửa, xóa thuộc tính
- Có thể duyệt qua bằng `for...in`, `Object.keys()`, `Object.values()`
- Hỗ trợ destructuring và spread operator để merge objects
