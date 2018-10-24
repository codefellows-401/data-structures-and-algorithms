'use strict';

function Node(value, next=null) {
  this.value = value;
  this.next = next;
}

class SingleList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  append(value) {
    let current = this.head;
    let count = 0;
    while(current !== null) {
      count++;
      console.log(count);
      if(current.next) {
        current.next = new Node(value);

      }
      current = current.next;
    }
  }
  
  insertBefore(node, value) {
    let current = this.head.next;
    while(current.next !== null) {
      if(current.next.value === node) {
        let storedNode = current.next;
        current.next= new Node(node,storedNode);
      }
    }
  }

  insertAfter(node, value) {
    let current = this.head.next;
    while(current.next !== null) {
      if(current.value === node) {
        let storedVal = current.next;
        current.next = new Node(value, storedVal);
      }
    }
  }
}

module.exports = SingleList;