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
    let pivot = arr[start];
    let pivotIdx = start;

    for (let i = 0; i < arr.length; i++) {
        if (pivot > arr[i]) {
            pivotIdx++;
            const temp = arr[i];
            arr[i] = arr[pivotIdx]
            arr[pivotIdx] = temp;
        }
    }
    const temp = pivot;
    arr[start] = arr[pivotIdx];
    arr[pivotIdx] = temp;
    return pivotIdx;
}

pivot([50, 5, 9, 10, 13])