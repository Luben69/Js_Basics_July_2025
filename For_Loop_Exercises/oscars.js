function oscars(arguments) {
    let actor = arguments.shift();
    let starting_points = Number(arguments.shift());
    let number_grading = Number(arguments.shift());
    const points_to_win = 1250.5;


    for (let i = 0; i < number_grading; i ++) {
        let judge_name = arguments.shift();
        let points = Number(arguments.shift());

        starting_points = starting_points + ((judge_name.length * points) / 2);

        if (starting_points > points_to_win) {
            console.log(`Congratulations, ${actor} got a nominee for leading role with ${(starting_points).toFixed(1)}!`);
            break;
        }
        
    }
    if (starting_points <= points_to_win) {
            console.log(`Sorry, ${actor} you need ${(points_to_win - starting_points).toFixed(1)} more!`);

    } 
}


oscars(["Zahari Baharov",
"205",
4,
"Johnny Depp",
"45",
"Will Smith",
"29",
"Jet Lee",
"10",
"Matthew Mcconaughey",
"39"]);