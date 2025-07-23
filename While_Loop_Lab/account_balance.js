function balance(input) {
    let back_balance = 0;
    let index = 0;

    while (input[index] !== 'NoMoreMoney') {
        if (Number(input[index]) < 0) {
            console.log('Invalid operation!');
            break;
        }
        back_balance += Number(input[index]);
        console.log(`Increase: ${(Number(input[index])).toFixed(2)}`);
        index ++;
    }
    console.log(`Total: ${back_balance.toFixed(2)}`);
    
}