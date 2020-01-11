//Recursion Problem Set (hard)
// reverse(str)
// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

// reverse('awesome'); // 'emosewa'
// reverse('rithmschool'); // 'loohcsmhtir'
// Solution:
function reverse(str) {
  // add whatever parameters you deem necessary - good luck!
  if (str.length === 0) return "";
  return reverse(str.slice(1)) + str[0];
}

// isPalindrome(str)
// Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.
// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function myIsPalindromeSolution(string) {
  // add whatever parameters you deem necessary - good luck!
  if (string.length === 0) return;
  if (string.charAt(0) === string.charAt(string.length - 1)) {
    isPalindrome(string.slice(1, -1));
    return true;
  } else return false;
}

// someRecursive(arr, callback)
// Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.

// const isOdd = val => val % 2 !== 0;
// someRecursive([1, 2, 3, 4], isOdd); // true
// someRecursive([4, 6, 8, 9], isOdd); // true
// someRecursive([4, 6, 8], isOdd); // false
// someRecursive([4, 6, 8], val => val > 10); // false

function someRecursive(array, callback) {
  // add whatever parameters you deem necessary - good luck!
  if (callback(array[0])) return true;
  if (array.length === 1) return callback(array[0]);
  return someRecursive(array.slice(1), callback);
}

// flatten
// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

// flatten([1, 2, 3, [4, 5]]); // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]); // [1, 2, 3, 4, 5]
// flatten([[1], [2], [3]]); // [1, 2, 3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]); // [1, 2, 3]
// Solution

const flatten = oldArr => {
  let newArr = [];
  for (let i = 0; i < oldArr.length; i++) {
    if (Array.isArray(oldArr[i])) {
      newArr = newArr.concat(flatten(oldArr[i]));
    } else {
      newArr = [...newArr, oldArr[i]];
    }
  }
  return newArr;
};

// alternate flatten solution without iteration
function flatten2([first, ...rest]) {
  if (!first) return [];
  if (Array.isArray(first)) {
    return [...flatten(first), ...flatten(rest)];
  } else {
    return [first, ...flatten(rest)];
  }
}
