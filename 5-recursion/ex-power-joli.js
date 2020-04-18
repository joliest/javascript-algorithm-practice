/*
    write a function caled power which
    accepts a base and an exponent.

    the function should return the power of the base 
    to the exponent. This function should mimic the 
    functionality of Math.pow)()
*/

function power(base, exponent) {
    if (exponent <= 0) return 1;
    
    let i = 1;
    if (i < exponent) {
        exponent--;
        return base * power(base, exponent);
    }
    return base;
}

// power (2,0) //1
// power(2,2) // 4
// power(2,4) //16