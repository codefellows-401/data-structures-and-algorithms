'use strict';

// Classes
class Node {
  constructor (name) {
    this.name = name;
    this.next = null;
  }
}
class Cohort {
  constructor (node) {
    this.head = node;
  }
}

// Create linked list
const codeFellows = new Cohort('js401d27');

// Create linked list nodes
const nodeJB = new Node('JB');
const nodeBen = new Node('Ben');
const nodeRyan = new Node('Ryan');
const nodeGeorge = new Node('George');
const nodeSarah = new Node('Sarah');
const nodeJen = new Node('Jen');
const nodeTim = new Node('Tim');
const nodeDavid = new Node('David');
const nodeEmery = new Node('Emery');
const nodeAllie = new Node('Allie');
const nodeAshton = new Node('Ashton');

