/*
    Write a function called minSubArrayLen which
    accepts two params. An array of positive integers
    and a positive integer
    The function should return the minimal length of a 
    contagious subarray of which the sum is
    greater than or equal to the integer passed to the
    function. If there isn't one, return 0
*/

function minSubArrayLen(arr, num) {
    let newArr = [];
    let minLen = arr.length;
    
    let i = 0;
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
        sum += arr[j];

        // adds item in array
        newArr.push(arr[j]);
        
        if (sum >= num) {

            i++;

           // move into its next index as its starting point
            j = i;

            minLen = Math.min(newArr.length, minLen);

            // resets new array and sum
            newArr = [];
            sum = 0;
        }
    }

    if(arr.length === minLen) return 0;
    
    return minLen;
}


// minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because 4,3 is the smallest subarray
// minSubArrayLen([2,1,6,5,4], 9) // 2 because [5,4] is the smallest subarray
// minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 because [62] is greater than 52
// minSubArrayLen([1,4,16,22,5,7,8,9,10], 39) //3
// minSubArrayLen([1,4,16,22,5,7,8,9,10], 55)  // 5
// minSubArrayLen([4,3,3,8,1,2,3], 11) // 2
// minSubArrayLen([1,4,16,22,5,7,8,9,10], 95) // 0