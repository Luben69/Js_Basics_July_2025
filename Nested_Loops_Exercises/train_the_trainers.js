function trainers(input) {
    let jury_count = Number(input.shift());
    let all_grades_sum = 0;
    let grades_count = 0;
    let results = {};

    let command = input.shift();

    while (command !== 'Finish') {
        results[command] = 0;
        for (let y = 0; y < jury_count; y++) {
            let given_grade = Number(input.shift());
            grades_count ++;
            results[command] += given_grade;
            all_grades_sum += given_grade
        }
        results[command] = results[command] / jury_count
        command = input.shift();
    }
    for (let project_name in results) {
        console.log(`${project_name} - ${(results[project_name]).toFixed(2)}.`);
    }
    console.log(`Student's final assessment is ${(all_grades_sum / grades_count).toFixed(2)}.`);
}