// Helper functions

// getDigit function takes in 2 params(number and index) that returns the digit at index
//numbers are read from right to left starting at 0 index. 12345, 3 would return 2
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
// console.log(getDigit(7485, 2)); // will return 4
//Math.abs will return only positive numbers to ensure function works on negative arguments.
//Math.abs(num) [means 7485] / Math.pow(10, i)[means 100] = 7485 / 100 = 74.85
//Math.floor will give 74
// 74 % 10 = remainder 4 will be the answer

// digitCount(num) - returns the number of digits in num
function digitCount(num) {
  if (num === 0) return 1; // added to ensure that 1 is returned because log10(0) = -infinity
  return Math.floor(Math.log10(Math.abs(num))) + 1;
} // log10(num) is asking "10 to what number will give num?"
// Math.abs(num) makes sure the function works with negative numbers
// digitCount(1346);
// Math.abs(1346) = 1346
// Math.log10(1346) = 3.1290450598879582
// Math.floor = 3
// finally +1 will return 4. 1346 has 4 digits.

//  mostDigits(nums) - Given an array of numbers, returns the number of digits in the largest number in the list

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}
mostDigits([1, 54, 2343, 674, 893331, 447]);
// Math.max() will return the bigger or biggest number. Math.max(22, 53) = 53
// first pass maxDigits = 1
// second pass maxDigits = 2
// third pass maxDigits = 4
// third pass maxDigits = 3
// fourth pass maxdigits = 6
// fifth pass maxdigits = 6
//  final maxDigits value will be returned;

// Radix sort psuedocode
// define a function that accepst list of numbers
// figure out how many digits the largest number has
// Loop from k = 0 up to this largest number  of digits
// For each iteration of the loop:
// Create buckets for each digit (0 to 9)
// place each number in the corresponding bucket based on it's kth digit
// Replace our existing array with values in our buckets starting with 0 and going up to 9
// return list at the end

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums); // should return most digits from parameter
  for (let k = 0; k < maxDigitCount; k++) {
    // should keep going until maxDigitCount
    let digitBuckets = Array.from({ length: 10 }, () => []); // creates 10 empty arrays
    // loops over nums argument
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k); // will get the k digit of nums[i] // 23 will be 3 = num[0], k[0] left to right read then assign it to digit variable
      digitBuckets[digit].push(nums[i]); // get(the full number) at nums[i] based on it's k to it's corresponding bucket in digitBuckets
    } // after putting in it's correct bucket, everything gets pushed back(concat) into the nums array
    nums = [].concat(...digitBuckets); // spread operator allows to pass all arrays(elements) in digitBuckets as individual arguments.
    //[].concat([[1], [2], [3]]) will give [Array(1), Array(1), Array(1)]
    // while [].concat(...[[1], [2], [3]]) will give [1, 2, 3]
    console.log(nums);
  }
  return nums;
}

radixSort([23, 345, 5467, 12, 2345, 9852]); // maxDigitCount will be 4
