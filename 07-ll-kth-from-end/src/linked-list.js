//---------------------------------------
//* Setup
//---------------------------------------
// Safety Goggles ON
'use strict';

//---------------------------------------
//* Singly Linked List
//---------------------------------------
// Node Constructor
function Node(value, next=null) {
  this.value = value;
  this.next = next;
}

// Linked List
class SingleList {
  constructor () {
    this.head = null;
  }

  // Validation test
  sayHello() {
    return 'Hello';
  }

  // Insert value at head
  addToHead(value) {
    const newNode = new Node(value, this.head); // points newNode to previous this.head
    this.head = newNode; // set newNode object as the current value of this.head
  }

  // Return node value
  retrieve(value) {
    let currentNode = this.head;
    while(currentNode.value !== value) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
  
  // Verify if node exists
  search(value) {
    let currentNode = this.head;
    while(currentNode) {
      if(currentNode.value === value) return true;
      currentNode = currentNode.next;
    }
    return false;
  }

  // Method - Print linkedlist contents
  // print() {
  //   let toPrint = '';
  //   while(toPrint) {
  //     if(currentNode.value === searchValue) {
  //       return true;
  //     }
  //     currentNode = currentNode.next;¬
  //   }
  //   return false;
  // }

  // addToTail(value) {
  //   let current = this.head;
  //   let count = 0;
  //   while(current !== null) {
  //     count++;
  //     console.log(count);
  //     if(current.next) {
  //       current.next = new Node(value);

  //     }
  //     current = current.next;
  //   }
  // }

  // insertBefore(node, value) {
  //   let current = this.head.next;
  //   while(current.next !== null) {
  //     if(current.next.value === node) {
  //       let storedNode = current.next;
  //       current.next= new Node(node,storedNode);
  //     }
  //   }
  // }

  // insertAfter(node, value) {
  //   let current = this.head.next;
  //   while(current.next !== null) {
  //     if(current.value === node) {
  //       let storedVal = current.next;
  //       current.next = new Node(value, storedVal);
  //     }
  //   }
  // }

  // Method - Insert kth from End
  findOffset(offset) {
    if(!isNaN(offset)) return 'ERROR: Argument is not a whole number.';
    let currentNode = this.value;
    let nextNode = this.next;
    let counter = 0;
    let counterOffset = null;

    while (nextNode !== null) {
      counter++;
      counterOffset = Math.max(null, counter - offset);
      currentNode = nextNode;
    }

    if(counterOffset !== null) return currentNode.next.repeat(counterOffset).value;
    else return `Node not available at offset ${offset}`;
  }
}

//---------------------------------------
//* Exports
//---------------------------------------
module.exports = SingleList;