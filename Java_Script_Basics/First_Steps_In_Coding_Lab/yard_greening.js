function greening(meters) {
    let first_price = meters * 7.61;
    let discount = first_price * 0.18;
    let final_sum = first_price - discount;
    console.log(`The final price is: ${final_sum} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}
