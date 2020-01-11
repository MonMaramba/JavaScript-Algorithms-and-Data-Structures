// Trees are data structures that consists of nodes in a parent-child relationship
// Tree Terminology
// Root - The top node in a Tree
// Child - A node directly connected to another node when moving away from the root
// Parent - The converse notion of a child
// Siblings - A group of nodes with the same parent.
// Leaf - A node with no children
// Edge - The connection between one node and another.
// Example use of a Tree
// HTML DOM
// JSON
// Network Routing
// Abstract Syntax Tree
// Artificial Intelligence
// Folders in an operating systems(structure)

// Binary Trees
// Each node can have a maximum of 2 nodes.

// Binary Search Tree
//  2 children maximum
// Data is sorted in a particular order. (left side is less than parent node, right side children are greater than parent)
// Data can be compared.

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  // Iterative solution
  //   insert(val) {
  //     var newNode = new Node(val);
  //     if (!this.root) {
  //       this.root = newNode;
  //     } else {
  //       var current = this.root;
  //       while (true) {
  //         if (val < current.value) {
  //           if(current.left === null) {
  //               current.left = newNode;
  //           } else {
  //               current = current.left;
  //           }
  //           } else if(val > current.value) {
  //               if(current.right === null) {
  //                   current.right = newNode;
  //               } else {
  //                   current = current.right;
  //               }
  //           }
  //         }
  //       }
  //     }
  // Recursive solution
  insert(value) {
    var newNode = new Node(value);
    if (traverse(this.root)) this.root = newNode;

    function traverse(current) {
      if (current === null) return true;

      if (newNode.value > current.value) {
        if (traverse(current.right)) current.right = newNode;
      } else if (newNode.value < current.value) {
        if (traverse(current.left)) current.left = newNode;
      }
      return false;
    }
    return this;
  }
  find(val) {
    if (!this.root) return false;
    var current = this.root,
      found = false;
    while (current && !found) {
      if (val < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return false;
    return current;
  }
}

// Big O of BST
// Insertion - O(log n)
// Searching - o(log n)
