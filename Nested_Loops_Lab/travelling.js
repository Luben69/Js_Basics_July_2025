function travel(input) {
    let country = input.shift();
    let money_needed = input.shift();

    outer: while (country !== 'End' && money_needed !== 'End') {
        let money_saved = 0;
        while (money_saved < Number(money_needed)) {
            let added_money = input.shift();
            if (added_money === 'End') {
                break outer;
            }
            money_saved += Number(added_money);
        }
        console.log(`Going to ${country}!`);
        country = input.shift();
        money_needed = input.shift();
    }
}