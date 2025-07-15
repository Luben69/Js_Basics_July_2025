function movie(budget, n_statists, price_per_outfit) {
    let decor = budget * 0.1;
    let money_for_outfits = n_statists * price_per_outfit;

    if (n_statists > 150) {
        money_for_outfits *= 0.9;
    }
    
    let money_for_the_movie = decor + money_for_outfits;

    if (budget >= money_for_the_movie) {
        console.log('Action!');
        console.log(`Wingard starts filming with ${(budget - money_for_the_movie).toFixed(2)} leva left.`);
    } else {
        console.log('Not enough money!');
        console.log(`Wingard needs ${(money_for_the_movie - budget).toFixed(2)} leva more.`);
    }

}