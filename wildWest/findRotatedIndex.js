// Write a function called findRotatedIndex which accepts a rotated array of sorted numbers and an integer. The function should return the index of the integer in the array. If the value is not found, return -1.
// Constraints:
// Time Complexity - O(log n)
// Space Complexity - O(1)

function findRotatedIndex(array, num) {
  let left = 0;
  let right = array.length - 1;
  let mid = Math.floor((left + right) / 2);

  while (array[left] < num && array[mid] > num) {
    left++;
    mid--;
  }
  while (array[left] > num && array[right] > num) {
    right--;
    mid++;
  }
  while (array[left] < num && array[mid] < num) {
    mid++;
    right--;
  }

  if (array[mid] === num) return mid;
  if (array[left] === num) return left;
  if (array[right] === num) return right;
  else return -1;
}
