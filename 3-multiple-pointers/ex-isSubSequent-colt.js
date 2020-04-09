/*
    isSubsequence takes in two strings and
    checks whether the characters in the first
    string form a subsequence of the characters
    in the second string. in other words, the
    function should check whether the characters
    in the string appear somewhere in the 
    second string without their order
    changing

    TIME: O(N + M)
    SPACE: O(1)
*/


// colt's  1

function isSubsequence(str1, str2) {
    let i = 0;
    let j = 0;
    if (!str1) return true;
    while(j < str2.length) {
        if (str2[j] === str1[i]) i++;
        if (i === str1.length) return true;
        j++;
    }
    return false;
}


// colts 2 - recursive but not O(1) Space

// function isSubsequence(str1, str2) {
//     if(str1.length === 0) return true;
//     if(str2.length === 0) return false;
//     if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1));
//     return isSubsequence(str1, str2.slice(1))
// }

// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'string'); // true
// isSubsequence('abc', 'abracadabra'); //true
// isSubsequence('abc', 'acb'); // false, order matters
