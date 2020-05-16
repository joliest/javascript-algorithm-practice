/*
    1] store the first element ast the smallest value you've
    seen so far
    2] Compare this item to the next item in the array until you
    find smaller number
    3] If a smaller number is found, designate that smaller number to
    be the new minimum and continue until the end of the array
    4] If the minimum is not the value (index) you imtially began with swap
    the two values
    5] Repeat this with the next element until the array is sorted
*/
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i; j < arr.length; j++) {
            if (arr[min] > arr[j]) min = j;
        }
        const temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
    return arr;
}

selectionSort([3,4,5,23,14,33,43,11,22,34,19]);
// selectionSort([3,2,1, 4]);