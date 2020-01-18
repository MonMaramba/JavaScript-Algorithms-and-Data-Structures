// Breadth First Search on graphs
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

  breadthFirstSearch(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;
    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
      return result;
    }
  }
}

let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
