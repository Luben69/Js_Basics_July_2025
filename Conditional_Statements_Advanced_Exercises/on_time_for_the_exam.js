function examArrival(examHour, examMinute, arrivalHour, arrivalMinute) {
    let examTime = examHour * 60 + examMinute;
    let arrivalTime = arrivalHour * 60 + arrivalMinute;

    let diff = arrivalTime - examTime;

    if (diff > 0) {
        console.log("Late");
        if (diff < 60) {
            console.log(`${diff} minutes after the start`);
        } else {
            let h = Math.floor(diff / 60);
            let m = diff % 60;
            console.log(`${h}:${m.toString().padStart(2, '0')} hours after the start`);
        }
    } else if (diff >= -30) {
        console.log("On time");
        if (diff !== 0) {
            console.log(`${Math.abs(diff)} minutes before the start`);
        }
    } else {
        console.log("Early");
        let earlyDiff = Math.abs(diff);
        if (earlyDiff < 60) {
            console.log(`${earlyDiff} minutes before the start`);
        } else {
            let h = Math.floor(earlyDiff / 60);
            let m = earlyDiff % 60;
            console.log(`${h}:${m.toString().padStart(2, '0')} hours before the start`);
        }
    }
}
