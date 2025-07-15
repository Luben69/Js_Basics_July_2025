function equipment(year_tax) {
    let shoes = year_tax - (year_tax * 0.4)
    let clothes = shoes - (shoes * 0.2)
    let ball = clothes * 1/4
    let accs = ball * 1/5

    let final_sum = year_tax + shoes + clothes + ball + accs

    console.log(final_sum)
}
