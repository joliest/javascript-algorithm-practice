function swap(arr, idx1, idx2) {
    const temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
    return arr;
}

/*
    bubbleSort Pseudo code
    1.] Start looping from with a variable called i at
    the end of the array towards the beginning
    2.] Start an inner loop with a variable called j
    from the beginning until i-1
    3.] If arr[j] is greater than arr[j+1], swap this two
*/
function bubbleSort(arr) {
    for(var i = arr.length; i > 0; i--) {
        for (var j = 0; j < arr.length - 1; j++) {
            console.log(arr, arr[j], arr[j+1])
            if (arr[j] > arr[j+1]) {
                arr = swap(arr, j, j+1);
            }
        }
    console.log('COMPLETE!!')
    }
    return arr;
}

// swap([1,3,5,6], 0, 1)
bubbleSort([5,3,4,1,2,10,11]);