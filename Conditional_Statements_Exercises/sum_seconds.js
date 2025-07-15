function sum(first_racer, second_racer, third_racer) {
    let total_time = first_racer + second_racer + third_racer;
    let minutes = Math.floor(total_time / 60);
    let seconds = total_time % 60

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`)
    } else {
        console.log(`${minutes}:${seconds}`)
    }
}
