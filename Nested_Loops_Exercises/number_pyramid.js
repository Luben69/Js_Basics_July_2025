function pyramid(n) {
    let current = 1;
    let is_bigger = false;
    let print_curent_line = "";
    for (let rows = 1; rows <= n; rows ++) {
        for (let cols = 1; cols <= rows; cols ++) {
            if (current > n) {
                is_bigger = true;
                break;
            }
            print_curent_line += current + " ";
            current ++;
        }
        console.log(print_curent_line);
        print_curent_line = "";
        if (is_bigger) {
            break;
        }
    }
}