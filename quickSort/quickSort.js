function pivot(arr, start = 0, end = arr.length + 1) {
  function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  var pivot = arr[start];
  var swapIdx = start;

  for (var i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++; //increase swapIdx to keep track of items greater than pivot
      swap(arr, swapIdx, i); // call for swap function
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    //left. starts at left(0) and ends before the pivotIndex
    quickSort(arr, left, pivotIndex - 1);
    //right. starts right after pivot index and ends at the last array item
    quickSort(arr, pivotIndex + 1, right);
  }
  console.log(arr);
  return arr;
}

quickSort([4, 6, 9, 1, 2, 5]);
//pivot([4, 8, 2, 1, 5, 7, 6, 3]);
// should return index of 3 because 4 belongs there
// first run should be [4,2,8,1,5,7,6,3]. swapIdx is 1 before swap. 2 & 8 were swapped.
// next run should be [4,2,1,8,5,7,6,3]. swapIdx is 2(before swap) and 1 & 8 were swapped.
// next run should be [4,2,1,3,5,7,6,8]. swapIdx is 3 then 3 and 8 are swapped.
// finally, 4 is swapped to the correct spot.

/* ES6 version
  function pivot(arr,start = 0, end = arr.length - 1) {
    const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };
    // We are assuming the pivot is always the first element
    let pivot = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i <= end; i++) {
      if (pivot > arr[i]) {
        swapIdx++;
        swap(arr, swapIdx, i);
      }
    }
    // Swap the pivot from the start swapPoint
    swap(arr, start, swapidx);
    return swapIdx;
  }
*/
