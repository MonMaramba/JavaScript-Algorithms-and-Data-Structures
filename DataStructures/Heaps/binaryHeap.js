// Heaps are a category of trees
// Very similar to a binary search tree
// In a MaxBinaryHeap, parent nodes are always larger than child nodes. In a MinBinaryHeap, parent nodes are always smaller than child nodes
// A node can only have 2 children
// Root is always the largest number or most value
// Values are not ordered.
// No implied ordering between siblings. No connection at all
// A binary heap is as compact as possible. All the children of each node are as full as can be and left children are filled out first
// For any index of an array n...
// The left child is stored at 2n + 1
// The right child is at 2n + 2

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }
  // helper function to order nodes as nodes can only be inserted from the end
  // if a large value is inserted, the heap needs to be re-ordered
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      // finding the parent is the inverse of the formula above
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  // Removing
  // The standard place for removing in a Binary Heap is the root. This means that in a max heap, the largest number is removed and the smallest is taken from the min heap
  // Down-heap - restoring properties/order after root is removed from the heap
  extractMax() {
    const max = this.values[0];
    const last = this.values.pop();
    this.values[0] = last;
    if (this.values.length > 0) {
      this.sinkDown();
    }
    return max;
  }

  sinkDown() {
    let idx = 0,
      length = this.values.length,
      element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;
      if (leftChildIdx < length) {
        // checks that the leftChildIdx is not outside of the array
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          // to keep track of swappable index
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        // checks that the rightChildIdx is not outside of the array
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null) & (rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      // To follow the index and compare to it's children
      idx = swap;
    }
  }
}

let heap = new MaxBinaryHeap();
// RECAP
// Binary Heaps are very useful data structures for sorting and implementing other data structures like priority queues
// Either a MaxBinaryHeaps or MinBinaryHeaps
// Filled out from left to right
// Heaps can be represented by arrays with a bit of math.
// Big O - Insertion - O(log N) - great!
//         Removal - O(log N) - great!
//         Search - O(N) - meh! Binary Heaps weren't meant for searching
