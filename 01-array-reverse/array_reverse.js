// Code was revised to remove the usage of .unshift
let myArray = [10,11,12,13,14];
revArray(myArray);

function revArray(arr) {
  let emptyArr = [];

  for(let i=arr.length-1; i >= 0; i--) {
    emptyArr[emptyArr.length] = arr[i]; 
  }
  return emptyArr;
}