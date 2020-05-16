function swap(arr, idx1, idx2) {
    const temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
    return arr;
}


function bubbleSort(arr) {
    for(var i = arr.length; i > 0; i--) {
        var noSwap = true;
        for (var j = 0; j < i - 1; j++) {
            console.log(arr, arr[j], arr[j+1])
            if (arr[j] > arr[j+1]) {
                arr = swap(arr, j, j+1);
                noSwap = false;
            }
        }
        console.log('1 complete pass')
        if (noSwap) break;
    }
    return arr;
}
bubbleSort([8,1,2,3,4,5,6,7]);