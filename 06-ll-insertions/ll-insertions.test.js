'use strict';

const SingleList = require('./ll-insertions.js');
let LL = new SingleList();
LL.insert('hello');
LL.insert('world');
LL.insert('again');
LL.append('Bob');

// describe('LinkedList', () => {

// });

describe('Methods', () => {
  it('append attaches value to last node', () => {
    expect(LL).toEqual();
  });
});

// describe('Exceptions', () => {
//   it('', () => {
//     let input = '';
//     let output = 'Exception';
//     expect(input).toBe(output);
//   });
// });