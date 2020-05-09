function searchString(long, short) {
    let count = 0;
    for (var i = 0; i < long.length; i++) {
        for (var j = 0; j < short.length; j++) {
            if (short[j] !== long[j + i]) break;
            if (j === (short.length - 1)) count++;
        }
    }
    return count;
}


searchString('wokomgwjomg', 'omg'); //2
searchString('lolie loled lol', 'lol'); //3