// DYNAMIC PROGRAMMING - A method for solving a complex problem by breaking it down into a collection of simpler subproblems,
//solving each of those subproblems just once and storing their solutions.
// Will only work on problems with OPTIMAL SUBSTRUCTURE & OVERLAPPING SUBPROBLEMS
// Fibonacci recursion

function fibonacciRecursion(n) {
  if (n <= 2) return 1;
  return fibonacciRecursion(n - 1) + fibonacciRecursion(n - 2);
}
// Big O of O(2^n) - worse than quadratic big O.
// Repetitive computations for fibonacciRecursion slowed the algorithm down
// MEMOIZATION - process for commiting results to memory helping avoid repetitive computations
// optimized version can assign begining values

function fibMemoized(n, memo = [undefined, 1, 1]) {
  if (memo[n] !== undefined) return memo[n];
  var res = fibMemoized(n - 1, memo) + fibMemoized(n - 2, memo);
  memo[n] = res;
  return res;
}
// Big O complexity of fibMemoized is O(n).

// TABULATION is another way of solving problems working instead from the bottom going up.
// The results of a previous result in a 'table'(usually an array)
// Usually done using iteration.
// Better space complexity can be achieved using tabulation

function fibonacciTabulation(n) {
  if (n <= 2) return 1;
  var fibNums = [0, 1, 1];
  for (var i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
}
