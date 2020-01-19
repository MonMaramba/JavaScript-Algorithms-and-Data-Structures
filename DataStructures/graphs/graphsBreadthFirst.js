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
  // lecture version
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
    }
    console.log(result);
    return result;
  }
  breadthFirstSearchRecursive(start) {
    const results = [];
    const visited = {};
    const queue = [start];

    visited[start] = true;

    let helper = () => {
      if (queue.length) {
        let current = queue.shift();
        results.push(current);
        this.adjacencyList[current].forEach(vertex => {
          if (!visited[vertex]) {
            visited[vertex] = true;
            queue.push(vertex);
          }
        });
        helper();
      }
    };
    helper();
    console.log(results);
    return results;
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

g.breadthFirstSearch("A");

var graph = new Graph();

graph.addVertex("S");
graph.addVertex("P");
graph.addVertex("U");
graph.addVertex("X");
graph.addVertex("Q");
graph.addVertex("Y");
graph.addVertex("V");
graph.addVertex("R");
graph.addVertex("W");
graph.addVertex("T");
graph.addEdge("S", "P");
graph.addEdge("S", "U");
graph.addEdge("P", "X");
graph.addEdge("U", "X");

graph.addEdge("P", "Q");
graph.addEdge("V", "V");
graph.addEdge("X", "Q");
graph.addEdge("X", "Y");
graph.addEdge("X", "V");

graph.addEdge("Q", "R");
graph.addEdge("Y", "R");
graph.addEdge("Y", "W");
graph.addEdge("V", "W");

graph.addEdge("R", "T");
graph.addEdge("W", "T");

graph.breadthFirstSearchRecursive("S");
