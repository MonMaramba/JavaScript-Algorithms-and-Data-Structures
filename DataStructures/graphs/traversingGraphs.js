// GRAPH TRAVERSAL
// There are no specified starting point/root node
// Real-world uses for graph traversal
// Peer to peer networking
// Web crawlers
// Finding 'closest' matches/recommendations
// Shortest path problems(GPS navigation, solving mazes)
// RECURSIVE
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
  dfsRecursive(vertexStart) {
    const result = [];
    const visitedVertex = {};
    // because context of this is changed when invoking
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      if (!vertex) return null;
      visitedVertex[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach(neighbor => {
        if (!visitedVertex[neighbor]) return dfs(neighbor);
      });
    })(vertexStart);
    return result;
  }
  dfsIterative(start) {
    const S = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;
    while (S.length) {
      currentVertex = S.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          S.push(neighbor);
        }
      });
    }
    return result;
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
g.dfsRecursive("A");
