function checking(input) {
    let index = 0;
    let smallest_n = Number.POSITIVE_INFINITY;

    while (input[index] !== 'Stop') {
        if (Number(input[index]) < smallest_n) {
            smallest_n = Number(input[index]);
        }
        index ++;
    }
    console.log(smallest_n);
}
