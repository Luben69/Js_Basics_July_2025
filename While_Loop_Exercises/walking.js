function walking(input) {
    const goal_steps = 10_000;
    let current_steps = 0;

    while (current_steps < goal_steps) {
        let command = input.shift();

        if (command === 'Going home') {
            let final_steps = Number(input.shift());
            current_steps += final_steps
            break;
        }
        current_steps += Number(command);
    }

    if (current_steps >= goal_steps) {
        console.log('Goal reached! Good job!');
        console.log(`${current_steps - goal_steps} steps over the goal!`);
    } else {
        console.log(`${goal_steps - current_steps} more steps to reach goal.`);
    }
}