/*
    bubbleSort Pseudo code
    1.] Start looping from with a variable called i at
    the end of the array towards the beginning
    2.] Start an inner loop with a variable called j
    from the beginning until i-1
    3.] If arr[j] is greater than arr[j+1], swap this two
*/

function bubbleSort(arr) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };

    for (let i = arr.length; i > 0; i--) {
        // i - 1, to avoid comparing the already sorted values at the end
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j+1]) {   
                swap(arr, j, j + 1);
            }
        }
    }
    return arr;
}


bubbleSort([5,3,4,1,2,10,11]);