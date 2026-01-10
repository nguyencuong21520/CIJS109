export const sumArray = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
};

export const countOccurrences = (arr, value) => {
  //[1,2,3,2,2,6] - count: 2
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      count++;
    }
  }
  return count;
};

export const removeDuplicates = (arr) => {
  // [1,2,3,3,4,5,4,5]
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) === -1) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
  //return new Set(arr);
};

export const flattenArray = (arr) => {
  // [[1,2,3], [4,5,6], [7,8,9]]
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      newArr.push(arr[i][j]);
    }
  }
  return newArr;
  //   return arr.flat();
};

export const isSymmetric = (arr) => {
  // [1,2,3,2,1]
  for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] !== arr[arr.length - i - 1]) {
      return false;
    }
  }
  return true;
};

export const findSecondLargest = (arr) => {
  //sort array
  let sortedArr = arr.sort((a, b) => a - b);

  //get second largest
  return sortedArr[sortedArr.length - 2];
};
