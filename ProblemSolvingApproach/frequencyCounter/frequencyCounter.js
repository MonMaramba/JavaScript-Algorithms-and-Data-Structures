//for string and numbers
function validAnagram(str1, str2) {
  // add whatever parameters you deem necessary - good luck!
  if (str1.length !== str2.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    //if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  console.log(lookup);

  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    //can't find letter or letter is zero, then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      // if it is there, minus 1 to val. 0 will return false
      lookup[letter] -= 1;
    }
  }
  return true;
}

//console.log(validAnagram("anagrams", "nagaram"));

// for arrays or objects
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

//same([1, 2, 3, 2], [9, 4, 41]);

// Challenge
// Write a funciton called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

function sameFrequency(int1, int2) {
  // good luck. Add any arguments you deem necessary.
  const stringInt1 = int1.toString();
  const stringInt2 = int2.toString();
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of stringInt1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of stringInt2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

// Implement a function called , areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.
// Examples: areThereDuplicates(1,2,3) //false
//           areThereDuplicates(1,2,2) //true

function areThereDuplicates() {
  // good luck. (supply any arguments you deem necessary.)
}

// SOLUTIONS PART 1
// sameFrequency Solution
function sameFrequency(num1, num2) {
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if (strNum1.length !== strNum2.length) return false;

  let countNum1 = {};
  let countNum2 = {};

  for (let i = 0; i < strNum1.length; i++) {
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1;
  }

  for (let j = 0; j < strNum1.length; j++) {
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1;
  }

  for (let key in countNum1) {
    if (countNum1[key] !== countNum2[key]) return false;
  }

  return true;
}

//areThereDuplicates Solution (Frequency Counter)
function areThereDuplicates(arguments) {
  let collection = {};
  for (let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
  }
  for (let key in collection) {
    if (collection[key] > 1) return true;
  }
  return false;
}
// areThereDuplicates Solution (Multiple Pointers)
function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a, b) => a > b);
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}
// areThereDuplicates One Liner Solution
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}
