function comb(n) {
    let valid_combinations = 0;

    for (let i = 0; i <= n; i ++) {
        for (let y = 0; y <= n; y ++) {
            for (let x = 0; x <= n; x ++){
                if (i + y + x === n) {
                    valid_combinations ++;
                }
            }
        }
    }
    console.log(valid_combinations);
}