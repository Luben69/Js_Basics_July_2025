function lunch_break(serial_name, duration_of_1_ep, break_duration) {
    let time_for_lunch = break_duration * 1/8;
    let time_for_rest = break_duration * 1/4;

    let time_left = break_duration - (time_for_lunch + time_for_rest);

    if (time_left >= duration_of_1_ep) {
        console.log(`You have enough time to watch ${serial_name} and left with ${Math.ceil(time_left - duration_of_1_ep)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${serial_name}, you need ${Math.ceil(duration_of_1_ep - time_left)} more minutes.`);
    }
}
