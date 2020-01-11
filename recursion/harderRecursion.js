// CapitalizeFirst
// Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

// capitalizeFirst(['car', 'taco', 'banana']); // ['Car', 'Taco', 'Banana']

function capitalizeFirst(arr) {
  return arr.length > 0
    ? [
        arr[0].charAt(0).toUpperCase() + arr[0].slice(1),
        ...capitalizeFirst(arr.slice(1))
      ]
    : [];
}

function capitalizeFirstSol2(arr) {
  let newArr = [];
  if (arr.length === 0) return newArr;
  newArr.push(arr[0][0].toUpperCase() + arr[0].substr(1));

  return newArr.concat(capitalizeFirst(arr.splice(1)));
}

//console.log(capitalizeFirstSol2(["car", "taco", "banana"]));
let arr = ["car", "taco", "banana"];
console.log(arr[1][3]); // wow!!

// capitalizeWords
// Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.
// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

function myCapitalizeWords(arr) {
  // add whatever parameters you deem necessary - good luck!

  let newArr = [];
  if (arr.length === 0) return newArr;
  newArr.push(arr[0].toUpperCase());
  return newArr.concat(capitalizeWords(arr.slice(1)));
}

// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

// nestedEvenSum
// Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.
function nestedEvenSum(obj) {
  // add whatever parameters you deem necessary - good luck!
  let sum = 0;
  let keys = Object.keys(obj);

  keys.forEach(k => {
    if (typeof obj[k] === "number" && obj[k] % 2 === 0) {
      sum += obj[k];
    }
    if (typeof obj[k] === "object") {
      return (sum += nestedEvenSum(obj[k]));
    }
  });

  return sum;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" }
};

nestedEvenSum(obj1); // 6
nestedEvenSum(obj2); // 10

// stringifyNumbers
// Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this!

/*
let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
/*

stringifyNumbers(obj)

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/

const stringifyNumbers = obj => {
  if (!obj || !Object.values(obj).length) return obj;
  const newObj = {};
  for (let [key, val] of Object.entries(obj)) {
    newObj[key] = // pushing into new obj
      typeof val === "object" // if value is an object
        ? stringifyNumbers(val)
        : typeof val === "number"
        ? val + "" // converts into string! or String(val) works with all
        : val;
  }
  return newObj;
};

// collectStrings
// Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string
const collectStrings = obj => {
  let result = [];
  for (let [key, val] of Object.entries(obj)) {
    if (typeof obj[key] === "string") {
      result = [...result, obj[key]];
    } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      result = [...result, ...collectStrings(obj[key])];
    }
  }

  return result;
};

//collectStrings Solution: Helper Method Recursion Version

function collectStrings(obj) {
  var stringsArr = [];

  function gatherStrings(o) {
    for (var key in o) {
      if (typeof o[key] === "string") {
        stringsArr.push(o[key]);
      } else if (typeof o[key] === "object") {
        return gatherStrings(o[key]);
      }
    }
  }

  gatherStrings(obj);

  return stringsArr;
}
// collectStrings Solution: Pure Recursion Version

function collectStrings(obj) {
  var stringsArr = [];
  for (var key in obj) {
    if (typeof obj[key] === "string") {
      stringsArr.push(obj[key]);
    } else if (typeof obj[key] === "object") {
      stringsArr = stringsArr.concat(collectStrings(obj[key]));
    }
  }

  return stringsArr;
}
