function change(money) {
    let cents = Math.round(money * 100);
    let coins_count = 0;

    const coins = [200, 100, 50, 20, 10, 5, 2, 1];

    for (let coin of coins) {
        while (cents >= coin) {
            cents -= coin;
            coins_count++;
        }
    }

    console.log(coins_count);
}