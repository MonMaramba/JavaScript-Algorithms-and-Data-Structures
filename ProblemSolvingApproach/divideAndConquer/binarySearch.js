import { serialize } from "v8";

// Divide and Conquer
// This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of the data
// This pattern can tremendously decrease time complexity

// given a sorted array of integers, write a function called search.
// It accepts a value and returns the index where the value passed to the function is located.
// If the value is not found, return -1.
// Time complexity - O(log n)

const binarySearch = (sortedArr, value) => {
  // add whatever parameters you deem necessary - good luck!
  let left = 0;
  let right = sortedArr.length - 1;
  let mid = 0;
  while (left <= right) {
    mid = Math.floor((right + left) / 2);
    if (value === sortedArr[mid]) return mid;
    value > sortedArr[mid] ? (left = mid + 1) : (right = mid - 1);
  }
  return -1;
};
console.log(
  binarySearch(
    [
      5,
      6,
      10,
      13,
      14,
      18,
      30,
      34,
      35,
      37,
      40,
      44,
      64,
      79,
      84,
      86,
      95,
      96,
      98,
      99
    ],
    10
  )
); // 2
binarySearch([1, 2, 3, 4, 5, 6], 4); // 3
binarySearch([1, 2, 3, 4, 5, 6], 6); // 5
binarySearch([1, 2, 3, 4, 5, 6], 11); // -1
