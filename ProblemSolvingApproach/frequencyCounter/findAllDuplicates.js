// Frequency Counter - findDuplicates
// Given an array of positive integers, some elements appear twice and other once.
// Find all the elements that appear twice in this array
// Elements can be returned in any order

function findAllDuplicates(arr) {
  let freqCounter = {};
  let result = [];
  for (let val in arr) {
    freqCounter[arr[val]] = (freqCounter[arr[val]] || 0) + 1;
  }
  for (let el in freqCounter) {
    if (freqCounter[arr[el]] > 1) {
      result.push(arr[el]);
    }
  }
  return result;
}
