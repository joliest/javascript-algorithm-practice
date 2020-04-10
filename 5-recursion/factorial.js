//     4! it is 4 * 3 * 2 * 1

// iterative solution
function iterativeFactorial(num) {
    let total = 1;
    for(let i = num; i > 1; i--) {
        total *= i;
    }
    return total;
}

/*
4 * 3 = 12
12 * 2 = 24
24 * 1 = 24
*/

// recursive solution
function recursiveFactorial(num) {
    if (num === 1) return 1;
    return num * recursiveFactorial(num-1);
}



// iterativeFactorial(4)
recursiveFactorial(5)