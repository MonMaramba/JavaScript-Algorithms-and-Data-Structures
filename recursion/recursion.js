//factorial(n)
// Write a function factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it; e.g., factorial four (4!) is equal to 24, because 4 * 3 * 2 * 1 equals 24. factorial zero (0!) is always 1.

// Factorial in an iterative function
function factorialIteration(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= 1;
  }
  return total;
}
// Simple factorial in a recursion function // stand-alone functions
// has to have a base case && different data to recursively call on
function factorialRecursion(num) {
  if (num === 1) return 1; // base case(condition when the recursion ends)
  return num * factorialRecursion(num - 1); // Different piece of data num - 1;
}

//FACTORIAL SOLUTION
function factorialSol(x) {
  if (x < 0) return 0;
  if (x <= 1) return 1;
  return x * factorial(x - 1);
}

// Recursion with helper functions // Helper method recursion
function collectOdds(nums) {
  let result = []; // Will reset every time collectOddValues() is called but since there is a helper function, collectOddValues() is only called once.

  function helper(helperInput) {
    if (helperInput.length === 0) {
      // base case
      return;
    }
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1)); // array is being sliced from front by 1
  }
  helper(arr); // recursive call
  return result;
}

// collectOddValues function in a pure recursive function
function collectOddValuesRecursion(arr) {
  let newArr = []; // will reset everytime collectOddValuesRecursion() is called

  if (arr.length === 0) {
    // base case
    return newArr;
  }
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValuesRecursion(arr.slice(1)));
  // collectOddValuesRecursion([1,2,3,4,5])
  // round 1: newArr = [1] - because 1 is an odd number
  // call stack will look like [1].concat(collectOddValuesRecursion[2,3,4,5]) because of arr.slice(1)
  //round 2: newArr = [] because 2 is not an odd number
  //call stack will look like [].concat(collectOddValuesRecursion[3,4,5])
  // round 3: newArr = [3] because 3 is an odd number
  // call stack will look like [3].concat(collectOddValuesRecursion[4,5])
  // round 4: newArr = [] because 4 is not odd
  // call stack will look like [].concat(collectOddValuesRecursion[5])
  // round 5: newArr = [5] because 5 is odd;
  // call stack will look like [5].concat(collectOddValuesRecursion[])
  // round 6: newArr will be returned as an empty array because it's the base case arr.length === 0
  // newArr [] will contatenate with previous values up the ladder and will return [1,3,5]

  return newArr;
}

// Pure Recursion Tips
// For arrays, use methods like slice, the spread operator, and concat that make copies of arrays you do not mutate them
// Remember that strings are immutable so you will need to use methods like slice, substr, or substring to make copies of strings
// To make copies of objects use Object.assign or the spread operator

// sumRange
function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1); // step ladder of values
}

// Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow() - do not worry about negative bases and exponents.

// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(base, exp) {
  if (exp === 0) {
    return 1;
  } else if (exp % 2 === 0) {
    return power(base, parseInt(exp / 2)) * power(base, parseInt(exp / 2));
  } else {
    return (
      base * power(base, parseInt(exp / 2)) * power(base, parseInt(exp / 2))
    );
  }
}
// Power Solution
function power2(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}

//productOfArray(arr)
//Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60
function productOfArray(arr) {
  if (arr.length === 0) return 1;

  return arr[0] * productOfArray(arr.slice(1));
}

// recursiveRange(num)
// Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function.

const recursiveRange = num => {
  if (num == 0) return 0;
  return num + recursiveRange(num - 1);
};

// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55

function myRecursiveRange(num) {
  if (num === 0) return 0;
  return (num += recursiveRange(num - 1));
}

// fib(num)
// Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(n) {
  // add whatever parameters you deem necessary - good luck!
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}
