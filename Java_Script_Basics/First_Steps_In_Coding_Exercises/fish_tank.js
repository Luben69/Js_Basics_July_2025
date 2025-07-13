function the_tank(length_cm, width_cm, height_cm, percentage) {
    let volume = length_cm * width_cm * height_cm;
    let volume_in_leters = volume / 1000;
    let occupied_space = percentage / 100;

    let needed_liters = volume_in_leters * (1 - occupied_space);

    console.log(needed_liters);
}
