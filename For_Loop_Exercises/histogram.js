function histogram(numbers) {
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    let first = numbers.shift();

    for (let i = 0; i < first; i ++) {

        if (Number(numbers[i]) < 200) {
            p1 += 1;
        } else if (Number(numbers[i]) >= 200 && Number(numbers[i]) <= 399) {
            p2 += 1;
        } else if (Number(numbers[i]) >= 400 && Number(numbers[i]) <= 599) {
            p3 += 1;
        } else if (Number(numbers[i]) >= 600 && Number(numbers[i]) <= 799) {
            p4 += 1;
        } else {
            p5 += 1;
        }
    }
    console.log(`${(p1 / numbers.length * 100).toFixed(2)}%`);
    console.log(`${(p2 / numbers.length * 100).toFixed(2)}%`);
    console.log(`${(p3 / numbers.length * 100).toFixed(2)}%`);
    console.log(`${(p4 / numbers.length * 100).toFixed(2)}%`);
    console.log(`${(p5 / numbers.length * 100).toFixed(2)}%`);
}