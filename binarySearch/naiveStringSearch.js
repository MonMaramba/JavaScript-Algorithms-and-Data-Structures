// naiveStringSearch - looking for matching string patterns in a larger string.
// loop over the longer string
// Loop over the shorter string
// If the characters don't match, break out of the inner loop'
// If the characters do match, keep going
// if you complete the inner loop and find a match, increment the count of matches
// Return the count
function stringSearch(stringImp, subString) {
  let count = 0;

  for (i = 0; i < stringImp.length; i++) {
    for (j = 0; j < subString.length; j++) {
      if (subString[j] !== stringImp[i]) break;
      if (j === subString.length - 1) count++;
    }
  }
  return count;
}
