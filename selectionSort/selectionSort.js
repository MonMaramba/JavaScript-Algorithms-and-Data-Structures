const selectionSort = array => {
  for (let i = 0; i < array.length; i++) {
    var lowest = i;
    for (var j = i + 1; j < array.length; j++) {
      if (array[j] < array[lowest]) {
        lowest = j;
      }
      if (i !== lowest) {
        var temp = array[i];
        array[i] = array[lowest];
        array[lowest] = temp;
      }
    }
  }
  return array;
};

// ES6 version

const selectionSort2 = arr => {
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(arr, i, lowest);
  }
  return arr;
};

console.log(selectionSort2([34, 22, 10, 19, 17]));
