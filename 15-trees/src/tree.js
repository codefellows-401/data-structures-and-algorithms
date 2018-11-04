//------------------------------
//* Setup
//------------------------------
// Safety Googles ON
'use strict';

// Dependencies
// n/a

//------------------------------
//* Node Class
//------------------------------
export class Node {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

//------------------------------
//* Binary Search Tree
//------------------------------
export class BST {
  constructor(root=null) {
    this.root = root;
    this.add = BST.add;
    this.inOrder = BST.inOrder;
  }

  // Traversal Methods
  preOrder(node) {
    if(node !== null) {
      console.log(node.value + '');
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }
  inOrder(node) {
    if(node !== null) {
      this.inOrder(node.left);
      console.log(node.value + '');
      this.inOrder(node.right);
    }
  }
  postOrder(node) {
    if (node !== null) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.value + '');
    }
  }

  // Helper Methods
  search(value) {
    let currNode = this.root;
    while(currNode !== value) {
      if(value < currNode.value) {
        currNode = currNode.left;
      } else {
        currNode = currNode.right;
      }
      if (currNode === null) {
        return null;
      }
    }
    return currNode;
  }
  add(value) {
    let newNode = new Node(value, null, null);
    // if BST root is null then set as root
    if(this.root === null) {
      this.root = newNode;
      console.log('Added node:', value);
    }
    // else locate the correct position to add newNode
    else { 
      let currNode = this.root;
      let parentNode = undefined;
      let keepRunning = true;

      while(keepRunning) {
        parentNode = currNode;
        if(value < currNode.value) {
          currNode = currNode.left;
          if(currNode === null) {
            parentNode.left = newNode;
            keepRunning = false;
            console.log('Added node:', value);
            break;
          }
        } 
        else {
          currNode = currNode.right;
          if(currNode === null) {
            parentNode.right = newNode;
            keepRunning = false;
            console.log('Added node:', value);
            break;
          }
        }
      }
    }
  }

  // Stretch Methods
  getMin() {
    let currNode = this.root;
    while(!(currNode.left === null)) {
      currNode = currNode.left;
    }
    return currNode.value;
  }
  getMax() {
    let currNode = this.root;
    while(!(currNode.right === null)) {
      currNode = currNode.right;
    }
    return currNode.value;
  }
}