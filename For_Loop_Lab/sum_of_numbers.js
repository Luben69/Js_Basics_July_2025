function math(n_as_string) {
    let answer = 0;
    for (let i = 0; i < n_as_string.length; i ++) {
        answer += Number(n_as_string[i]);
    }
    console.log(`The sum of the digits is:${answer}`)
}