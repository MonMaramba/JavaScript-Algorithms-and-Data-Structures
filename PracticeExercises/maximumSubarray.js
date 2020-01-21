// The maximum sum subarray problem consists in finding the
// maximum sum of a contiguous subsequence in an array or list of
//integers:

// Easy case is when the list is made up of only positive numbers
// and the maximum sum is the sum of the whole array.
// If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum.
// Note that the empty list or array is also a valid sublist/subarray.

// Brute force solution

var maxSequence = function(arr) {
  // ...
  const arrSum = arr => arr.reduce((a, b) => a + b, 0);
  if (arrSum === 0 || arr.length === 0) {
    return 0;
  }
  var max = 0;
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length + 1; j++) {
      var subArray = arr.slice(i, j);
      var subSum = subArray.reduce(function(subele, sum) {
        return (sum += subele);
      }, 0);
      if (subSum > max) {
        max = subSum;
      }
    }
  }
  return max;
};

var maxSequence = function(arr) {
  let maxSum = 0;
  let currentSum = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    currentSum = Math.max(0, currentSum + arr[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
};

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]); // 6: [4,-1,2,1]
