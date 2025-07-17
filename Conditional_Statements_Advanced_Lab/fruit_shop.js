function fruitShop(fruit, day, quantity) {
    let price = 0;

    const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    const weekends = ["Saturday", "Sunday"];

    if (weekdays.includes(day)) {
        switch (fruit) {
            case "banana": price = 2.50; break;
            case "apple": price = 1.20; break;
            case "orange": price = 0.85; break;
            case "grapefruit": price = 1.45; break;
            case "kiwi": price = 2.70; break;
            case "pineapple": price = 5.50; break;
            case "grapes": price = 3.85; break;
            default: 
                console.log("error");
                return;
        }
    } else if (weekends.includes(day)) {
        switch (fruit) {
            case "banana": price = 2.70; break;
            case "apple": price = 1.25; break;
            case "orange": price = 0.90; break;
            case "grapefruit": price = 1.60; break;
            case "kiwi": price = 3.00; break;
            case "pineapple": price = 5.60; break;
            case "grapes": price = 4.20; break;
            default:
                console.log("error");
                return;
        }
    } else {
        console.log("error");
        return;
    }

    let total = price * quantity;
    console.log(total.toFixed(2));
}
