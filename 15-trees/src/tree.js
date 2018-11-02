//------------------------------
//* Setup
//------------------------------
// Safety Googles ON
'use strict';

// Dependencies
// n/a

//------------------------------
//* Classes
//------------------------------
export class Node {
  constructor(value, left=null, right=null, parent=null) {
    this.value = value;
    this.left = left;
    this.right = right;
    this.parent = parent;
  }
}

export class BinaryTree {
  constructor(root=null) {
    this.root = root;
  }

  // Root -> Left -> Right
  preOrder(node) {
    //code
    if(!node) return; 
    console.log(node.value);
    this.logNode(node.left);
    this.logNode(node.right);

    return []; // array of node in pre-order
  }

  // Left -> Root -> Right
  inOrder(node) {
    //code
  }

  // Left -> Right -> Root
  postOrder(node) {
    //code
  }

  // Add a vlaue (visualgo.net)
  add(node) {
    //code
  }

  // Search for value (visaulgo.net)
  search(node) {
    //code
  }
}