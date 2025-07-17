function math_check(product, city, quantity) {
    if (city == 'Sofia') {
        if (product == 'coffee') {
            console.log(0.50 * quantity)
        } else if (product == 'water') {
            console.log(0.80 * quantity)
        } else if (product == 'beer') {
            console.log(1.20 * quantity)
        } else if (product == 'sweets') {
            console.log(1.45 * quantity)
        } else if (product == 'peanuts') {
            console.log(1.60 * quantity)
        }
    } else if (city == 'Plovdiv') {
        if (product == 'coffee') {
            console.log(0.40 * quantity)
        } else if (product == 'water') {
            console.log(0.70 * quantity)
        } else if (product == 'beer') {
            console.log(1.15 * quantity)
        } else if (product == 'sweets') {
            console.log(1.30 * quantity)
        } else if (product == 'peanuts') {
            console.log(1.50 * quantity)
        }
    } else if (city == 'Varna') {
        if (product == 'coffee') {
            console.log(0.45 * quantity)
        } else if (product == 'water') {
            console.log(0.70 * quantity)
        } else if (product == 'beer') {
            console.log(1.10 * quantity)
        } else if (product == 'sweets') {
            console.log(1.35 * quantity)
        } else if (product == 'peanuts') {
            console.log(1.55 * quantity)
        }
    }
}