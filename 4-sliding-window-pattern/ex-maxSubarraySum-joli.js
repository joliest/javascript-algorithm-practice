/*
    Given an array of integers and a number,
    write a function called maxSubArraySum,
    which finds the maximum sum of subarra with the length 
    of the number passed to the function,

    Note that a subarray must consist of consective elements
    from the original array. In the first example below, 
    [100, 200, 300] is a subarray of the original array, but 
    [100, 300] is not

*/

function maxSubarraySum(arr, num) {
    if (arr.length < num) return null;

    let tempSum = 0;
    for (let i = 0; i < num; i++) {
        tempSum += arr[i];
    }

    let maxSum = tempSum;
    for (let i = 0; i < (arr.length - num); i++) {
        tempSum = (tempSum - arr[i]) + arr[num + i];

        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

// maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
maxSubarraySum([100, 200, 300, 400], 2) // 700
// maxSubarraySum([1,4,2,10,23,3,1,0,20], 4) // 39
// maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1], 2) //5
// maxSubarraySum([2,3], 3) // null
