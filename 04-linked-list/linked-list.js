//* Safety Goggles ON
'use strict';

//---------------------------------------
//* Singly Linked List
//---------------------------------------
//* Constructor - Nodes
function Node(value, next=null) {
  this.value = value;
  this.next = next;
}

//* Class - LinkedList
class SingleList {
  constructor () {
    this.head = null;
  }

  //* Method - Add node to head
  insert(value) {
    this.head = new Node(value, this.head);
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
    let toPrint = '';
    while(toPrint) {
      if(currentNode.value === searchValue) {
        return true;
      }
      currentNode = currentNode.next;¬
    }
    return false;
  }
}

//---------------------------------------
//* Execution Code
//---------------------------------------
// Create new linkedlist
// let bioware = new SingleList();

// Add nodes to linkedlist
// bioware.insert('Mass Effect');
// bioware.insert('Mass Effect 2');
// bioware.insert('Mass Effect 3');
// bioware.insert('Dragons Age: Origins');
// bioware.insert('Star Wars: Knights of the Old Republic');
// bioware.insert('Jade Empire');

// Test Search
// console.log(bioware);

//* Exports
module.exports = {
  LinkedList: SingleList
};