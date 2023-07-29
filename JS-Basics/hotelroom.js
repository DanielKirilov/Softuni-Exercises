function hotelrooms(input) {

    let month = input[0];
    let days = Number(input[1]);

    let studio = 0;
    let apartment = 0;

    if(month === "October" || month === "May") {

        studio = 50;
        apartment = 65;

        if (days > 7 && days <= 14) {

            studio = 0.95 * studio;

        } else if (days > 14) {

            studio = 0.70 * studio;
            apartment = 0.90 * apartment;

        }
        studioPrice = studio * days;
        apartmentPrice = apartment * days;


    } else if (month === "June" || month === "September") {

        studio = 75.20;
        apartment = 68.70;

        if (days > 14) {

            studio = 0.80 * studio;
            apartment = 0.90 * apartment;

        }
        studioPrice = studio * days;
        apartmentPrice = apartment * days;

    } else if (month === "July" || month === "August") {

        studio = 76;
        apartment = 77;

        if (days > 14) {
           
            apartment = 0.90 * apartment;

        }
        studioPrice = studio * days;
        apartmentPrice = apartment * days;

    }
    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);

}
hotelrooms(["June","14"])