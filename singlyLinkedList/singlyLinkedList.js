class Node {
  constructor(val) {
    this.val = val;
    this.next = null; // because in the beginning there's nothing that comes after it
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // push
  // This function should take in a value and add a node to the end of the SinglyLinkedList.
  // It should return the SinglyLinkedList.
  push(val) {
    // Create the new Node
    var newNode = new Node(val);
    // if there is no head
    if (!this.head) {
      // newNode will become the new head
      this.head = newNode;
      // head and tail are the same thing
      this.tail = this.head;
    } else {
      //sets the .next in the current
      this.tail.next = newNode;
      // moves the tail marker one spot over
      this.tail = newNode;
    }
    this.length++;
    // returns the whole list
    return this;
  }
  // pop
  // This function should remove a node at the end of the SinglyLinkedList.
  // It should return the node removed.
  pop() {
    // If there are no nodes in the list, return undefined
    if (!this.head) return undefined;
    // Two pointers that both start at the head
    var current = this.head;
    var newTail = current;
    // While there is a next because tails don't have next or is null
    while (current.next) {
      // newTail always lags 1 behind
      newTail = current;
      // moves current forward 1 node.
      current = current.next;
    }
    this.tail = newTail;
    // Severs the connection to the last node so it points to nothing
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      // fix edge case of empty list(when last one is popped off)
      this.head = null;
      this.tail = null;
    }

    return current;
  }
  // shift
  // This function should remove a node from the beginning of the SinglyLinkedList.
  // It should return the node removed.
  shift() {
    if (!this.head) return undefined;
    var currentHead = this.head;
    // Setting the head to the next node
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      // to fix edge case for when there's only 1 node remaining
      this.tail = null;
    }
    return currentHead;
  }
  // unshift
  // This function should add a new node to the beginning of the SinglyLinkedList.
  // It should return the SinglyLinkedList.
  unshift(val) {
    var newNode = new Node(val);
    // if there is no head
    if (!this.head) {
      // newNode will become the new head
      this.head = newNode;
      // head and tail are the same thing
      this.tail = this.head;
      // will run if there's at least 1 thing in list
    } else {
      // assigns the previous head as the new head's next
      newNode.next = this.head;
      // sets newNode as the head or moves the head designation as the newNode
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  // get
  // This function should find a node at a specified index in a SinglyLinkedList.
  // It should return the found node.
  get(index) {
    if (index < 0 || index >= this.length) return null;
    var counter = 0;
    // starts at 0
    var current = this.head;
    while (counter !== index) {
      // moves current marker to next node
      current = current.next;
      counter++;
    }
    return current;
  }
  // set
  // This function should accept an index and a value and update the value
  // of the node in the SinglyLinkedList at the index with the new value.
  // It should return true if the node is updated successfully,
  // or false if an invalid index is passed in.
  set(index, val) {
    // using get to find index node
    var indexNode = this.get(index);
    if (indexNode) {
      indexNode.val = val;
      return true;
    }
    return false;
  }
  // insert
  // This should insert a node at a specified index in a SinglyLinkedList.
  // It should return true if the index is valid, and false if the index is
  // invalid (less than 0 or greater than the length of the list).
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    // Double bang operator coerces return to boolean true
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    var newNode = new Node(val);
    // Finds previous node
    var prev = this.get(index - 1);
    //assigns the index node to a temporary variable because // directly pointing to it deletes the previous next node
    var temp = prev.next;
    // connects previous node to newNode
    prev.next = newNode;
    // connects newNode to original next node
    newNode.next = temp;
    this.length++;
    return true;
  }
  // remove
  // This function should remove a node at a specified index in a SinglyLinkedList.
  // It should return the removed node, if the index is valid,
  // or undefined if the index is invalid.
  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();

    const prevNode = this.get(index - 1);
    if (!prevNode) return undefined;
    const removedNode = prevNode.next;

    prevNode.next = removedNode.next;
    this.length--;

    return removedNode;
  }
  // reverse
  // This function should reverse the SinglyLinkedList in place.

  reverse() {
    // assigning the head to a temp variable so it's not lost when the next line runs
    var node = this.head;
    //exchanges head with the tail
    this.head = this.tail;
    // establishing the tail with the value of the original head
    this.tail = node;
    // to make sure the initial tail.next will be null
    var prev = null;
    var next;
    for (var i = 0; i < this.length; i++) {
      // The node after head initially
      next = node.next;
      // assigning the value of the 2nd node to be the previous
      node.next = prev;
      // moving the node marker to the following node
      prev = node;
      // moving on to the 3rd node and assigning it as the node variable
      node = next;
    }
    return this;
  }
  // rotate
  // This function should rotate all the nodes in the list by some number passed in.
  // For instance, if your list looks like 1 -> 2 -> 3 -> 4 -> 5 and you rotate by 2,
  // the list should be modified to 3 -> 4 -> 5 -> 1 -> 2.
  // The number passed in to rotate can be any integer (should work with negative indexes).
  // Time Complexity: O(N), where N is the length of the list.
  // Space Complexity: O(1)
  rotate(number) {
    const index = number < 0 ? number + this.length : number;

    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this;

    const prevNode = this.get(index - 1);

    if (!prevNode) return undefined;

    this.tail.next = this.head;
    this.head = prevNode.next;
    this.tail = prevNode;
    prevNode.next = null;

    return this;
  }
}

// var list = new SinglyLinkedList;
// list.push('Hi');
// list.push('there');
// list.push('padawan')
// list.push('!')

var newList = new SinglyLinkedList();
newList.push(100);
newList.push(201);
newList.push(250);
newList.push(350);
newList.push(999);
