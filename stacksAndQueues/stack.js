// Stacks and queues are abstract data structures
// Stacks are not built-in to JavaScript but are easy to implement
// The last element added to a stack will be the first to be removed. LIFO(Last In - First out)
// Uses for stacks are managing function invocation, undo/redo functionality, browsing history
// More than one way of implementing a stack.
// Stack as an array

// var stack = [];
// To add
// stack.push('');
// To remove
// stack.pop()
// or
// stack.unshift to add to the beggining
//stack.shift to remove from beginning
// results in poor big O notation

// Stack as a linked list

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size; // adds one to size and returns
  }
  pop() {
    if (!this.first) return null;
    var temp = this.first;
    // if there is only 1 node, set the last to null because...
    if (this.first === this.last) {
      this.last = null;
    }
    // the first will be updated here
    this.first = this.first.next; // designating next to be first
    this.size--;
    return temp.value;
  }
}
// Big O of Stacks
// Insertion - O(1) constant time
// Removal - O(1)  stacks prioritizes insertion & removal
// Searching - O(N) because we have to move from first to next node
// Access - O(N)
