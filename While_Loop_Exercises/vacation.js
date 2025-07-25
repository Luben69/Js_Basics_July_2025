function vacation(input) {
    let money_needed_for_excursion = Number(input.shift());
    let money_in_the_pocket = Number(input.shift());
    let days_in_a_row_spending = 0;
    let all_days = 0;

    while (days_in_a_row_spending < 5 && money_in_the_pocket < money_needed_for_excursion) {
        let action = input.shift();
        let money = Number(input.shift());

        if (action === 'spend') {
            money_in_the_pocket -= money;
            days_in_a_row_spending ++;
            if (money_in_the_pocket < 0) {
                money_in_the_pocket = 0;
            }

        } else if (action === 'save') {
            money_in_the_pocket += money;
            days_in_a_row_spending = 0;
        }
        all_days ++;
    }

    if (days_in_a_row_spending >= 5) {
        console.log("You can't save the money.");
        console.log(all_days);
    } else if (money_in_the_pocket >= money_needed_for_excursion) {
        console.log(`You saved the money for ${all_days} days.`);
    }

}