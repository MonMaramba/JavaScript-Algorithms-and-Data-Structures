// Implement a stack using two queues;
// Implement the following functions:
// push(returns the stack)
// pop (returns the value popped)
// Comment on your time complexity for all operations

class Stack {
  constructor() {
    this.list = new Queue();
    this.helper = new Queue();
  }
  // push() time complexity O(1)
  push(val) {
    while (this.list.size > 0) {
      this.helper.enqueue(this.list.dequeue());
    }
    this.list.enqueue(val);

    while (this.helper.size > 0) {
      this.list.enqueue(this.helper.dequeue());
    }
    return this;
  }
  // pop() time complexity - O(1), space complexity O(1)
  pop() {
    return this.list.dequeue();
  }
}

// QUEUE AND NODE HAVE BEEN IMPLEMENTED FOR YOU

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(data) {
    var node = new Node(data);

    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }

    return ++this.size;
  }

  dequeue() {
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

var s = new Stack();
s.push(10)
  .push(20)
  .push(30);
s.pop(); // 30
s.pop(); // 20
s.pop(); // 10
s.pop(); // null
s.push(30)
  .push(40)
  .push(50);
s.push(60);
s.pop(); // 60
