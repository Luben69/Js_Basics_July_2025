function cake(input) {
    let length = Number(input.shift());
    let width = Number(input.shift());
    let pieces = length * width;

    let command = input.shift();

    while (command !== 'STOP' && pieces > 0) {
        pieces -= Number(command);
        command = input.shift();
    }

    if (pieces > 0) {
        console.log(`${pieces} pieces are left.`);
    } else {
        console.log(`No more cake left! You need ${Math.abs(pieces)} pieces more.`);
    }
}