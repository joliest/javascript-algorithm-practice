function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    };
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        // Explanation: https://www.evernote.com/l/AsTKMeiZ-HJNNaQVED7ZdrzBfA60zIjaaz8/
        tempSum = tempSum - arr[i - num] + arr[i];

        // compare which of them is higher
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}


maxSubarraySum([100, 200, 300, 400], 2) // 700
// maxSubarraySum([1,2,5,2,8,1,5], 1); //8
// maxSubarraySum([1,2,5,2,8,1,5], 4); //17
// maxSubarraySum([4,2,1,6],1);
// maxSubarraySum([], 4);