/*
    1] it will help to accept three arguments: an array, a start index,
    and an end index (these can default to 0 and the array length
    minus 1, respectively)
    2] Grab the pivot from the start of index
    3] Store the current pivot index in a variable (will track the pivot 
    where the pivot should end up)
    4] Loop thru the array from the start until the end
        if the pivot is greater than the current element, increment
        the pivot index variable and then swap the current element with
        the element at the pivot index
    5] Swap the starting element (pivot) with the pivot index
    6] Return pivot index
*/
function pivot(arr, start=0, end=arr.length - 1) {
    function swap(array, i, j) {
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    var pivot = arr[start];
    var swapIdx = start;

    for (var i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }
    swap(arr, start, swapIdx);
    return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length -1) {
    if(left < right) {
        let pivotIdx = pivot(arr, left, right);
        //left
        quickSort(arr, left, pivotIdx - 1);
        // right
        quickSort(arr, pivotIdx + 1, right);     
    }
    return arr;
}

quickSort([4, 6, 9, 1, 2, 5, 3])