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

function averagePair(arr, num) {
    let start = 0;
    let end = arr.length - 1;

    while(start < end) {
        let avg = (arr[start] + arr[end]) / 2;
        console.log(arr[start], '&', arr[end], '=', avg, '|', num)
        if (avg === num) return true;
        else if(avg < num) start++;
        else end--;
    }
    return false;
}

// averagePair([1,3,3,5,6,7,10,12,19], 8)// true

/*
    1 3 3 5 6 7 10 12 19

    1&19 = 10 > 8
    1&12 = 6.5 < 8
    3&12 = 7.5 < 8
    3&12 = 7.5 < 8
    5&12 = 8.5 > 8
    5&10 = 7.5 < 8
    6&10 = 8 === 8

*/

// averagePair([-1,0,3,4,5,6], 4.1) //false
// averagePair([], 4) // false