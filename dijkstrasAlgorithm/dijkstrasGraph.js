function PriorityQueue() {
  this.values = [];
}

PriorityQueue.prototype.insert = function(vertex, data) {
  if (this.values.length === 0) {
    this.values.push({ node: vertex, weight: data });

    return;
  }

  this.values.push({ node: vertex, weight: data });

  var index = this.values.length - 1;

  var parentIndex = Math.floor((index - 1) / 2);

  while (
    index > 0 &&
    this.values[index].weight < this.values[parentIndex].weight
  ) {
    //console.log(this.values);

    [this.values[parentIndex], this.values[index]] = [
      this.values[index],
      this.values[parentIndex]
    ];

    index = parentIndex;

    parentIndex = Math.floor((index - 1) / 2);
  }

  //console.log(this.values);
};

PriorityQueue.prototype.remove = function() {
  if (this.values.length === 0) {
    return undefined;
  }

  var deletedValue = this.values[0];
  var lastIndex = this.values.length - 1;
  this.values[0] = this.values[lastIndex];
  this.values.pop();

  while (1) {
    var index = 0;

    let leftIndex,
      rightIndex,
      leftData,
      rightData,
      swap = null;

    leftIndex = 2 * index + 1;

    rightIndex = 2 * index + 2;

    if (leftIndex < this.values.length) {
      leftData = this.values[leftIndex].weight;

      if (leftData < this.values[index].weight) swap = leftIndex;
    }

    if (rightIndex < this.values.length) {
      rightData = this.values[rightIndex].weight;

      if (
        (swap === null && rightData < this.values[index].weight) ||
        (swap && rightData < leftData)
      ) {
        swap = rightIndex;
      }
    }

    if (swap) {
      [this.values[index], this.values[swap]] = [
        this.values[swap],
        this.values[index]
      ];

      index = swap;
    } else break;
  }

  //console.log("DeletedValue  "+JSON.stringify(deletedValue) + " finalArray  " +JSON.stringify(this.values));

  return deletedValue;
};

function Graph() {
  this.list = {};
}

Graph.prototype.addVertex = function(vertex) {
  if (!this.list[vertex]) {
    this.list[vertex] = [];
  }
};

Graph.prototype.addEdge = function(vertex1, vertex2, data) {
  if (this.list[vertex1] && this.list[vertex2]) {
    this.list[vertex1].push({
      node: vertex2,
      weight: data
    });

    this.list[vertex2].push({
      node: vertex1,
      weight: data
    });
  }
};

Graph.prototype.removeEdge = function(vertex1, vertex2) {
  if (this.list[vertex1] && this.list[vertex2]) {
    this.list[vertex1] = this.list[vertex1].filter(a => a.node !== vertex2);

    this.list[vertex2] = this.list[vertex2].filter(a => a.node !== vertex1);
  }
};

Graph.prototype.removeVertex = function(vertex) {
  if (this.list[vertex]) {
    for (let temp of this.list[vertex]) {
      this.removeEdge(vertex, temp.node);
    }
  }
  delete this.list[vertex];
};

Graph.prototype.depthFirstSearch = function(vertex) {
  var scope = this;
  var finalArray = [];
  var visited = {};

  function helper(vertex) {
    finalArray.push(vertex);

    visited[vertex] = true;

    for (let data of scope.list[vertex]) {
      if (!visited[data.node]) {
        helper(data.node);
      }
    }
  }

  helper(vertex);
  console.log(finalArray);
  return finalArray;
};

Graph.prototype.breadthFirstSearch = function(vertex) {
  var scope = this;
  var result = [];
  var q = [];
  var visited = {};

  q.push(vertex);
  visited[vertex] = true;
  result.push(vertex);

  while (q.length) {
    var pop = q.shift();

    for (let data of scope.list[pop]) {
      if (!visited[data.node]) {
        q.push(data.node);
        visited[data.node] = true;
        result.push(data.node);
      }
    }
  }
  console.log(result);
  return result;
};

Graph.prototype.dijkstra = function(vertex1, vertex2) {
  //build Initital state

  var result = [];
  var priorityQueue = new PriorityQueue();
  var q = priorityQueue.values;
  var distances = {};
  var previous = {};

  for (let key in this.list) {
    if (key == vertex1) {
      distances[key] = 0;

      priorityQueue.insert(key, 0);
    } else {
      distances[key] = Infinity;

      priorityQueue.insert(key, Infinity);
    }

    previous[key] = null;
  }

  //console.log(q);

  while (q.length) {
    var curr = priorityQueue.remove();
    var currentNode = curr.node;

    if (currentNode == vertex2) {
      //found the path
      while (previous[currentNode]) {
        result.push(currentNode);
        currentNode = previous[currentNode];
      }
      result.push(vertex1);
      result.reverse();

      console.log("Result   " + result + "  Distance  " + distances[vertex2]);

      return;
    }

    for (let neighbour of this.list[currentNode]) {
      let neighbourNode = neighbour.node;
      let totalSum = distances[currentNode] + neighbour.weight;

      if (distances[neighbourNode] > totalSum) {
        distances[neighbourNode] = totalSum;
        previous[neighbourNode] = currentNode;
        priorityQueue.insert(neighbourNode, totalSum);
      }
    }
  }
};
