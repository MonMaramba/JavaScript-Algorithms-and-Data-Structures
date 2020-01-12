// Sorting Exercise - merge helper

// Given two sorted arrays, write a function called merge which accepts two sorted arrays and returns a new array with both of the values from each array sorted.
// This function should run in O(n+m) time and O(n+m) space and should not modify the parameters passed to it.
// As before, the function should default to sorting numbers in ascending order. If you pass in a comparator function as a third argument, this comparator is what will be used. (Note that the input arrays will always be sorted according to the comparator).
// Also, do not use the built in .sort method! We're going to use this helper to implement a sort, so the helper itself shouldn't depend on a sort.

function merge(arr1, arr2, comparator = null) {
  if (arr1.length === 0 && arr2.length === 0) return [];

  if (typeof comparator !== "function") {
    comparator = function(a, b) {
      return a - b;
    };
  }

  var arr = [];

  var i = 0;

  var j = 0;

  while (i !== arr1.length && j !== arr2.length) {
    let result = comparator(arr1[i], arr2[j]);

    if (result >= 0) {
      arr.push(arr2[j]);

      j += 1;
    } else {
      arr.push(arr1[i]);

      i += 1;
    }
  }

  if (i === arr1.length) {
    while (j !== arr2.length) {
      arr.push(arr2[j]);

      j += 1;
    }
  }

  if (j === arr2.length) {
    while (i !== arr1.length) {
      arr.push(arr1[i]);

      i += 1;
    }
  }

  console.log(arr);

  return arr;
}

function mergeSort(array, comparator) {
  if (typeof comparator !== "function") {
    comparator = function(a, b) {
      return a - b;
    };
  }
  if (array.length <= 1) return array; // base case
  let mid = Math.floor(array.length / 2);
  let left = mergeSort(array.slice(0, mid), comparator);
  let right = mergeSort(array.slice(mid), comparator);
  return merge(left, right, comparator);
}

var arr1 = [1, 3, 4, 5];
var arr2 = [2, 4, 6, 8];
merge(arr1, arr2); //[1,2,3,4,4,5,6,8]
var arr3 = [-2, -1, 0, 4, 5, 6];
var arr4 = [-3, -2, -1, 2, 3, 5, 7, 8];
merge(arr3, arr4); //[-3,-2,-2,-1,-1,0,2,3,4,5,5,6,7,8]
var arr5 = [3, 4, 5];
var arr6 = [1, 2];
merge(arr5, arr6); // [1,2,3,4,5]
var names = ["Bob", "Ethel", "Christine"];
var otherNames = ["M", "Colt", "Allison", "SuperLongNameOMG"];
function stringLengthComparator(str1, str2) {
  return str1.length - str2.length;
}
merge(names, otherNames, stringLengthComparator); //["M", "Bob", "Colt", "Ethel", "Allison", "Christine", "SuperLongNameOMG"]
