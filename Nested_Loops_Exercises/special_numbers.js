function magic(n) {
    let start = 1111;
    let end = 9999;
    let valids_in_a_row = 4;
    let my_array = [];
    let final_result = [];

    for (let i = start; i <= end; i ++) {
        let string_number = String(i);
        let wanted_checks = 0;
        for (let y = 0; y < string_number.length; y ++) {
            if (n % Number(string_number[y]) === 0) {
                wanted_checks ++;
            }
        }
        if (wanted_checks === valids_in_a_row) {
            my_array.push(i);
        }
    }

    final_result.push(my_array.join(" "));
    
    
    for (let line of final_result) {
        console.log(line);
    }
}