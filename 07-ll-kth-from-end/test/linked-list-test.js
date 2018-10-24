//---------------------------------------
//* Setup
//---------------------------------------
// Safety Goggles ON
'use strict';

// Dependencies
const LL = require('../src/linked-list');

// Test Variables
// let Bioware = new LL();
// Bioware.insert('Mass Effect');
// Bioware.insert('Mass Effect 2');
// Bioware.insert('Mass Effect 3');
// Bioware.insert('Dragons Age: Origins');
// Bioware.insert('Jade Empire');

//---------------------------------------
//* Testing
//---------------------------------------
describe('Basic Tests', () => {
  it('If test is properly setup, then this should pass', () => {
    let input = LL.sayHello();
    let output = 'Hello';
    expect(input).toBe(output);
  });
});