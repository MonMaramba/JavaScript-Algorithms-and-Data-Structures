// Hash Tables - used to store key: value pairs
// Keys are not ordered
// Unlike arrays, hash tables are fast for finding values, adding new values and removing values
// Nearly all programming language has some sort of hash table data structure
// Speed is the reason why it's commonly used
// Hash tables store data in a large array and work by hashing the keys
// A good Hash is
// FAST(i.e. constant time)
// Doesn't cluster outputs at specific indices but distributes uniformly
// Deterministic/consistent(same input yields same output)
// .charCodeAt() outputs utf coding for character at index input
// .charCodeAt() - 96 outputs alphabetical ranking
// "a".charCodeAt(0) -96 // 1 "z".charCodeAt(0) -96 // 26
// Prime numbers in a has is helpful in speading out the keys uniformly
// having an array with a prime length
// Collisions - are conflicts when inevitable
// There are many ways of dealing with collisions. This course focuses on 1. Separate Chaining 2. Linear Probing
//1. Separate Chaining - values are stored in a more sophisticated data structure(array or linked list). Multiple(nested) key/value pairs at the same position
//2. Linear Probing - Looks to the next empty slot in the array
class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  set(key, val) {
    let index = this._hash(key);
    // To check if there is something at the array position. Line does not run if an array is already present and procees to pushing new nested array
    if (!this.keyMap[index]) {
      // Sets an empty array inside array position[index] because these will nest other key:value pairs if necessary
      this.keyMap[index] = [];
    }
    // To push new key value nested in an array at index
    this.keyMap[index].push([key, val]);
  }
  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          // returns only the value[1]
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }
  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        // to iterate through the sub-arrays
        for (let j = 0; j < this.keyMap[i].length; j++) {
          // To check for duplicates
          if (!keysArr.includes(this.keyMap[i][j][1])) {
            keysArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return keysArr;
  }
  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        // to iterate through the sub-arrays
        for (let j = 0; j < this.keyMap[i].length; j++) {
          // To check for duplicates
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valuesArr;
  }
}

let ht = new HashTable(17);
ht.set("maroon", "#800000");
ht.set("yellow", "#FFFF00");
ht.set("olive", "#808000");
ht.set("salmon", "#FA8072");
ht.set("lightcoral", "#F08080");
ht.set("mediumvioletred", "#C71585");
ht.set("plum", "#DDA0DD");
ht.set("pink", "#DDA0DD");
ht.set("purple", "#DDA0DD");

// BIG O of Hash Tables
// Insert: O(1) - constant time - awesome!
// Deletion: 0(1) - constant time
// Access: O(1) - constant time
