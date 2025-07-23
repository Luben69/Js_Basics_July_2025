function lily(age, washing_machine_price, toy_price) {
    let toys_count = 0;
    let money_bonus = 0;
    let money_saved = 0;
    let brothers_taking_money = 1;

    for (let i = 1; i <= age; i ++) {
        if (i % 2 == 1) {
            toys_count += 1;
        } else {
            money_saved += 10 + money_bonus - brothers_taking_money;
            money_bonus += 10;
        }
    }
    let money_from_sold_toys = toys_count * toy_price;
    money_saved += money_from_sold_toys;

    if (money_saved >= washing_machine_price) {
        console.log(`Yes! ${(money_saved - washing_machine_price).toFixed(2)}`);
    } else {
        console.log(`No! ${(washing_machine_price - money_saved).toFixed(2)}`);      
    }
}