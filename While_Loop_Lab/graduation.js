function school(input) {
    let name = input.shift();
    let index = 0;
    let grade = 1;
    let graduation_grade = 0;
    let times_failed = 0;

    while (times_failed < 2 && index < input.length) {
        if (Number(input[index]) < 4.00) {
            times_failed ++;
            index ++;
        } else {
            graduation_grade += Number(input[index]);
            grade += 1;
            index ++;
        }
    }

    if (times_failed >= 2) {
        console.log(`${name} has been excluded at ${grade} grade`);
    } else {
        console.log(`${name} graduated. Average grade: ${(graduation_grade/12).toFixed(2)}`);
    }
}