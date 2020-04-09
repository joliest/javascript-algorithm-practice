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

function isSubsequence(str1, str2) {
    let first = str1.split('');
    let second = str2.split('');

    let i = 0;
    for (let j = 0; j < second.length; j++) {
        if (first[i] === second[j]) {
            i++;
        }

        if(i === first.length) {
            return true;
        }
    }
    return false;
}

// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'string'); // true
// isSubsequence('abc', 'abracadabra'); //true
// isSubsequence('abc', 'acb'); // false, order matters
