function calculator(deposit_sum, deposit_time, year_interest_percent) {
    let interest_growth = deposit_sum * (year_interest_percent / 100);
    let interest_for_a_month = interest_growth / 12;
    let final_sum = deposit_sum + deposit_time * interest_for_a_month;
    console.log(final_sum);
}
