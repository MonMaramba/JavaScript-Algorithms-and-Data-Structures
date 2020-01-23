// Write a function that will find all the anagrams of a word from a list.
// You will be given two inputs a word and an array with words.
// You should return an array of all the anagrams or an empty array if there are none.

function anagrams(word, words) {
  var result = [];
  var test = word
    .split("")
    .sort()
    .join("");

  for (var i = 0; i < words.length; i++) {
    if (
      words[i]
        .split("")
        .sort()
        .join("") == test
    ) {
      result.push(words[i]);
    }
  }
  return result;
}

// Best solution found

function anagrams(word, words) {
  return words.filter(function(arrayWord) {
    return (
      arrayWord
        .split("")
        .sort()
        .join("") ===
      word
        .split("")
        .sort()
        .join("")
    );
  });
}

anagrams("abba", ["aabb", "abcd", "bbaa", "dada"]); //['aabb', 'bbaa']

anagrams("racer", ["crazer", "carer", "racar", "caers", "racer"]); // ['carer', 'racer']

anagrams("laser", ["lazing", "lazy", "lacer"]); // []
