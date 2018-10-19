//* TEST PARAMETERS
// const targetVal = 50;
// const sortedArr = [0,5,10,15,20,  40,45,50,55,60,  80,85,90,95,100,  120,125,130,135,140];
//                   [0,1, 2, 3, 4    5, 6, 7, 8, 9,  10,11,12,13, 14,   15, 16, 17, 18, 19]
// binarySearch(sortedArr, targetVal);

module.exports = function binarySearch (arr, value) {
  if(arr === [] || value === undefined) { 
    throw('One or more invalid arguments');
  }

  let start = 0;
  let end   = arr.length-1;
  let mid   = Math.ceil((end-start)/2);
  
  // Loop
  console.log('Innerloop');
  while (arr[mid] !== value) {  
    // console.log(`Start: ${start}, Mid: ${mid}, End: ${end} | ArrMid: ${arr[mid]}, Value: ${value}`);

    // Checkpoint
    if(arr[start] === value || arr[mid] === value || arr[end] === value) {
      if(arr[start] === value) {
        console.log(`\nSuccess! Value '${value}' found at position ${start}.`);
        return start;
      } else if(arr[mid] === value) {
        console.log(`\nSuccess! Value '${value}' found at position ${mid}.`);
        return mid;
      } else {
        console.log(`\nSuccess! Value '${value}' found at position ${end}.`);
        return end;
      }
    }

    // Binary Search Patterns
    if(start === end) {
      console.log('\nValue could not be found in array.');
      return -1;
    } else if(arr[mid] > value) {
      end = mid-1;
      mid = end-(Math.ceil((end-start)/2));
    } else if(arr[mid] < value) {
      start = mid+1;
      mid  += Math.ceil((end-start)/2);
    } else {
      throw(`something went very wrong! ¯\\_(ツ)_/¯`);
    }
  }
  // Catch whenever arr[mid] === value
  console.log('No matches found.\n\nOuterloop');
  console.log(`Success! Value '${value}' found at position ${mid}.`);
  return mid;
};