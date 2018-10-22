//* Safety Goggles ON
'use strict';

//---------------------------------------
//* Doubly Linked List
//---------------------------------------
//* Constructor - Nodes
function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

//* Class - LinkedList
class DoubleList {
  constructor () {
    this.head = null;
    this.tail = null;
  }

  //* Method - Add node to head
  addToHead(value) {
    let newNode = new Node(value, this.head, null);
    if (this.head) this.head.prev = newNode;
    else this.tail = newNode;
    this.head = newNode;
  }

  //* Method - Add node to tail
  addToTail(value) {
    let newNode = new Node(value, null, this.tail);
    if (this.tail) this.tail.next = newNode;
    else this.head = newNode;
    this.tail = newNode;
  }

  //* Method - Remove head node
  removeHead() {
    //if list is empty (no head)
    if(!this.head) return null;
    let val = this.head.value;
    this.head = this.head.next;

    //check if list will be empty
    if(this.head) this.head.prev = null;
    else this.tail = null;
    return val;
  }

  //* Method - Remove tail node
  removeTail() {
    //if list is empty (no tail)
    if(!this.tail) return null;

    //else if list has nodes
    let val = this.tail.value;
    this.tail = this.tail.prev;

    //check if list will be empty
    if(this.tail) this.tail.next = null;
    else this.head = null;
    return val; 
  }

  //* Method - Search List (for fun!)
  includes(searchValue) {
    let currentNode = this.head;
    while(currentNode) {
      if(currentNode.value === searchValue) return true;
      currentNode = currentNode.next;
    }
    return false;
  }
}

//---------------------------------------
//* Execution Code
//---------------------------------------
// Create new linkedlist
let bioware = new DoubleList();

// Add nodes to linkedlist
bioware.addToHead('Mass Effect');
bioware.addToHead('Mass Effect 2');
bioware.addToHead('Mass Effect 3');
bioware.addToTail('Dragons Age: Origins');
bioware.addToTail('Star Wars: Knights of the Old Republic');
bioware.addToTail('Jade Empire');

// Test Search
console.log(bioware.includes('Mass Eff'));