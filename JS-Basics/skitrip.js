function skitrip(input) {

    let days = Number(input[0]);
    let typeOfRoom = input[1];
    let review = input[2];

    let price = 0;
    let sleeps = days - 1;

    if (sleeps < 10) {
        switch(typeOfRoom) {
            case "room for one person":
                price = sleeps * 18; break;
            case "apartment":
                price = sleeps * 25;
                price = price * 0.70; break;
            case "president apartment":
                price = sleeps * 35;
                price = price * 0.90; break;
        }

    } else if (sleeps >= 10 && sleeps <= 15) {
        switch(typeOfRoom) {
            case "room for one person":
                price = sleeps * 18; break;
            case "apartment":
                price = sleeps * 25;
                price = price * 0.65; break;
            case "president apartment":
                price = sleeps * 35;
                price = price * 0.85; break;
        }

    } else if (sleeps > 15) {
        switch(typeOfRoom) {
            case "room for one person":
                price = sleeps * 18; break;
            case "apartment":
                price = sleeps * 25;
                price = price * 0.50; break;
            case "president apartment":
                price = sleeps * 35;
                price = price * 0.80; break;
        }

    } if (review === "positive") {
        price = price * 1.25;
    } else if (review === "negative") {
        price = price * 0.90;
    }
    console.log(price.toFixed(2));

}
skitrip(["30",

"president apartment",

"negative"])