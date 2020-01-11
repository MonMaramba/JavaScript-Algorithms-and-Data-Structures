// BubbleSort Pseudocode
// Start looping from the end of the array with a variable called       i toward the beggining
//If arr[j] is greater than arr[j+1], swap those two values
// Return the soreted array

// to swap indexes
function swap(arr, index1, index2) {
  var temp = arr[index1]; // store to temporary variable
  arr[index1] = arr[index2]; // gives index1 the value of index2;
  arr[index2] = temp; // gives the temp value to index2
}

// ES6 swap
const swap2 = (arr, index1, index2) => {
  [arr[index1], arr[index2]] = [arr[index2], arr[index2]];
};

const bubbleSort = array => {
  // So that j always makes 1 less comparison avoiding the useless ones
  for (let i = array.length - 1; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap2(array, j, j + 2);
      }
    }
   
    return array;
  }
};
