//------------------------------
//* Setup
//------------------------------
// Safety Googles ON
'use strict';

// Dependencies
import BST from 'BST';

// Test Variables
let testBST = new BST();

//------------------------------
//* Testing
//------------------------------
describe('Traversal Method Tests', () => {

  it('Should traverse the BST using preOrder traversal.', () => {
    let input  = testBST.preOrder();
    let output = [12,32,36,17,58,93,32,41,52];
    expect(input).toBe(output);
  });

  it('Should traverse the BST using inOrder traversal.', () => {
    let input  = testBST.inOrder();
    let output = [18,39,27,6,24,43,5,31,11];
    expect(input).toBe(output);
  });

  it('Should traverse the BST using postOrder traversal.', () => {
    let input  = testBST.postOrder();
    let output = [14,23,65,75,81,29,43,34,25];
    expect(input).toBe(output);
  });

});

describe('Helper Method Tests', () => {

  it('Should return the minimum node value of the BST.', () => {
    //expect(input).toBe(output);
  });

  it('Should return the maximum node value of the BST.', () => {
    //expect(input).toBe(output);
  });

  it('Should add a node value to the BST in proper placement.', () => {
    //expect(input).toBe(output);
  });

});