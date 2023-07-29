function summeroutfit(input) {

    let degrees = Number(input[0]);
    let timeOfTheDay = input[1];


    if (10 <= degrees && degrees <= 18) {
        switch (timeOfTheDay) {
            case "Morning":
                Outfit = "Sweatshirt"
                Shoes = "Sneakers"
                console.log(`It's ${degrees} degrees, get your ${Outfit} and ${Shoes}.`); break;


            case "Afternoon":
                Outfit = "Shirt"
                Shoes = "Moccasins"
                console.log(`It's ${degrees} degrees, get your ${Outfit} and ${Shoes}.`); break;


            case "Evening":
                Outfit = "Shirt"
                Shoes = "Moccasins"
                console.log(`It's ${degrees} degrees, get your ${Outfit} and ${Shoes}.`); break;
        }

    } else if (18 < degrees && degrees <= 24) {

        switch (timeOfTheDay) {

            case "Morning":
                Outfit = "Shirt"
                Shoes = "Moccasins"
                console.log(`It's ${degrees} degrees, get your ${Outfit} and ${Shoes}.`); break;

            case "Afternoon":
                Outfit = "T-Shirt"
                Shoes = "Sandals"
                console.log(`It's ${degrees} degrees, get your ${Outfit} and ${Shoes}.`); break;

            case "Evening":
                Outfit = "Shirt"
                Shoes = "Moccasins"
                console.log(`It's ${degrees} degrees, get your ${Outfit} and ${Shoes}.`); break;
        }
    } else if (degrees >= 25) {

        switch (timeOfTheDay) {

            case "Morning":
                Outfit = "T-Shirt"
                Shoes = "Sandals"
                console.log(`It's ${degrees} degrees, get your ${Outfit} and ${Shoes}.`); break;

            case "Afternoon":
                Outfit = "Swim Suit"
                Shoes = "Barefoot"
                console.log(`It's ${degrees} degrees, get your ${Outfit} and ${Shoes}.`); break;

            case "Evening":
                Outfit = "Shirt"
                Shoes = "Moccasins"
                console.log(`It's ${degrees} degrees, get your ${Outfit} and ${Shoes}.`); break;
        }
    }

}
summeroutfit(["22", "Afternoon"])