function repainting(needed_nylon, needed_paint, needed_thinner, hours_to_finish) {
    const nylon = 1.50;
    const paint = 14.50;
    const thinner = 5;

    let bought_nylon = (needed_nylon + 2) * nylon;
    let bought_paint = (needed_paint + (needed_paint *0.1)) * paint;
    let bought_thinner = needed_thinner * thinner;

    let plastic_bags = 0.40;

    let all_materials = bought_nylon + bought_paint + bought_thinner + plastic_bags;

    let workers_pay = (all_materials * 0.3) * hours_to_finish;

    let final_sum = all_materials + workers_pay;

    console.log(final_sum);
}
