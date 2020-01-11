// Given a sorted array and a number, write a function called sortedFrequency that counts the occurences of the number in the array.

//sortedFrequency([1,1,2,2,2,2,3], 2); // 4
//sortedFrequency([1,1,2,2,2,2,3], 3); // 1
//sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1); // 2
//sortedFrequency([1,1,2,2,2,2,3], 4) // -1

function sortedFrequency(array, num) {
  let result = {};
  let left = 0,
    right = array.length - 1;
  let mid = Math.floor(array.length / 2);
  if (array[mid] === num) {
    left = mid - 1;
    right = mid + 1;
    result[num] = (result[num] || 0) + 1;
    while (array[left] === num) {
      left--;
      result[num] = (result[num] || 0) + 1;
    }
    while (array[right] === num) {
      right++;
      result[num] = (result[num] || 0) + 1;
    }
    return result[num];
  } else {
    while (array[left] === num) {
      left++;
      result[num] = (result[num] || 0) + 1;
    }
  }
  while (array[right] === num) {
    right--;
    result[num] = (result[num] || 0) + 1;
  }
  if (!result[num]) return -1;
  else return result[num];
}

sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2);
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3);
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1);
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4);
