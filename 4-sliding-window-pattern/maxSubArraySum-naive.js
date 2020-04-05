// window pattern, naive solution
function maxSubarraySum(arr, num) {
    if (num > arr.length) {
        return null;
    }

    // starts with minimum value / number
    var max =- Infinity;
    for (let i = 0; i < arr.length; i++) {
        temp = 0;
        for (let j = 0; j < num; j++) {
            temp += arr[i + j];
        }

        if (temp > max) {
            max = temp;
        }
        console.log(temp, max)
    }
    return max;
}

// maxSubarraySum([1,2,5,2,8,1,5], 1); //8
maxSubarraySum([1,2,5,2,8,1,5], 4); //17
// maxSubarraySum([4,2,1,6],1);
// maxSubarraySum([], 4);