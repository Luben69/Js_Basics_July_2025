function building(floors, rooms) {
    let my_array = [];

    for (let i = floors; i > 0; i--) {
        let all_rooms = [];

        if (floors == 1) {
            for (let x = 0; x < rooms; x ++) {
                all_rooms.push(`L${i}${x}`);
            }
        } else {
            if (i == floors) {
                for (let n = 0; n < rooms; n ++) {
                    all_rooms.push(`L${i}${n}`)
                }
            } else{
                for (let y = 0; y < rooms; y ++)
                    if (i % 2 == 0) {
                        all_rooms.push(`O${i}${y}`)
                    } else {
                        all_rooms.push(`A${i}${y}`)
                    }
            }
        }
        my_array.push(all_rooms.join(" "));
        
    }
    for (let line of my_array) {
        console.log(line);
    }
}

building(6, 4);