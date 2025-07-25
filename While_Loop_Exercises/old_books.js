function book(input) {
    let wanted_book = input.shift();
    let checked_books = 0;
    let index = 0;

    while (input[index] !== 'No More Books') {
        if (input[index] === wanted_book) {
            console.log(`You checked ${checked_books} books and found it.`);
            break;
        } else {
            checked_books ++;
            index ++;
        }
    }
    if (input[index] === 'No More Books'){
        console.log('The book you search is not here!');
        console.log(`You checked ${checked_books} books.`);
    }
}