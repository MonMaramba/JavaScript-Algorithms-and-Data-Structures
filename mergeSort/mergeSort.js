// Merge sort algorithm was created in 1948.
// It's a combination of two things - merging and sorting(and splitting up).
// Exploits the fact that arrays of 0 or 1 element are always sorted.
// Works by decomposing an array into smaller arrays of 0 or 1 elements then building up a newly sorted array. Divide and conquer approach
// Merging Arrays:
// In order to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays.
// given two arrays which are sorted, this helper function shold create a new array which is also sorted and consists of all the elements in the two input arrays.
// const arrayMerger = (Arr1, Arr2) => {
//   let mergedArr = [];
//   var i = 0;
//   var j = 0;
//   let num1 = Arr1[i];
//   let num2 = Arr2[j];
//   while (i < Arr1.length) {
//     if (num2 > num1) {
//       mergedArr.push(num1);
//       console.log(mergedArr, i);
//       i++;
//     }
//     if (num2 < num1) {
//       mergedArr.push(num2);
//       console.log(mergedArr, j);
//       j++;
//     }
//   }

//   return mergedArr;
// };
// arrayMerger([1, 3, 4], [2, 5, 6]);
const merge = (arr1, arr2) => {
  let results = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
};

// mergeSort proper pseudocode
// Break up the array into halves until you have arrays that are empty or have one element
// Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
// once the array has been merged back together, return the merged (and sorted) array

function mergeSort(arr) {
  if (arr.length <= 1) return arr; //base case
  // To break the array into half
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid)); // recursive call to keep splitting until base case (arr.length = 1)
  let right = mergeSort(arr.slice(mid)); // 0 is starting, to last if no 2nd argument

  return merge(left, right);
}
console.log(mergeSort([100, 3, 1, 4, 50, 43, 35, 344]));
