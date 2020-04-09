function countDown(num) {
    if (num <= 0) {
        console.log('All done!')
        return;
    }

    console.log(num);
    num--;
    // base case and different input
    countDown(num);
}

countDown(3)