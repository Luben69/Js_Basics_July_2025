function lessgo(string) {
    let points = 0;

    for (let i = 0; i < string.length; i ++) {
        if (string[i] == 'a') {
            points += 1;
        } else if (string[i] == 'e') {
            points += 2;
        } else if (string[i] == 'i') {
            points += 3;
        } else if (string[i] == 'o') {
            points += 4;
        } else if (string[i] == 'u') {
            points += 5;
        }
    }
    console.log(points);
}
