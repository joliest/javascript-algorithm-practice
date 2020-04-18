/*
    Write a function called findLongestSubstring which accepts
    a string and returns the length of the longest substring 
    with distinct characters
*/


function findLongestSubstring(str) {
    let start = 0;

    let longest = 0;
        
    let seen = {};
    for(let i = 0; i < str.length; i++) {

        let char = str[i];

        if (seen[char]) {
            // duplicate letter becomes start
            start =  Math.max(start, seen[char]);
        }

        // 
        longest = Math.max(longest, i - start + 1);

        // assigns length not the index
        seen[char] = i + 1;
    }
    
    return longest;
}

/*
    0 1 2 3  4 5 6 7 8 9  10   11  12 // index
    t h i s  i s a w e s   o   m   e
    1 2 3 4  5 6 7 8 9 10 11  12  13 // length
*/

// findLongestSubstring('') // 0
// findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
// findLongestSubstring('thecatinthehat') // 7
// findLongestSubstring('bbbbb') // 1
// findLongestSubstring('longestsubstring') // 8
// findLongestSubstring('thisishowwedoit') // 6