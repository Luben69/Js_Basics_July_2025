function shopping(budget, n_video_card, n_processors, n_rams) {
    const video_card_price = 250;
    const processor_price = (n_video_card * video_card_price) * 0.35;
    const ram_price = (n_video_card * video_card_price) * 0.1;

    let bought_video_cards = n_video_card * video_card_price;
    let bought_processors = n_processors * processor_price;
    let bought_ram = n_rams * ram_price;

    let final_sum = bought_video_cards + bought_processors + bought_ram;

    if (n_video_card > n_processors) {
        final_sum *= 0.85;
    }

    if (budget >= final_sum) {
        console.log(`You have ${(budget - final_sum).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(final_sum - budget).toFixed(2)} leva more!`);
    }
}
