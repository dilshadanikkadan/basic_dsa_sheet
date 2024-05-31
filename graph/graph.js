

class Graph {
  constructor() {
    this.adjecencyList = {};
  }

  dfsRecursive(startVertex, visited = {}) {
    console.log(startVertex);
    visited[startVertex] = true;

    const neighbors = this.adjecencyList[startVertex];
    for (const neighbor of neighbors) {
      if (!visited[neighbor]) {
        this.dfsRecursive(neighbor, visited);
      }
    }
  }
  dfs(startVertex) {
    const visited = {};
    this.dfsRecursive(startVertex, visited);
  }
  addVertex(vertex) {
    if (!this.adjecencyList[vertex]) {
      this.adjecencyList[vertex] = new Set();
    }
  }

  hasEdge(vertex1, vertex2) {
    return (
      this.adjecencyList[vertex1].has(vertex2) &&
      this.adjecencyList[vertex2].has(vertex1)
    );
  }

  removEdge(vertex1, vertex2) {
    this.adjecencyList[vertex1].delete(vertex2);
    this.adjecencyList[vertex2].delete(vertex1);
  }
  removVertex(vertex) {
    for (const adjecentVertix of this.adjecencyList[vertex]) {
      this.removEdge(vertex, adjecentVertix);
    }
    delete this.adjecencyList[vertex];
  }
  addEdge(vertex1, vertex2) {
    if (!this.adjecencyList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjecencyList[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adjecencyList[vertex1].add(vertex2);
    this.adjecencyList[vertex2].add(vertex1);
  }

  display() {
    for (const vertex in this.adjecencyList) {
      console.log(vertex + " - > " + [...this.adjecencyList[vertex]]);
      //   console.log(vertex );
    }
  }
  bfs(startVertex) {
    let queue = [];
    let visited = new Array(Object.keys(this.adjecencyList).length).fill(false);
    queue.push(startVertex);
    visited[startVertex] = true;
    while (queue.length > 0) {
      let currentNode = queue.shift();
      console.log(currentNode);
      for (const neighbor of this.adjecencyList[currentNode]) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      }
    }
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.display();
graph.bfs("A");
