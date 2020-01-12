// frequency counters often avoids the need for nested loops or O(n^2) operations with arrays/strings
// Write a function called same, which accepts two arrays.
// The function should return true if every value in the array has it's corresponding value squared in the second array.
// The frequency of values must be the same.
// 2 separate loops is better than 2 NESTED loops.
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  // looping through each array to populate the frequency counter objects
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    // check presence of key in the other object
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    // every key must have the same number of occurences in the other object
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

//same([1, 2, 3, 2], [9, 4, 41]);
