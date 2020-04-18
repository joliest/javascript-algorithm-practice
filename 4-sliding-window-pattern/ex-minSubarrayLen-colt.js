/*
    Write a function called minSubArrayLen which
    accepts two params. An array of positive integers
    and a positive integer
    The function should return the minimal length of a 
    contagious subarray of which the sum is
    greater than or equal to the integer passed to the
    function. If there isn't one, return 0
*/

function minSubArrayLen(nums, sum) {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;

    while (start < nums.length) {
        // if current window doesnt add up to the given
        // sum then
            //move the window to the right
        if (total < sum && end < nums.length) {
            total += nums[end];
            end++;
        }
        // if the current window adds up to atleast teh sum then
            // we can shrink the window
        else if (total >= sum) {
            minLen = Math.min(minLen, end - start);
            total -= nums[start];
            start++;
        }
        else {
            break;
        }
    }

    return minLen === Infinity ? 0 : minLen;
}


minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because 4,3 is the smallest subarray
// minSubArrayLen([2,1,6,5,4], 9) // 2 because [5,4] is the smallest subarray
// minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 because [62] is greater than 52
// minSubArrayLen([1,4,16,22,5,7,8,9,10], 39) //3
// minSubArrayLen([1,4,16,22,5,7,8,9,10], 55)  // 5
// minSubArrayLen([4,3,3,8,1,2,3], 11) // 2
// minSubArrayLen([1,4,16,22,5,7,8,9,10], 95) // 0