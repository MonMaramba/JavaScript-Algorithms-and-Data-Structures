// Implement insertionSort. Givan an array, both algorithms will sort the values in the array. The functions take 2 parameters: an array and an optional comparator function. The comparator function is a callback that will take two values from the array to be compared. The function retuns a negative value if the first value is less than the second, a positive value if the first value is greater than the second and 0 if both values are equal. The default comparator you provide should assume that the two parameters are numbers that we are sorting the values from smallest to largest.
// Insertion Sort.
// Start picking the second element in the array(we will assume the first element is the start of the "sorted" portion)
//Now compare the second element with the one before it and swap if necessary.
// Continue to the next element and if it is in the correct order, iterate through the sorted portion to place the element in the correct place.
// Repeat until the array is sorted.
// Return an array of sorted values.
function insertionSortComparator(arr, comparator) {
  if (comparator !== "function") {
    comparator = (a, b) => {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    };
    // if (typeof comparator !== 'function'){
    //     comparator = (a,b) => {return a-b;}
    // }
    const swap = (arr, a, b) => {
      return ([arr[a], arr[b]] = [arr[b], arr[a]]);
    };

    if (arr.length === 0) return arr;
    let startIndex, sortedIndex, result;

    for (startIndex = 1; startIndex < arr.length; startIndex++) {
      for (sortedIndex = 0; sortedIndex < startIndex; sortedIndex++) {
        result = comparator(arr[startIndex], arr[sortedIndex]);
        if (result < 0) swap(arr, startIndex, sortedIndex);
      }
    }
    return arr;
  }
}
