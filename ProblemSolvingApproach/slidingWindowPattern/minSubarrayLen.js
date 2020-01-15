// minSubArrayLen(arr, num)
// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

// This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn’t one, return 0 instead.

// Time: O(n)
// Space: O(1)

const minSubArrayLen = (arr, num) => {
  let i = 0; // start
  let j = 0; // end
  let sum = 0;
  let ret = Infinity;

  while (i < arr.length) {
    // if current window doesn't add up to the given sum then
    // move the window to right
    if (sum < num && j < arr.length) {
      sum += arr[j];
      j++;
    }
    // if current window adds up to at least the sum given then
    // we can shrink the window
    else if (sum >= num) {
      ret = Math.min(ret, j - i);
      sum -= arr[i];
      i++;
    }
    // current total less than required total but we reach the end, we need this or else we'll be in an infinite loop
    else {
      break;
    }
  }

  return ret === Infinity ? 0 : ret;
};

minSubArrayLen([2, 3, 1, 2, 4, 3], 7); // 2 -> because [4, 3] is the smallest subarray
minSubArrayLen([2, 1, 6, 5, 4], 9); // 2 -> because [5, 4] is the smallest subarray
minSubArrayLen([3, 1, 62, 19], 52); // 1 -> because [62] is greater than 52
