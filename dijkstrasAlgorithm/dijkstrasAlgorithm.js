// One of the most famous and widely used algorithms
// Finds the shortest path between two vertices on a graph
// Used for GPS, biology, airline booking, traffic routing, etc

// Dijkstra's Pseudocode
// This function should accept a starting and ending vertex
// Create an object(distances) and set each key to be every vertexin the adjacency list with a value of infinity, except for the starting vertex which should have a value of 0.
// After setting a value in the distances object, add each vertex with a priority of 0 because that's where we begin.
// Create another object called previous and set each key to be every vertex in the adjacency list wih a value of null.
// Start looping as long as there is anything in the priority queue
//      dequeue a vertex from the priority queue
//      if that vertex is the same as the ending vertex - we are done!
//      Otherwise, loop through each value in the adjacency list at that vertex
//        Calculate the distance to that vertex from the starting vertex
//        If the distance is less than what is currently stored in our distances object
//            Update the distances object with new lower distance
//            Update the previous object to contain that vertex
//            enqueue the vertex with the total distance from the start node
class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    // adds an empty array as the key's value
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2, weight) {
    // edge should look like A: Array [0: {node:"B", weight: 9}]
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }
  Dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    // tracks distances between vertices and starting vertex
    const distances = {};
    // quickest path to vertices
    const previous = {};
    let path = []; // to return at end
    let smallest;

    // build up initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }
    // as long as there is something to visit
    while (nodes.values.length) {
      smallest = nodes.dequeue().val;
      // base case, we are done
      if (smallest === finish) {
        // build up path to finish vertex and return that object
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      //building up path to return at the end
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          // to find neighboring node
          let nextNode = this.adjacencyList[smallest][neighbor];
          // calculate new distance to neighboring node
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            // to update new smallest distance to neighbor
            distances[nextNeighbor] = candidate;
            // to update previous - How we got to neighbor
            previous[nextNeighbor] = smallest;
            // enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    console.log(path.concat(smallest).reverse());
    return path.concat(smallest).reverse();
  }
}

var graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

graph.Dijkstra("A", "E"); //
