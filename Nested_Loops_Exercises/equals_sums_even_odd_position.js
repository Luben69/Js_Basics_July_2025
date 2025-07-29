function checking(start, end) {
    let final_result = [];
    let my_array = [];
    for (let i = start; i <= end; i++) {
        let odd_sum = 0;
        let even_sum = 0;
        let string_number = String(i);
        for (let y = 0; y < string_number.length; y++) {
            if (y % 2 === 0) {
                odd_sum += Number(string_number[y]);
            } else {
                even_sum += Number(string_number[y]);
            }
        }

        if (odd_sum == even_sum) {
            my_array.push(i)
        }
    }
    final_result.push(my_array.join(" "))
    for (let res of final_result) {
        console.log(res);
    }
}