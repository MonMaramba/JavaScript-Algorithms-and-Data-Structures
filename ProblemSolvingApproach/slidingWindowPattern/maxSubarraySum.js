// Write a function called maxSubarraySum which accepts an array of integers and a number called n.
// The function should calculate the maximum sum of n consecutive elements in the array
// Solution 1 - naive approach - very inefficient
// Time - O(n^2)
// Space - O(1)
function maxSubarraySum(arr, num) {
  // edge case
  if (num > arr.length) {
    return null;
  }
  // to account for negative integers, max is initialized to -infinity
  var max = -Infinity;
  // so that window does not start where it goes over arr.length
  // arr.length - num +1
  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

// Solution 2 (refactor):
// Time: O(n)
// Space: O(1)
const maxSubarraySum = (arr, n) => {
  if (arr.length < n) return null;

  let maxSum = 0;
  let tempSum = 0;
  // iterating and adding up everything within the window(n) and storing it as maxSum
  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }
  // storing the first pass to tempsum
  tempSum = maxSum;
  // looping starts from arr[n]
  for (let i = n; i < arr.length; i++) {
    // temp gets the previous total less the first value plus the next value in the array after n
    tempSum = tempSum - arr[i - n] + arr[i];
    // returns bigger number
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
};
maxSubarraySum([100, 200, 300, 400], 2); // 700
maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4); // 39
maxSubarraySum([-3, 4, 0, -2, 6, -1], 2); // 5
maxSubarraySum([3 - 2, 7, -4, 1, -1, 4, -2, 1], 2); // 5
maxSubarraySum([2, 3], 3); // null

// maxSubArray Solution
function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;
  let total = 0;
  for (let i = 0; i < num; i++) {
    total += arr[i];
  }
  let currentTotal = total;
  for (let i = num; i < arr.length; i++) {
    currentTotal += arr[i] - arr[i - num];
    total = Math.max(total, currentTotal);
  }
  return total;
}
