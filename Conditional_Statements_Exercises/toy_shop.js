function money(excursion_price, n_puzzles, n_dolls, n_bears, n_minions, n_trucks) {
    const puzzle_price = 2.60;
    const doll_price = 3;
    const bear_price = 4.10;
    const minion_price = 8.20;
    const truck_price = 2;

    let puzzles = n_puzzles * puzzle_price;
    let dolls = n_dolls * doll_price;
    let bears = n_bears * bear_price;
    let minions = n_minions * minion_price;
    let trucks = n_trucks * truck_price;

    let all_price = puzzles + dolls + bears + minions + trucks;

    let count_all = n_puzzles + n_dolls + n_bears + n_minions + n_trucks;

    if (count_all >= 50) {
        let discount = all_price * 0.25;
        all_price -= discount;
    }

    let rent = all_price * 0.1;
    all_price -= rent;

    if (all_price >= excursion_price) {
        console.log(`Yes! ${(all_price - excursion_price).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(excursion_price - all_price).toFixed(2)} lv needed.`);
    }
}
