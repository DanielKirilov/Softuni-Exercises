function smallShop(input) {
    let snack = input[0];
    let city = input[1];
    let quantity = Number(input[2]);

    let price = 0;

    if (city === "Sofia") {

        switch (snack) {
            case "coffee":
                price = 0.50
                totalPrice = quantity * price; console.log(totalPrice); break;
            case "water":
                price = 0.80;
                totalPrice = quantity * price; console.log(totalPrice); break;
            case "beer":
                price = 1.20;
                totalPrice = quantity * price; console.log(totalPrice); break;
            case "sweets":
                price = 1.45;
                totalPrice = quantity * price; console.log(totalPrice); break;
            case "peanuts":
                price = 1.60;
                totalPrice = quantity * price; console.log(totalPrice); break;
        }


    } else if (city === "Plovdiv") {

        switch (snack) {
            case "coffee":
                price = 0.40
                totalPrice = quantity * price; console.log(totalPrice); break;
            case "water":
                price = 0.70;
                totalPrice = quantity * price; console.log(totalPrice); break;
            case "beer":
                price = 1.15;
                totalPrice = quantity * price; console.log(totalPrice); break;
            case "sweets":
                price = 1.30;
                totalPrice = quantity * price; console.log(totalPrice); break;
            case "peanuts":
                price = 1.50;
                totalPrice = quantity * price; console.log(totalPrice); break;
        }

    } else if (city === "Varna") {

        switch (snack) {
            case "coffee":
                price = 0.45
                totalPrice = quantity * price; console.log(totalPrice); break;
            case "water":
                price = 0.70;
                totalPrice = quantity * price; console.log(totalPrice); break;
            case "beer":
                price = 1.10;
                totalPrice = quantity * price; console.log(totalPrice); break;
            case "sweets":
                price = 1.35;
                totalPrice = quantity * price; console.log(totalPrice); break;
            case "peanuts":
                price = 1.55;
                totalPrice = quantity * price; console.log(totalPrice); break;
        }

    }
}
smallShop(["coffee", "Varna", "2"])