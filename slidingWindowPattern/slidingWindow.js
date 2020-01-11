// Write a function which accepts an array of integers and a number called n.
// The function should calculate the mximum sum of n consecutive elements in
// the array

// maxSubarraySum([100, 200, 300, 400], 2) // 700
// maxSubarraySum([1,4,2,10,23,3,1,0,20], 4) // 39
// maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
// maxSubarraySum([3.-2,7,-4,1,-1,4,-2,1], 2) // 5
// maxSubarraySum([2,3], 3) // null

function maxSubarraySum(arr, num) {
  // add whatever parameters you deem necessary - good luck!
  if (num > arr.length) {
    return null;
  }
  var max = -Infinity;
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

// Time: O(n)O(n)
// Space: O(1)O(1)
const maxSubarraySum = (arr, n) => {
  if (arr.length < n) return null;

  let ret = 0;
  let temp = 0;

  for (let i = 0; i < n; i++) ret += arr[i];

  temp = ret;
  for (let i = n; i < arr.length; i++) {
    temp = temp - arr[i - n] + arr[i];
    ret = Math.max(ret, temp);
  }

  return ret;
};

// minSubArrayLen(arr, num)
// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

// This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn’t one, return 0 instead.

// minSubArrayLen([2, 3, 1, 2, 4, 3], 7); // 2 -> because [4, 3] is the smallest subarray
// minSubArrayLen([2, 1, 6, 5, 4], 9); // 2 -> because [5, 4] is the smallest subarray
// minSubArrayLen([3, 1, 62, 19], 52); // 1 -> because [62] is greater than 52
// Solution

// Time: O(n)O(n)
// Space: O(1)O(1)
const minSubArrayLen = (arr, num) => {
  let i = 0; // start
  let j = 0; // end
  let sum = 0;
  let ret = Infinity;

  while (i < arr.length) {
    if (sum < num && j < arr.length) {
      sum += arr[j];
      j++;
    } else if (sum >= num) {
      ret = Math.min(ret, j - i);
      sum -= arr[i];
      i++;
    } else {
      break;
    }
  }

  return ret === Infinity ? 0 : ret;
};

// findLongestSubstring(str)
// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

// findLongestSubstring(''); // 0
// findLongestSubstring('rithmschool'); // 7
// findLongestSubstring('thecatinthehat'); // 7
// findLongestSubstring('bbbbbb'); // 1
// Solution:

// Time: O(n)O(n)
const findLongestSubstring = str => {
  let ret = 0;
  let seen = {};
  let i = 0;

  for (let j = 0; j < str.length; j++) {
    let char = str[j];
    if (seen[char]) i = Math.max(i, seen[char]);
    ret = Math.max(ret, j - i + 1);
    seen[char] = j + 1;
  }

  return ret;
};

// SOLUTIONS PART 3
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
// minSubArrayLen Solution

function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    // if current window doesn't add up to the given sum then
    // move the window to right
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    }
    // if current window adds up to at least the sum given then
    // we can shrink the window
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}
// findLongestSubstring Solution

function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}
