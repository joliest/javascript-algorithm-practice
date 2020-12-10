/**
O(n^2)
function fib(n) {
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}
*/

// O(n)
function fib(n, memo = []) {
    if (memo[n] !== undefined) return memo[n]
    if (n <= 2) return 1;
    var res = fib(n-1, memo) + fib(n-2, memo);
    memo[n] = res;
    return res;
}
