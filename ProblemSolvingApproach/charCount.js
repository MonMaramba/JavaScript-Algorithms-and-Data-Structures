// Write a function that will count the occurences of alphanumeric characters from a string.

function charCount(str) {
  // create object to return
  let result = {};
  // iterate over input
  for (var char of str) {
    // to check and accept alphanumeric characters only
    if (isAlphaNumeric(char)) {
      // only lowercase characters will be tallied
      char = char.toLowerCase(char);
      // push to object
      result[char] = ++result[char] || 1;
    }
  }
  return result;
}
// helper function
function isAlphaNumeric(char) {
  let code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && code < 91) && // upper alpha (A-Z)
    !(code > 96 && code < 123)
  ) {
    return false;
  }
  return true;
}

// regex test (/[a-z0-9]/.test(char))
