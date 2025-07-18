function cinema(projectionType, rows, cols) {
    let ticketPrice = 0;
    
    switch (projectionType) {
        case "Premiere":
            ticketPrice = 12.00;
            break;
        case "Normal":
            ticketPrice = 7.50;
            break;
        case "Discount":
            ticketPrice = 5.00;
            break;
        default:
            console.log("Invalid projection type");
            return;
    }

    const totalSeats = rows * cols;
    const totalIncome = totalSeats * ticketPrice;

    console.log(`${totalIncome.toFixed(2)} leva`);
}
