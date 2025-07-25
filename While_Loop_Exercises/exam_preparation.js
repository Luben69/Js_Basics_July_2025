function preparing(input) {
    let max_bad_grades = Number(input.shift());
    let question_name = input.shift();
    let grade = Number(input.shift());
    let bad_grade_count = 0;
    let questions_answered = 0;
    let average_grade = 0;
    let last_question = '';

    while (question_name !== 'Enough' && String(grade) !== 'Enough' && bad_grade_count < max_bad_grades) {
        if (grade <= 4.00) {
            bad_grade_count ++;
            questions_answered ++;
            last_question = question_name
            average_grade += Number(grade)
        } else {
            questions_answered ++;
            last_question = question_name;
            average_grade += Number(grade)
        }

        question_name = input.shift();
        grade = Number(input.shift());

    }
    if (question_name === 'Enough' || String(grade) === 'Enough') {
        console.log(`Average score: ${(average_grade/questions_answered).toFixed(2)}`);
        console.log(`Number of problems: ${questions_answered}`);
        console.log(`Last problem: ${last_question}`);

    } else if (bad_grade_count >= max_bad_grades) {
        console.log(`You need a break, ${bad_grade_count} poor grades.`);
    }
}