'use strict';

// Import module
const binarySearch = require('./module.js');

//* TEST VARIABLES
const wrongVal  = 22;
const sortedVal = 50;
const sortedArr = [0,5,10,15,20,  40,45,50,55,60,  80,85,90,95,100,  120,125,130,135,140];
//                [0,1, 2, 3, 4    5, 6, 7, 8, 9,  10,11,12,13, 14,   15, 16, 17, 18, 19]
const dupliVal  = 20;
const dupliArr  = [0,5,20,20,20,  40,45,50,55,60,  80,85,90,95,100,  120,125,130,135,140];
//                [0,1, 2, 3, 4    5, 6, 7, 8, 9,  10,11,12,13, 14,   15, 16, 17, 18, 19]

const badArr = [];

describe('When binarySearch() is executed...', () => {
  it('Check that the target value retrieve the correct value', () => {
    const input  = binarySearch(sortedArr, sortedVal);
    const output = 7;
    expect(input).toEqual(output);
  });

  it('Check that the function returns -1 if no index value can be found', () => {
    const input  = binarySearch(sortedArr, wrongVal);
    const output = -1;
    expect(input).toEqual(output);
  });

  it('Check that the target value returns a qualifying value if duplicates exist', () => {
    const input  = binarySearch(dupliArr, dupliVal);
    expect(input).toEqual(4);
  });

});