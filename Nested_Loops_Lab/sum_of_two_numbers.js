function magic(start, end, magic_number) {
    let made_tries = 0;
    let success = false;

    for (let i = start; i <= end; i ++) {
        if (success) {
            break;
        }
        for (let y = start; y <= end; y ++) {
            made_tries ++;
            if (i + y === magic_number) {
                console.log(`Combination N:${made_tries} (${i} + ${y} = ${magic_number})`);
                success = true;
                break;
            }
        }
    }
    if (!success) {
        console.log(`${made_tries} combinations - neither equals ${magic_number}`);
    }
    
}