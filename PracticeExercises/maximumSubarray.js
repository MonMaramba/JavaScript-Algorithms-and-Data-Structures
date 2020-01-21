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
  var maxSum = 0;
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length + 1; j++) {
      var subArray = arr.slice(i, j);
      var subSum = subArray.reduce(function(subEl, sum) {
        return (sum += subEl);
      }, 0);
      if (subSum > maxSum) {
        maxSum = subSum;
      }
    }
  }
  return maxSum;
};

// Best solution found...  something that I understand anyways :)
var maxSequenceBestAnswer = function(arr) {
  var max = 0;
  var cur = 0;
  arr.forEach(function(i) {
    cur = Math.max(0, cur + i);
    max = Math.max(max, cur);
  });
  return max;
};

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]); // 6: [4,-1,2,1]
