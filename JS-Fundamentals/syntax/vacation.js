function vacation(peopleCount, typeOfVacation, dayOfTheWeek) {
    let price = 0;
    let sumPrice = 0;
    switch(dayOfTheWeek) {
        case "Friday":
            switch (typeOfVacation) {
                case "Students":
                    price = 8.45;
                    sumPrice = price * peopleCount;
                    if (peopleCount >= 30) {
                        sumPrice *=  0.85;
                    } break;
                case "Business":
                    price = 10.90;
                    sumPrice = price * peopleCount;
                    if (peopleCount >= 100) {
                        sumPrice -= 10 * price;
                    } break;
                case "Regular":
                    price = 15;
                    sumPrice = price * peopleCount;
                    if (peopleCount >= 10 && peopleCount <= 20) {
                        sumPrice *= 0.95;
                    } break;
            } break;
        case "Saturday":
            switch (typeOfVacation) {
                case "Students":
                    price = 9.80;
                    sumPrice = price * peopleCount;
                    if (peopleCount >= 30) {
                        sumPrice *=  0.85;
                    } break;
                case "Business":
                    price = 15.60;
                    sumPrice = price * peopleCount;
                    if (peopleCount >= 100) {
                        sumPrice -= 10 * price;
                    } break;
                case "Regular":
                    price = 20;
                    sumPrice = price * peopleCount;
                    if (peopleCount >= 10 && peopleCount <= 20) {
                        sumPrice *= 0.95;
                    } break;
            } break;
        case "Sunday":
            switch (typeOfVacation) {
                case "Students":
                    price = 10.46;
                    sumPrice = price * peopleCount;
                    if (peopleCount >= 30) {
                        sumPrice *=  0.85;
                    } break;
                case "Business":
                    price = 16;
                    sumPrice = price * peopleCount;
                    if (peopleCount >= 100) {
                        sumPrice -= 10 * price;
                    } break;
                case "Regular":
                    price = 22.50;
                    sumPrice = price * peopleCount;
                    if (peopleCount >= 10 && peopleCount <= 20) {
                        sumPrice *= 0.95;
                    } break;
            } break;
    }
    console.log(`Total price: ${sumPrice.toFixed(2)}`);

}
vacation(40,"Regular","Saturday")