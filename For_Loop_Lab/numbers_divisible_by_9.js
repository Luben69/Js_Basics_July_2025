function numbers(start, end) {
    let final_sum = 0;
    let numbers = [];
    for (let i = start; i <= end; i ++) {
        if (i % 9 == 0) {
            final_sum += i;
            numbers.push(i);
        }
    }
    console.log(`The sum: ${final_sum}`)
    for (const num of numbers) {
        console.log(num);
    }
}
