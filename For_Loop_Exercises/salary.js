function checking(arguments) {
    let opened_tabs = arguments.shift();
    let salary = arguments.shift();

    const facebook_fine = 150;
    const instagram_fine = 100;
    const reddit_fine = 50;

    for (i = 0; i < opened_tabs; i ++) {
        if (arguments[i] == 'Facebook') {
            salary -= facebook_fine;
        } else if (arguments[i] == 'Instagram') {
            salary -= instagram_fine;
        } else if (arguments[i] == 'Reddit') {
            salary -= reddit_fine;
        }

        if (salary <= 0) {
            console.log('You have lost your salary.');
            break;
        }
    }

    if (salary > 0) {
        console.log(Math.round(salary));
    }
}