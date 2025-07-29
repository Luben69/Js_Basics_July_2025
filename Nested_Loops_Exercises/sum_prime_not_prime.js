function prime(input) {
    let sum_of_prime_numbers = 0;
    let sum_of_not_prime_numbers = 0;
    let index = 0;

    while (true) {
        let command = input.shift();
        if (command === 'stop') {
            break;
        }

        let is_prime = true;
        let the_number = Number(command);

        if (the_number < 0) {
            console.log('Number is negative.');
            continue;
        }

        if (the_number <= 1) {
            sum_of_not_prime_numbers +=the_number;
            continue;
        }

        for (let i = 2; i <= Math.sqrt(the_number); i++) {
            if (the_number % i === 0) {
                is_prime = false;
                break;
            }
        }
        if (is_prime) {
            sum_of_prime_numbers += the_number;
        } else {
            sum_of_not_prime_numbers += the_number;
        }
    }
    console.log(`Sum of all prime numbers is: ${sum_of_prime_numbers}`);
    console.log(`Sum of all non prime numbers is: ${sum_of_not_prime_numbers}`);
}