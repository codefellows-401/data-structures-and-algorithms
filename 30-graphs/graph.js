//------------------------------
//* Setup
//------------------------------
'use strict';

// Dependencies
// None

//------------------------------
//* Graph Terms
//------------------------------
/*
  ? VERTEX:                 a node
  ? EDGE:                   connection between nodes
  ? WEIGHTED / UNWEIGHTED:  values assigned to distances between vertices (i.e. the edges carry 'weight') [Google Maps]
  ? DIRECTED / UNDIRECTED:  directions assigned to distances between vertices (a.k.a. polarity)
  ? TREE:                   an undirected graph in which any two verticies are connected by exactly ONE path
  ? ADJACENCY MATRIX:       a two-dimensional structure implemented with nested arrays to store node data in a row/column configuration (e.g. Battleship grid)
  ?                           (1. Takes up more space, 2. Slower ot iterate over all edges, 3. Faster to lookup specific edge)
  ? ADJACENCY LIST:         an array (for vertices with number values) or hashmap (for vertices with string values) to store the edge data associated with a particular vertice (represented by the index position of the array) 
  ?                           (1. Takes less space, 2. Faster to iterate over all edges, 3. Slower to lookup specific edge) <-- MOST COMMON FORMAT
*/

//------------------------------
//* Adjacency Matrix
//------------------------------


//------------------------------
//* Graph Class
//------------------------------
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // Adds a new vertice to the graph
  // Includes basic error handling to prevent overwriting an existing vertex
  addVertex(vertex) {
    if(!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  // Adds a new edge to the graph
  // Includes the ability to add "weight"
  // Brings in both the parent node and the new node to be added (i.e. undirected)
  addEdge(v1, v2) {
    if(!this.adjacencyList[v1] || !this.adjacencyList[v2]) {
      this.adjacencyList[v1].push(v2);
      this.adjacencyList[v2].push(v1);
    }
  }

  // Removes existing graph edges
  removeEdge(v1, v2) {
    if(!this.adjacencyList[v1] || !this.adjacencyList[v2]) {
      this.adjacencyList[v1] = this.adjacencyList[v1].filter(vertex => vertex !== v2);
      this.adjacencyList[v2] = this.adjacencyList[v2].filter(vertex => vertex !== v1);
    }
  }

  // Removes existing graph vertices
  removeVertex(vertex) {
    if(!this.adjacencyList[vertex]) {
      while(this.adjacencyList[vertex].length) {
        let adjacenctVertex = this.adjacencyList[vertex].pop();
        this.removeEdge(vertex, adjacenctVertex);
      }
      delete this.adjacencyList[vertex];
    }
  }

  //* Returns all of the nodes in the graph as a collection
  // getNodes() {
  //   // Depth-first traversal || bread-first traversal
  // }

  //* Returns a collection of nodes connected to the given node
  //* Brings in a given node
  //* Includes the weight from the given node
  // getNeighbors() {

  // }

  //* Returns the total number of nodes in the graph
  // size() {

  // }

}