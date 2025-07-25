function moving(input) {
    let width = Number(input.shift());
    let length = Number(input.shift());
    let heigth = Number(input.shift());
    let free_space = width * length * heigth;

    let command = input.shift();

    while (command !== 'Done' && free_space > 0) {
        free_space -= Number(command);
        command = input.shift();
    }

    if (free_space > 0) {
        console.log(`${free_space} Cubic meters left.`);
    } else {
        console.log(`No more free space! You need ${Math.abs(free_space)} Cubic meters more.`);
    }
}