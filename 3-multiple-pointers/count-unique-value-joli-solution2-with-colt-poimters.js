// count unique value
// my and colt solution
function countUniqueValues(arr) {
    let i = 0;
    for (let j = 1; j <= arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i;
}

countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) //0
countUniqueValues([-2,-1,-1,0,1]) //4