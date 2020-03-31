// count unique value, must be sorted
function countUniqueValue(arr) {
    let nextValue = 0;
    let newArray = [];
    for (let i = 0; i <= arr.length; i++) {
        if (nextValue !== arr.length) {
            nextValue = i + 1;
        }

        if (arr[i] !== arr[nextValue]){
            newArray.push(arr[nextValue]);
        }
    }

    return newArray.length;
}
countUniqueValue([1,2,2,3,6,8,9]);