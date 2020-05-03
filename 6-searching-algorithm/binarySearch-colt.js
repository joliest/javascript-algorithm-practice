/*
    Binary Search Pseudocode
    Accepts SORTED array and a value
    Left pointer - start of array
    right pointer - end of array
    get the middle index (average)

    While the left pointer comes before the right pointer
      Create a pointer in the middle
      If you find the value you want, return the index
      if the value is too small, move the left pointer up
      if the value is too large, move the right pointer down
    If you never find the value return -1

    Write a function called binarySearch which accepts a sorted
    array and a value and returns the index of w/c the value exists,
    otherwise return -1
*/

function binarySearch(arr, val) {
    let left = 0;
    let right = arr.length - 1;
    let middle = Math.round(right / 2);
   
   // left <= right avoids infinite loop
   while(val !== arr[middle] && left <= right) {
       // add 1, using the same value is redundant
       if (val > arr[middle]) left = middle + 1;
       else right = middle -1;
       middle = Math.round((left + right) / 2)
   }
   return arr[middle] === val ? middle : -1;
}

binarySearch([1,2,3,4,5], 3) //2
// binarySearch([1,2,3,4,5], 2) //1
// binarySearch([1,2,3,4], 5) //4
// binarySearch([1,2,3,4,5], 6) // -1











