function check(n) {
    if (n <= 10) {
        console.log('slow');
    } else if (n > 10 && n <= 50) {
        console.log('average');
    } else if (n > 50 && n <= 150) {
        console.log('fast');
    } else if (n > 150 && n <= 1000) {
        console.log('ultra fast');
    } else {
        console.log('extremely fast');
    }
}