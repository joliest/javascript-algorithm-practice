/*
    write function called fib which accepts a number 
    and returns the nth numbers, 1,1,2,3,5,8..
    which starts with 1 and 1, and where every numbber thereafter is equal to 
    the sum of the previous two numbers
*/

function fib(n) {
    if (n <= 2) return 1;

    return fib(n-1) + fib(n-2)
}


fib(4) // 3
// fib(10) //55
// fib(28) //317811
// fib(35) // 9227465
