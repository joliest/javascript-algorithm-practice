 /*
    1] Create an empty array, take a look at the smallest values in each input array. Use while loop
    2] While there ae still values we havent looked at. ..
        -> if the value in the first array is smaller than the value in
        the second array, push the value in the first array into our results and
        move on to tge next value in the first array
        -> if the value in the first array is larger than the value in the second array,
        push the value in the second array into our results and move on to the next valuein the 
        second array
        -> Once we exhaust one array, push in all remaining arrays from the other array
 */

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
}

merge([1, 10, 50], [2, 14, 99, 100]);
//  merge([2,14], [2, 14]);