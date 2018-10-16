// Safety Goggles ON
'use strict';

// Test Variables
// let myArray = [];
// let myVal = 7;
// insertShiftArray(myArray,myVal);

// insertShiftArray
module.exports = function insertShiftArray(arr,val) {
  let newArr = [];
  let mid = Math.ceil(arr.length/2);

  for(let i=0; i<arr.length; i++) {
    if(i<mid) {
      newArr[i] = arr[i];
    } else if (i>=mid) {
      newArr[i+1] = arr[i];
    }
  }
  
  newArr[mid] = val;
  return newArr;
};