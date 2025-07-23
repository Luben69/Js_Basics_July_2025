function checking(input) {
    let index = 0;
    let biggest_n = Number.NEGATIVE_INFINITY;

    while (input[index] !== 'Stop') {
        if (Number(input[index]) > biggest_n) {
            biggest_n = Number(input[index]);
        }
        index ++;
    }
    console.log(biggest_n);
}
