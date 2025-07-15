function clock(hour, minute) {
    minute += 15;

    if (minute > 59) {
        minute = minute - 60;
        hour += 1
    }

    if (hour > 23) {
        hour = 0;
    }

    if (minute < 10) {
        console.log(`${hour}:0${minute}`);
    } else {
        console.log(`${hour}:${minute}`);
    }
}
