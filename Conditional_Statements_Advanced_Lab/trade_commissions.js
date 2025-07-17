function calculateCommission(city, sales) {
    let commission = 0;

    if (sales < 0) {
        console.log("error");
        return;
    }

    switch (city) {
        case "Sofia":
            if (sales <= 500) {
                commission = sales * 0.05;
            } else if (sales <= 1000) {
                commission = sales * 0.07;
            } else if (sales <= 10000) {
                commission = sales * 0.08;
            } else {
                commission = sales * 0.12;
            }
            break;
        case "Varna":
            if (sales <= 500) {
                commission = sales * 0.045;
            } else if (sales <= 1000) {
                commission = sales * 0.075;
            } else if (sales <= 10000) {
                commission = sales * 0.10;
            } else {
                commission = sales * 0.13;
            }
            break;
        case "Plovdiv":
            if (sales <= 500) {
                commission = sales * 0.055;
            } else if (sales <= 1000) {
                commission = sales * 0.08;
            } else if (sales <= 10000) {
                commission = sales * 0.12;
            } else {
                commission = sales * 0.145;
            }
            break;
        default:
            console.log("error");
            return;
    }

    console.log(commission.toFixed(2));
}
