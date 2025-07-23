function numbers(input) {
    let big_number = Number(input.shift());
    let index = 0;
    let other_numbers = Number(input[index]);

    while (other_numbers < big_number) {
        index ++;
        other_numbers += Number(input[index]);
    }
    console.log(other_numbers);
}