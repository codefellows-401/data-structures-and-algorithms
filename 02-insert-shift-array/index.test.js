// Safety Goggles ON
'use strict';

const shift = require('./index.js');

// Module Tests
describe('given an array and an argument', () => {
  it('should return an array with n+1 length of the original array', () => {
    const tmpArr = [1,2,3,4]; 
    const submit = shift(tmpArr, 7);
    expect(submit.length).toEqual(tmpArr.length +1);
  });

  it('should return an array with the argument in the middle of the array ', () => {
    const submit = shift([1,2,3,4], 7);
    const result = [1,2,7,3,4];
    expect(submit).toEqual(result);
  });

  it('should return a single-value array if the array is empty', () => {
    const submit = shift([], 7);
    const result = [7];
    expect(submit).toEqual(result);
  });
});

