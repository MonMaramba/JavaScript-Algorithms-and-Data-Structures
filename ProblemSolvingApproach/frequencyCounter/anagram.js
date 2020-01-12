// Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is  a word, phrase, or name formed by reaarranging the letters of another.

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    //if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

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
  // When everything is run and hasn't returned false then
  return true;
}

validAnagram("", ""); // true
validAnagram("aaz", "zza"); // false
validAnagram("anagram", "nagaram"); // true
validAnagram("rat", "car"); // false
validAnagram("awesome", "awesom"); // false
validAnagram("qwerty", "qeywrt"); // true
validAnagram("texttwisttime", "timetwisttext"); // true
