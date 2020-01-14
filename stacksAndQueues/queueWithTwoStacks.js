// Implement enqueue and dequeue operation of a queue using two stacks.

class Queue {
  constructor() {
    this.list = new Stack();
    this.helper = new Stack();
  }
  // enqueue time complexity - O(1), space complexity - O(1)
  enqueue(value) {
    this.list.push(value);

    return this;
  }
  // dequeue time complexity - O(n), space complexity - O(n)
  dequeue() {
    while (this.list.size > 1) {
      this.helper.push(this.list.pop());
    }
    const returnNode = this.list.pop();

    while (this.helper.size > 0) {
      this.list.push(this.helper.pop());
    }
    return returnNode;
  }
}

// DO NOT REWRITE ANY OF THE CODE BELOW - STACK AND NODE HAVE BEEN IMPLEMENTED FOR YOU

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
  push(value) {
    var node = new Node(value);

    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      var tmp = this.first;
      this.first = node;
      this.first.next = tmp;
    }

    return ++this.size;
  }

  pop() {
    if (!this.first) return null;

    var temp = this.first;

    if (this.first == this.last) {
      this.last = null;
    }

    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

var q1 = new Queue();
q1.enqueue(3); // returns the queue
q1.enqueue(4); // returns the queue
q1.enqueue(5); // returns the queue
q1.enqueue(6).enqueue(7); // returns the queue
q1.dequeue(); // 3
q1.dequeue(); // 4
q1.dequeue(); // 5
q1.dequeue(); // 6
q1.dequeue(); // 7
q1.dequeue(); // null
