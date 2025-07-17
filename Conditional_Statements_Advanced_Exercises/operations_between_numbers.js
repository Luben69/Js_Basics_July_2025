function mathOperations(N1, N2, operator) {
    if ((operator === '/' || operator === '%') && N2 === 0) {
        console.log(`Cannot divide ${N1} by zero`);
        return;
    }

    let result;
    switch (operator) {
        case '+':
            result = N1 + N2;
            console.log(`${N1} + ${N2} = ${result} - ${result % 2 === 0 ? 'even' : 'odd'}`);
            break;
        case '-':
            result = N1 - N2;
            console.log(`${N1} - ${N2} = ${result} - ${result % 2 === 0 ? 'even' : 'odd'}`);
            break;
        case '*':
            result = N1 * N2;
            console.log(`${N1} * ${N2} = ${result} - ${result % 2 === 0 ? 'even' : 'odd'}`);
            break;
        case '/':
            result = N1 / N2;
            console.log(`${N1} / ${N2} = ${result.toFixed(2)}`);
            break;
        case '%':
            result = N1 % N2;
            console.log(`${N1} % ${N2} = ${result}`);
            break;
        default:
            console.log("Invalid operator");
    }
}
