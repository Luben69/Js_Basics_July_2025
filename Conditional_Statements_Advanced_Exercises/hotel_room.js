function calculateHotelPrice(month, nights) {
    let studioPrice = 0;
    let apartmentPrice = 0;

    if (month === 'May' || month === 'October') {
        studioPrice = 50;
        apartmentPrice = 65;
    } else if (month === 'June' || month === 'September') {
        studioPrice = 75.20;
        apartmentPrice = 68.70;
    } else if (month === 'July' || month === 'August') {
        studioPrice = 76;
        apartmentPrice = 77;
    }

    let totalStudio = studioPrice * nights;
    let totalApartment = apartmentPrice * nights;

    if ((month === 'May' || month === 'October') && nights > 14) {
        totalStudio *= 0.7;
    } else if ((month === 'May' || month === 'October') && nights > 7) {
        totalStudio *= 0.95;
    } else if ((month === 'June' || month === 'September') && nights > 14) {
        totalStudio *= 0.8;
    }

    if (nights > 14) {
        totalApartment *= 0.9;
    }

    console.log(`Apartment: ${totalApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${totalStudio.toFixed(2)} lv.`);
}
