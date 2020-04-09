/*
 Write a function called sameFrequency.
 Give two positive integers, findout if the two
 numbers have the same frequency of digits 
*/

/* You solution must be: */

// sameFrequency(182, 281) // true
// sameFrequency(34, 14) // false

function sameFrequency(num1, num2) {
    if (num1 < 0 && num2 < 0) {
        return false;
    }

    const arr1 = Array.from(String(num1), Number);
    const arr2 = Array.from(String(num2), Number);

    let lookup = {};
    for (num of arr1) {
        if(lookup[num]) {
            lookup[num]++;
        } else {
            lookup[num] = 1;
        }
    }

    for (let i = 0; i < arr2.length; i++) {
       let givNum = arr2[i];
       if (!lookup[givNum]) {
           return false;
       } else {
           lookup[givNum] -= 1;
       }
    }
    return true;
}

sameFrequency(123, 321);