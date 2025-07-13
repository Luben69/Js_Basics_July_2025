function restaurant(numb_chicken_menus, numb_fish_menus, numb_vegeterian_menus) {
    const chicken_menu = 10.35;
    const fish_menu = 12.40;
    const vegeterian_menu = 8.15;
    const delivery = 2.50;

    let chicken = numb_chicken_menus * chicken_menu;
    let fish = numb_fish_menus * fish_menu;
    let vegeterian = numb_vegeterian_menus * vegeterian_menu;

    let without_desert = chicken + fish + vegeterian;

    let with_desert = without_desert * 1.20;

    let all = with_desert + delivery;

    console.log(all);
}
