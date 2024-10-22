// returns the digit index (opposite)
function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// how many digit
function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

function radixSort(nums) {
    let maxDigitCounts = mostDigits(nums)
    for (let k = 0; k < maxDigitCounts; k++) {
        let digitBuckets = Array.from({length: 10}, () => []) // creates 10 [] inside array
        for(let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k)
            digitBuckets[digit].push(nums[i])
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

radixSort([23, 345, 5467, 12, 2345, 9852])