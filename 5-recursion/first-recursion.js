function countDown(num) {
    if (num <= 0) {
        // base case
        console.log('All done!')
        return;
    }

    console.log(num);
    //different input
    num--;
    //recurssion
    countDown(num);
}

countDown(3)