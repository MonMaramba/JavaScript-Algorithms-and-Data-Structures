// Frequency Counter - constructNote
// Write a function called constructNote, whick accepts two strings, a message and some letters.
// The function should return true if the message can be built with letters that you are given, or it should return false.
// Assume that there are only lowercase and no space or special characters in both the message and the letters.

function constructNote(message, letters) {
  let frequencyCounter1 = {};

  for (let char of letters) {
    frequencyCounter1[char] = ++frequencyCounter1[char] || 1;
  }

  for (let char of message) {
    if (!frequencyCounter1[char]) return false;
    frequencyCounter1[char]--;
  }

  return true;
}
