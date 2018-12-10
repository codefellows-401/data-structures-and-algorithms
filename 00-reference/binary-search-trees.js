// Node Class
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Binary Search Tree Class
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  
  // Insert Node
  insert(value) {
    let newNode = new Node(value);
    if(this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while(current) {
        if(value === current.value) {
          return 'Value already exists';
        } else if(value < current.value) {
          if(current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if(current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
  
  // Find Value
  find(value){
    if(this.root === null) return false;
    let current = this.root;
    let found = false;
  
    while(current && !found){
      if(value < current.value){
        current = current.left;
      } else if(value > current.value){
        current = current.right;
      } else {
        found = true;
      }
    }
    if(!found) return undefined;
    return current;
  }

  // Contains Value
  contains(value){
    if(this.root === null) return false;
    let current = this.root;
    let found = false;
 
    while(current && !found){
      if(value < current.value){
        current = current.left;
      } else if(value > current.value){
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
  
  // Breadth First Search
  BFS(){
    let node = this.root;
    let data = [];
    let queue = [];
    queue.push(node);
  
    while(queue.length) {
      node = queue.shift();
      data.push(node.value);
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }
    return data;
  }
  
  // Depth First Search: PreOrder
  DFSPreOrder(){
    let data = [];
    function traverse(node){
      data.push(node.value);
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
  
  // Depth First Search: PostOrder
  DFSPostOrder(){
    let data = [];
    function traverse(node){
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(this.root);
    return data;
  }
  
  // Depth First Search: InOrder
  DFSInOrder(){
    let data = [];
    function traverse(node){
      if(node.left) traverse(node.left);
      data.push(node.value);
      if(node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
}