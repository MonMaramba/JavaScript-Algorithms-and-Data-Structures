// BUBBLE SORT COMPARATOR
// Implement a function called bubbleSort. Given an array, bubbleSort will sort the values in the array. The function takes 2 parameters: an array and an optional comparator function.
// The comparator function is a callback that will take two values from the array to be compared. The function returns a negative value if the first value is less than the second, a positive value if the first value is greater than the second and 0 if both values are equal.
// The default comparator you provide should assumre that the two parameters are number that we are sorting the values from smallest to largest.
// Bubble sort is an O(n^2) algorithm.

function bubbleSort(arr, comparator) {
  if (typeof comparator !== "function") {
    comparator = (a, b) => {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    };
  }
  // to keep track if there are no more swaps so we can stop
  let swap;

  for (let i = 0; i < arr.length; i++) {
    swap = false;

    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (comparator(arr[j], arr[j + 1]) > 0) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swap = true;
      }
    }

    if (!swap) break;
  }

  return arr;
}
