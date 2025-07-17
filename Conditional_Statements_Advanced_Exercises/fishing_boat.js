function fishingBoat(budget, season, fishermen) {
    let basePrice = 0;

    switch (season) {
        case "Spring":
            basePrice = 3000;
            break;
        case "Summer":
        case "Autumn":
            basePrice = 4200;
            break;
        case "Winter":
            basePrice = 2600;
            break;
    }

    if (fishermen <= 6) {
        basePrice *= 0.90;
    } else if (fishermen <= 11) {
        basePrice *= 0.85;
    } else {
        basePrice *= 0.75;
    }

    if (fishermen % 2 === 0 && season !== "Autumn") {
        basePrice *= 0.95;
    }

    const diff = Math.abs(budget - basePrice).toFixed(2);

    if (budget >= basePrice) {
        console.log(`Yes! You have ${diff} leva left.`);
    } else {
        console.log(`Not enough money! You need ${diff} leva.`);
    }
}
