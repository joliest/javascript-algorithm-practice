function sumRange(num) {
    if (num === 1) return 1;
    return num + (num - 1);
}

sumRange(4)
/*
4 + 3
    3 + 2
        2 + 1
            1
*/