function tennis(arguments) {
    let tournaments_participated_in = Number(arguments.shift());
    let starting_points = Number(arguments.shift());
    let points_won = 0;
    let tournaments_won = 0;

    for (let i = 0; i < tournaments_participated_in; i ++) {
        let result = arguments.shift();

        if (result == 'W') {
            points_won += 2000
            tournaments_won += 1
        } else if (result == 'F') {
            points_won += 1200;
        } else if (result == 'SF') {
            points_won += 720;
        }
    }
    console.log(`Final points: ${starting_points + points_won}`);
    console.log(`Average points: ${Math.floor(points_won / tournaments_participated_in)}`);
    console.log(`${(tournaments_won / tournaments_participated_in * 100).toFixed(2)}%`);
}