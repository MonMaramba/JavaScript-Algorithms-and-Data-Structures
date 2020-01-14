// Priority Queue - a data structure where each element has a priority. Elements with higher priorities are served before elements with lower priorities
// It is an abstract concept with different ways of implementing them. Commonly done with a heap
class Node {
  constructor(val, priority) {
    this.value = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue() {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    let element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  dequeue() {
    const min = this.values[0];
    const last = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = last;
      this.sinkDown();
    }
    return min;
  }
  sinkDown() {
    let idx = 0,
    const length = this.values.length;
    const element = this.values[0];
    while(true){
        let leftChildIdx = 2 * idx + 1;
        let rightChildIdx = 2 * idx + 2;
        let leftChild, rightChild;
        let swap = null;
      if(leftChildIdx < length) {
          leftChild = this.values[leftChildIdx];
          if (leftChild.priority < element.priority) {
           // to keep track of swappable index
              swap = leftChildIdx;
          }
      } 
      if(rightChildIdx < length) {
          rightChild = this.value[rightChildIdx]
          if((swap === null && rightChild.priority < element.priority) ||
              (swap !== null & rightChild.priority < leftChild.priority)
          ) {
              swap = rightChildIdx;
          }
      }
        if(swap === null) break;
        this.values[idx] = this.values[swap];
        this.values[swap] = element;
        // To follow the index and compare to it's children
        idx = swap; 
    }
  }
}
// for a max heap, bigger number is higher priority
let ER = new PriorityQueue();
ER.enqueue("common cold", 1);
ER.enqueue("gunshot wound", 5);
ER.enqueue("high fever", 2);
ER.enqueue("headache", 1);
ER.enqueue("broken leg", 4);
