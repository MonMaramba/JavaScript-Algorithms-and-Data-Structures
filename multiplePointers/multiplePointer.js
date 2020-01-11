//two pointers moving to the middle
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else left++;
  }
}

function countUniqueValues(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
    // console.log(i, j);
  }
  console.log(i + 1);
  return i + 1;
}

// countUniqueValues([1, 1, 1, 1, 1, 2]);
// countUniqueValues([1, 1, 1, 2, 2, 3, 4, 5, 5, 5, 6, 7]);
// countUniqueValues([25, 26, 28, 28, 28, 29, 30, 30, 341]);

// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.
function averagePair(sortedArr, targetAve) {
  // add whatever parameters you deem necessary - good luck!
  if (sortedArr.length === 0) {
    return false;
  }
  for (let i = 0; i < sortedArr.length; i++) {
    for (let j = sortedArr.length - 1; j >= 0; j--) {
      let ave = (sortedArr[i] + sortedArr[j]) / 2;
      if (ave === targetAve) {
        return true;
      } else if (ave < 0) {
        return false;
      }
    }
  }
}

function averagePair2(sortedArr, targetAve) {
  // add whatever parameters you deem necessary - good luck!
  if (sortedArr.length === 0) {
    return false;
  }
  let i = 0;
  for (let j = sortedArr.length - 1; j >= 0; j--) {
    let ave = (sortedArr[i] + sortedArr[j]) / 2;
    if (ave !== targetAve) {
      i++;
    } else if (ave < 0) {
      return false;
    }
    if (ave === targetAve) {
      return true;
    }
  }
}

// averagePair2([1, 2, 3], 2.5);
// averagePair2([1, 3, 3, 5, 6, 7, 10, 12, 19], 8);
// averagePair2([-1, 0, 3, 4, 5, 6], 4.1);
averagePair2([], 4);

// averagePair(arr, val)
// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

averagePair([1, 2, 3], 2.5); // true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
averagePair([], 4); // false
// Solution:

// Time: O(n)O(n)
// Space: O(1)O(1)
const averagePair = (arr, num) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let average = (arr[left] + arr[right]) / 2;

    if (average === num) return true;
    else if (average < num) left++;
    else right--;
  }

  return false;
};

// SOLUTIONS PART 2
// averagePair Solution
function averagePair(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2;
    if (avg === num) return true;
    else if (avg < num) start++;
    else end--;
  }
  return false;
}
// isSubsequence Solution - Iterative
function isSubsequence(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}
// isSubsequence Solution - Recursive but not O(1) Space
function isSubsequence(str1, str2) {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1));
  return isSubsequence(str1, str2.slice(1));
}
