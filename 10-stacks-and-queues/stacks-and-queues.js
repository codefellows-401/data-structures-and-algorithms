//--------------------------------------
//* Setup
//--------------------------------------

'use strict';

//* Commented out because we didn't have to include this per JB's instructions on Friday
// class Node {
//   constructor(value, next) {
//     this.value = value;
//     this.next = next;
//   }
// }

//--------------------------------------
//* Classes
//--------------------------------------
class Stack {
  constructor() {
    let dataStack = [];
    this.top = 0;
  }
  push(value) {
    return this.dataStack[this.top++];
  }
  pop(value) {
    return this.dataStack[--this.top];
  }
  peek() {
    return this.dataStack[this.top-1];
  }
}

class Queue {
  constructor() {
    this.dataQueue = [];
  }
  enqueue(value) {
    this.dataQueue.push(value);
  }
  dequeue(value) {
    this.dataQueue.shift();
  }
  peek() {
    this.dataQueue[this.top-1];
  }
}

//--------------------------------------
//* Module Exports
//--------------------------------------
module.exports = {
  Stack: Stack,
  Queue: Queue,
};