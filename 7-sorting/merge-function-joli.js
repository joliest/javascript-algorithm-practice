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
    let newArr = [];

    let idx1 = 0;
    let idx2 = 0;

    const maxLength = arr1.length + arr2.length;
    while (newArr.length < maxLength) {
       if (arr1[idx1] < arr2[idx2]) {
           newArr.push(arr1[idx1]);
           idx1++;
       } else {
           newArr.push(arr2[idx2]);
           idx2++;
       }
    }

    return newArr;
}

merge([1, 10, 50], [2, 14, 99, 100]);