/*
    given a sorted array of 
    integrs and a target average,
    determine if there is a pair
    of values in the array where theaverage of 
    the pair equals the target average
    there may be more than one pair
    that matches the average target    

    TIME O(N)
    SPACE O(1)
*/

function averagePair(arr, ave) {
    let i = 0;

    //get the average 
    for(let j = 0; j <= arr.length; j++) {
        const tempAverage = (arr[i] + arr[j]) / 2;
        if (tempAverage === ave) {
           return true;
        }

        if (j === arr.length) {
            i++;
            j = 0;
        }

        if (i === arr.length) {
            return false;
        }
    }
    return false;
}


averagePair([1,2,3], 2.5) // true
// averagePair([1,3,3,5,6,7,10,12,19], 8)// true
// averagePair([-1,0,3,4,5,6], 4.1) //false
// averagePair([], 4) // false