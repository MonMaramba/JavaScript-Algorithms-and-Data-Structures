// Implement a function called pivot.
// The pivot function is responsible for tanking an array,    setting the pivot value
// and mutating the array so that all values less than the pivot wind up to the left of it and all greater values to the right.
// Return the pivot value.

function pivot(arr, comparator, start = 0, end = arr.length - 1) {
  if (typeof comparator !== "function") {
    comparator = function(a, b) {
      return a - b;
    };
  }
  const swap = (array, a, b) => {
    [array[a], array[b]] = [array[b], array[a]];
  };
  var pivotIdx = start;
  var swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    let result = comparator(arr[pivotIdx], arr[i]);
    if (result > 0) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, swapIdx, pivotIdx);
  console.log(swapIdx);
  return swapIdx;
}

// Quick sort with comparator proper
// Pick an element in the array and designate it as the "pivot". To make this simple, choose the first element.
// Compare the pivot to every element in the array and move lesser values to the left of the pivot
// higher values will be moved to the right.
// After the initial comparisons, the pivot will be in it's proper place.
// Recursively call pivot agan with the left and right halves from the pivot until the array is sorted.

function quickSort(arr, comparator, left = 0, right = arr.length - 1) {
  if (left < right) {
    // To get the pivot index each recursive call
    let pivotIndex = pivot(arr, comparator, left, right);
    // left side recursion until only 1 element is left
    quickSort(arr, comparator, left, pivotIndex - 1);
    // right side recursion until only 1 element is left
    quickSort(arr, comparator, pivotIndex + 1, right);
  }
  return arr;
}
