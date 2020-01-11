// Graphs - a collection of nodes that are all treated equally and connected to each other
// used for social networks, location/mapping, routing algorithms, visual hierarchy, file system optimizations.
// Freeform
// Graph terms:
// Vertex - a node
// Edge - connection between nodes
//Weighted/Unweighted - values assigned to distances between vertices
// Directed/ Undirected - directions assigned to distances between vertices
// 2 ways of implementing a graph.
// 1. Adjacency matrix - (a matrix is a 2 dimensional structure implemented with nested arrays).
// Takes up more space(in sparse graphs)
// Slower to iterate over all edges
// Faster to lookup specific edge
// 2. Adjacency List using nested arrays as well. Or a hash table { A: ['B', 'F'], B: ['A', 'C']}
// Can take up less space (in sparse graphs)
// Faster to iterate over all edges
// Can be slower to loopup specific edge
// Most data in the real-world tends to lend itself to sparser and/or larger graphs
class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2) {
    // a directed graph would only push 1 way
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
  }
  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return undefined;
    while (this.adjacencyList[vertex]) {
      // pop() will return item removed from array
      const adjacentVertex = this.adjacencyList[vertex].pop();
      // item removed will now be 2nd argument to removeEdge()
      this.removeEdge(vertex, adjacentVertex);
    }
    // removing the vertex
    delete this.adjacencyList[vertex];
  }
}

let g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addVertex("Los Angeles");
g.addVertex("Hong Kong");
g.addEdge("Dallas", "Tokyo");
g.addEdge("Dallas", "Aspen");
g.addEdge("Hong Kong", "Tokyo");
g.addEdge("Hong Kong", "Dallas");
g.addEdge("Los Angeles", "Hong Kong");
g.addEdge("Los Angeles", "Aspen");
