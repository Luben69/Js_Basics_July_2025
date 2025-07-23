function password(input) {
    let username = input.shift();
    let password = input.shift();
    
    let attempt = input.shift();

    while (attempt !== password) {
        attempt = input.shift();
    }

    console.log(`Welcome ${username}!`);
}