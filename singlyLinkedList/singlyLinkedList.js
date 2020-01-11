class Node {
  constructor(val) {
    this.val = val;
    this.next = null; // because in the beginning there's nothing that comes after it
  }
}
// instead of doing the next 4 lines
// var first = new Node('Hi');
// first.next = new Node("there");
// first.next.next = new Node("stranger");
// first.next.next.next = new Node("dude!");

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val); // Creates the new Node
    if (!this.head) {
      // if there is no head
      this.head = newNode; // newNode will become the new head
      this.tail = this.head; // head and tail are the same thing
    } else {
      this.tail.next = newNode; //sets the .next in the current tail to be the newNode
      this.tail = newNode; // moves the tail marker one spot over
    }
    this.length++;
    return this; // returns the whole list
  }
  // POPPING psuedocode
  // If there are no nodes in the list, return undefined
  // Loop through the list until you reach the tail
  // Set the next property of the 2nd to the last node to be null
  // Set the tail to be the 2nd to the last node
  // Decrement the length of the list by 1
  // Return the vaulue of the node removed
  pop() {
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current; // both start at the very beginning
    while (current.next) {
      // While there is a next because tails don't have next or is null
      newTail = current; // newTail always lags 1 behind
      current = current.next; // moves current forward 1 node.
    }
    this.tail = newTail;
    this.tail.next = null; // Severs the connection to the last node so it points to nothing
    this.length--;
    if (this.length === 0) {
      // fix edge case of empty list(when last one is popped off)
      this.head = null;
      this.tail = null;
    }

    return current;
  }
  shift() {
    if (!this.head) return undefined;
    var currHead = this.head;
    this.head = currHead.next; // Setting the head to the next node
    this.length--;
    if (this.length === 0) {
      // to fix edge case for when there's only 1 node remaining
      this.tail = null;
    }
    return currHead;
  }
  // Unshift add new node before the original head
  unshift(val) {
    var newNode = new Node(val); // Creates the new Node
    if (!this.head) {
      // if there is no head
      this.head = newNode; // newNode will become the new head
      this.tail = this.head; // head and tail are the same thing
    } else {
      // only runs if there's at least 1 thing in list
      newNode.next = this.head; // assigns the previous head as the new head's next
      this.head = newNode; // sets newNode as the head or moves the head designation as the newNode
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    var counter = 0;
    var current = this.head; // starts at 0
    while (counter !== index) {
      current = current.next; // moves current marker to next node
      counter++;
    }
    return current;
  }
  set(index, val) {
    var indexNode = this.get(index); // using get to find index node
    if (indexNode) {
      indexNode.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val); // Double bang operator coerces return to boolean true
    if (index === 0) return !!this.unshift(val);

    var newNode = new Node(val); // Creates new node
    var prev = this.get(index - 1); // Finds previous node
    var temp = prev.next; //assigns the index node to a temporary variable because directly pointing to it deletes the previous next node
    prev.next = newNode; // connects previous node to newNode
    newNode.next = temp; // connects newNode to original next node
    this.length++;
    return true;
  }
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
  reverse() {
    var node = this.head; // assigning the head to a temp variable so it's not lost when the next line runs
    this.head = this.tail; //exchanges head with the tail
    this.tail = node; // establishing the tail with the value of the original head
    var prev = null; // to make sure the initial tail.next will be null
    var next;
    for (var i = 0; i < this.length; i++) {
      next = node.next; // The node after head initially
      node.next = prev; // assigning the value of the 2nd node to be the previous
      prev = node; // moving the node marker to the following node
      node = next; // moving on to the 3rd node and assigning it as the node variable
    }
    return this;
  }
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
