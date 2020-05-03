/*
    Linear Search exercise
    Write a function called linearSearch w/c accepts an array and a 
    value, and returns the index at w/c the value exists, if not exists, return 
    -1

    Font use indexOf
*/
function linearSearch(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) return i;
    }
    return -1;
}

linearSearch([1,2,3,4,5], 12)

// colt has the same sol