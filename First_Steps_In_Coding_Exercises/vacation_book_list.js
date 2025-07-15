function reader(numb_pages, read_pages_in_hour, days_count) {
    let time_to_read_whole_book = numb_pages / read_pages_in_hour
    let needed_hours_on_a_day = time_to_read_whole_book / days_count
    console.log(needed_hours_on_a_day)
}
