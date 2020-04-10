// pure recursion
// see helper recursive for alternative
function collectOddValues(arr) {
    let results = [];
    
    // return empty array to be concat-ible
    if (arr.length === 0) return results;

    if (arr[0] % 2 !== 0) {
        results.push(arr[0]);
    }

    // concat merges two or more arrays into one
    // splice - returns an array that starts with given args
    results = results.concat(collectOddValues(arr.splice(1)));

    return results;
}


collectOddValues([1,2,3])