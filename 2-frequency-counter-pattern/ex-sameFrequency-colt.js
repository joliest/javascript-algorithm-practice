/*
 Write a function called sameFrequency.
 Give two positive integers, findout if the two
 numbers have the same frequency of digits 
*/

/* You solution must be: */

// sameFrequency(182, 281) // true
// sameFrequency(34, 14) // false
function sameFrequency(num1, num2) {
    let strNum1 = num1.toString();
    let strNum2 = num2.toString();

    if (strNum1.length !== strNum2.length) {
        return false;
    }

    let countNum1 = {};
    let countNum2 = {};

    for (i = 0; i < strNum1.length; i++) {
        countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1;
    }

    for (i = 0; i < strNum2.length; i++) {
        countNum2[strNum2[i]] = (countNum2[strNum2[i]] || 0) + 1;
    }

    for (let key in countNum1) {
        if (countNum1[key] !== countNum2[key]) {
            return false;
        }
    }

    return true;
}