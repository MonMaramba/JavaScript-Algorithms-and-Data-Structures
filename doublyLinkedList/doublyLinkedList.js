class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode; // old tail.next is newNode
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    var currentTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = currentTail.prev;
      this.tail.next = null;
      currentTail.prev = null;
    }
    this.length--;
    return currentTail;
  }
  shift() {
    if (this.length === 0) return undefined;
    var oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // so that this executes only if this.length > 1
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }
  unshift(val) {
    var newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    var mid = Math.floor(this.length / 2);
    if (index <= mid) {
      var counter = 0;
      var current = this.head;
      while (counter !== index) {
        current = current.next;
        counter++;
      }
    } else {
      counter = this.length - 1;
      current = this.tail;
      while (counter !== index) {
        current = current.prev;
        counter--;
      }
    }
    return current;
  }
  set(val, index) {
    var item = this.get(index);
    if (item) {
      item.val = val;
      return true;
    } else return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length - 1) return !!this.push(val);

    var newNode = new Node(val);
    var prevNode = this.get(index - 1);
    var afterNode = this.prevNode.next;

    prevNode.next = newNode;
    newNode.next = afterNode;
    newNode.prev = prevNode;
    afterNode.prev = newNode;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    var item = this.get(index);
    var prevNode = item.prev;
    var afterNode = item.next;
    prevNode.next = afterNode;
    afterNode.prev = prevNode;
    item.prev = null;
    item.next = null;
    this.length--;
    return item;
  }
  reverse() {
    let currentNode = this.head;
    const tail = this.tail;

    while (currentNode) {
      [currentNode.next, currentNode.prev] = [
        currentNode.prev,
        currentNode.next
      ];
      currentNode = currentNode.prev;
    }

    this.tail = this.head;
    this.head = tail;

    return this;
  }
}

var list = new DoublyLinkedList();
list.push(4);
