/*
    hard piece of shit
*//*
    1] Start by picking the second element in the array
    2] Now compare the second element with the one before
    it and swap if necessary
    3] Continue to the next element and if it is in the incorrect
    order, iterate through the sorted portion (i.e the left side) to 
    place the element in the corect place
    4] Repeat until the array is sorted
*/

function insertionSort(arr) {
    for(var i = 1; i < arr.length; i++) {
        var currentVal = arr[i];
        for (var j = i - 1; j > -1 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j];
        }
        arr[j+1] = currentVal;
    }
    return arr;
}

// insertionSort([2,1,9,76,4]);
insertionSort([15,5,10,20]);