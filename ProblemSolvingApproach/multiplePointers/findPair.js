// Multiple Pointer - findPair
// Given an unsorted array and a number n, find if there exists a pair of elements in the array whose difference is n.
// This function should return true if the pair exists or false if not.

function findPair(arr, n) {
  arr.sort((a, b) => a - b);
  let num = Math.abs(n);
  let i = 0;
  let j = 1;

  while (j < arr.length) {
    let difference = Math.abs(arr[i] - arr[j]);

    if (difference === num) return true;

    if (difference > num && i === j - 1) {
      i++;
      j++;
    }
    if (difference > num) {
      i++;
    } else {
      j++;
    }
  }
  return false;
}

findPair([6, 1, 4, 10, 2, 4], 2); // true
findPair([8, 6, 2, 4, 1, 0, 2, 5, 13], 1); // true
findPair([4, -2, 3, 10], -6); // true
findPair([6, 1, 4, 10, 2, 4], 22); // false
findPair([], 0); // true
findPair([5, 5], 0); // true
findPair([-4, 4], 2); // true
findPair([-4, 4], 8); // true
findPair([1, 3, 4, 6], -2); // true
findPair([0, 1, 3, 4, 6], -2); // true
