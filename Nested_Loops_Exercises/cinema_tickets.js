function cinema(input) {
    let student_tickets_count = 0;
    let standard_tickets_count = 0;
    let kid_tickets_count = 0;
    let dictionary_for_final_result = {};

    let name_of_movie = input.shift();

    while (name_of_movie !== 'Finish') {
        let free_places = Number(input.shift());
        let places_taken = 0;
        while (places_taken < free_places) {
            let ticket = input.shift();
            if (ticket === 'End') {
                break;
            } else if (ticket === 'standard') {
                standard_tickets_count ++;
                places_taken ++;
            } else if (ticket === 'kid') {
                kid_tickets_count ++;
                places_taken ++;
            } else if (ticket === 'student') {
                student_tickets_count ++;
                places_taken ++;
            }
        }
        dictionary_for_final_result[name_of_movie] = `${((places_taken/free_places) * 100).toFixed(2)}% full.`;
        name_of_movie = input.shift();
    }
    for (let movie in dictionary_for_final_result) {
        console.log(`${movie} - ${dictionary_for_final_result[movie]}`);
    }
    let total_tickets = standard_tickets_count + student_tickets_count + kid_tickets_count
    console.log(`Total tickets: ${total_tickets}`);
    console.log(`${((student_tickets_count / total_tickets) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((standard_tickets_count / total_tickets) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((kid_tickets_count / total_tickets) * 100).toFixed(2)}% kids tickets.`);
}