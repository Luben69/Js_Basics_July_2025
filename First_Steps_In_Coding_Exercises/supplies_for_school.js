function school_pack(numb_pens, numb_markers, liters_preparation, percent_discount) {
    const pen_price = 5.80;
    const marker_price = 7.20;
    const preparation_per_liter = 1.20;


    let all_pens = pen_price * numb_pens;
    let all_markers = marker_price * numb_markers;
    let all_preparation = preparation_per_liter * liters_preparation;
    
    percent_discount = percent_discount / 100;

    let all = all_pens + all_markers + all_preparation;
    let final_sum = all - (all * percent_discount);
    console.log(final_sum);
}
