function swimming(record_in_sec, distance_in_meters, time_to_swim_1_meter) {
    let time_in_sec_for_whole = distance_in_meters * time_to_swim_1_meter;
    let slow = Math.floor(distance_in_meters / 15) * 12.5;
    let all_time = time_in_sec_for_whole + slow;

    if (all_time < record_in_sec) {
        console.log(`Yes, he succeeded! The new world record is ${(all_time).toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(all_time - record_in_sec).toFixed(2)} seconds slower.`);
    }
}
