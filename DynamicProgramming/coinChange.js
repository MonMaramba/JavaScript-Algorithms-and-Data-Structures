// Coin Change
// Write a function called coinChange which accepts two parameters: an array of denominations and a value.
// The function should return the number of ways you can obtain the value from the given collection of denominations

function coinChange(denominations, amount) {
  // initialize an array with indices up to amount and start each index at 0
  let combinations = [];
  for (let i = 0; i <= amount; i++) {
    combinations[i] = 0;
  }
  // there is only 1 way to return 0 cents
  combinations[0] = 1;
  // Iterating through each of our coin denominations.
  for (let j = 0; j < denominations.length; j++) {
    let coin = denominations[j];

    //if the higher amount is less than or equal to our goal amount
    for (let higherAmount = coin; higherAmount <= amount; higherAmount++) {
      let remainder = higherAmount - coin;

      //then the remainder of the higher amount - the current coin is the index of the array
      combinations[higherAmount] += combinations[remainder];
      console.log(coin, combinations, remainder);
    }
  }
  //get the last value of the array which is the total amount of combinations that can be made with the coins.
  return combinations[amount];
}

const denominations = [1, 5, 10, 25, 50];
