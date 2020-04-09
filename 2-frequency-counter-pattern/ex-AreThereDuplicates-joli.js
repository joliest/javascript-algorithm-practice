/*
    Implement a function called
    areThereDuplicates which accepts a variable
    number of arguments, and checks 
    wheter there are any duplicates among arguments
    passed in. Can solve using frequency counter
    or multiple patters

    TIME O(N)
*/



function areThereDuplicates() {
    let args = {};
    
    for (arg of arguments) {
        args[arg] = (args[arg] || 0) + 1;
    }

    for (arg in args) {
        if (args[arg] > 1) return true;
    }
    
    return false;
}

// areThereDuplicates(1, 4, 3, 4 ,5) // true
areThereDuplicates('b', 'a') // true