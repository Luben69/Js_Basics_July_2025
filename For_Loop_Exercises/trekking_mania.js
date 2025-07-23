function mania(arguments) {
    let musala_percentage = 0;
    let monblan_percentage = 0;
    let kilimindjaro_percentage = 0;
    let k2_percentage = 0;
    let everest_percentage = 0;

    let all_people = 0;

    let number_groups = Number(arguments.shift());

    for (let i = 0; i < number_groups; i ++) {
        let group_size = Number(arguments.shift());
        all_people += group_size;

        if (group_size <= 5) {
            musala_percentage += group_size;
        } else if (group_size >= 6 && group_size <= 12) {
            monblan_percentage += group_size;
        } else if (group_size >= 13 && group_size <= 25) {
            kilimindjaro_percentage += group_size;
        } else if (group_size >= 26 && group_size <= 40) {
            k2_percentage += group_size;
        } else {
            everest_percentage += group_size;
        }
    }

    console.log(`${(musala_percentage / all_people * 100).toFixed(2)}%`);
    console.log(`${(monblan_percentage / all_people * 100).toFixed(2)}%`);
    console.log(`${(kilimindjaro_percentage / all_people * 100).toFixed(2)}%`);
    console.log(`${(k2_percentage / all_people * 100).toFixed(2)}%`);
    console.log(`${(everest_percentage / all_people * 100).toFixed(2)}%`);
    
}