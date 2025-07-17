function skiVacation(days, roomType, rating) {
    let nights = days - 1;
    let pricePerNight = 0;

    if (roomType === "room for one person") {
        pricePerNight = 18;
    } else if (roomType === "apartment") {
        pricePerNight = 25;
    } else if (roomType === "president apartment") {
        pricePerNight = 35;
    }

    let totalPrice = pricePerNight * nights;

    if (roomType === "apartment") {
        if (days < 10) {
            totalPrice *= 0.7;
        } else if (days <= 15) {
            totalPrice *= 0.65;
        } else {
            totalPrice *= 0.5;
        }
    } else if (roomType === "president apartment") {
        if (days < 10) {
            totalPrice *= 0.9;
        } else if (days <= 15) {
            totalPrice *= 0.85;
        } else {
            totalPrice *= 0.8;
        }
    }

    if (rating === "positive") {
        totalPrice *= 1.25;
    } else if (rating === "negative") {
        totalPrice *= 0.9;
    }

    console.log(totalPrice.toFixed(2));
}
