const insertionSort = arr => {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (var j = i - 1; j > -1 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j]; // puts value to the right
    }
    arr[j + 1] = currentVal; // moves value to the left in proper place
    console.log(arr);
  }
  return arr;
};

insertionSort([2, 1, 56, 4, 3]);
