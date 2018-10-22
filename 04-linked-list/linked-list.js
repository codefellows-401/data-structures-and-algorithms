//* Safety Goggles ON
'use strict';

//---------------------------------------
//* Singly Linked List
//---------------------------------------
//* Constructor - Nodes
function Node(value, next) {
  this.value = value;
  this.next = null;
  this.head = true;
}

//* Class - LinkedList
class SingleList {
  constructor () {
    this.head = null;
    this.id = 0;
  }

  //* Method - Add node to head
  insert(value) {
    let newNode = new Node(value);
    let headCheck = this.head;
    
    // if head is not present, set newNode as current head
    if(headCheck === null) {
      this.head = newNode;
      this.id++;
      return newNode;
    }

    // if head exists, place node at the end of the stack
    while(headCheck.next) {
      headCheck = headCheck.next;
    }
    headCheck.next = newNode;
    this.id++;
    return newNode;
  }

  //* Method - Includes Value
  includes(searchValue) {
    let currentNode = this.head;
    while(currentNode) {
      if(currentNode.value === searchValue) return true;
      currentNode = currentNode.next;
    }
    return false;
  }
  
  //* Method - Print linkedlist contents
  print() {
    console.log(this.value);
  }
}

//---------------------------------------
//* Execution Code
//---------------------------------------
// Create new linkedlist
let bioware = new SingleList();

// Add nodes to linkedlist
bioware.insert('Mass Effect');
bioware.insert('Mass Effect 2');
bioware.insert('Mass Effect 3');
bioware.insert('Dragons Age: Origins');
bioware.insert('Star Wars: Knights of the Old Republic');
bioware.insert('Jade Empire');

// Test Search
// console.log(bioware);