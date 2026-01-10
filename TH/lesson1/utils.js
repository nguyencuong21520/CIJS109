export const productInfo = (name, price) => {
  // price = 10000 => 10.000
  const formattedPrice = price.toLocaleString("vi-VN");
  return `Sản phẩm: ${name}, Giá: ${formattedPrice} VNĐ"`;
};

export const greet = (name) => `Hello, ${name}!`;

export const sumUpTo = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
};

export const square = (n) => n * n;

export const isEven = (n) => {
  return n % 2 === 0;
};
export const firstElement = (arr) => {
  if (arr.length < 1) {
    return undefined;
  }
  return arr[0];
};

export const sum = (...numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  return sum;
};

export const printNames = (peopleArr) => {
  //[{ name: "An" }, { name: "Bình" }]
  let result = "";
  for (let i = 0; i < peopleArr.length; i++) {
    result = result + peopleArr[i].name + ", ";
  }
  return result;

  //   return peopleArr.map((person) => person.name).join(", ");
};

export const findMax = (numbers) => {
  // [3,2,7,6,1] => 7
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
};
