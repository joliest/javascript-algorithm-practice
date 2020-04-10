// outer function which is not recursive
function collectOddValues(arr) {
    let results = [];

    // inner function which is recursive
    function helper(helperInput) {
        if (helperInput.length === 0) {
            return;
        }

        if(helperInput[0] % 2 !== 0) {
            results.push(helperInput[0]);
        }

        helper(helperInput.splice(1));
    }

    helper(arr);
    return results;
}

collectOddValues([1,2,3,4,5,6,7,8,9]);