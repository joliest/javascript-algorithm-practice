/*
    mergeSort pseudo code
    1]Break up the array into halves until you have arays that are empty or have one element (use slice)
    2]Once you have smaller sorted arrays, merge those arrays with other sorted arrays until
    you are back at the full length of the arrays
    3]Once the array has been merged back together, return
    the merged (and sorted) array
*/

mergeSort([10, 24, 76, 73, 72, 1, 9]);

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}


function merge(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
       if (arr1[i] < arr2[j]) {
           results.push(arr1[i]);
           i++;
       } else {
           results.push(arr2[j]);
           j++;
       }
    }
    // fixed some bugs
    while (i < arr1.length) {
       results.push(arr1[i]);
       i++;
    }
    while (j < arr2.length) {
       results.push(arr2[j]);
       j++;
    }
    return results;
};