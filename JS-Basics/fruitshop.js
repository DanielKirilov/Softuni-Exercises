function fruitshop(input) {

    let fruit = input[0];
    let dayOfTheWeek = input[1];
    let quantity = Number(input[2])

    let fruitPrice = 0;

    if (dayOfTheWeek === "Monday" || dayOfTheWeek === "Tuesday" || dayOfTheWeek === "Wednesday" || dayOfTheWeek === "Thursday" || dayOfTheWeek === "Friday") {
        switch (fruit) {
            case "banana":
                fruitPrice = quantity * 2.50;
                console.log(fruitPrice.toFixed(2)); break;
            case "apple":
                fruitPrice = quantity * 1.20;
                console.log(fruitPrice.toFixed(2)); break;
            case "orange":
                fruitPrice = quantity * 0.85;
                console.log(fruitPrice.toFixed(2)); break;
            case "grapefruit":
                fruitPrice = quantity * 1.45;
                console.log(fruitPrice.toFixed(2)); break;
            case "kiwi":
                fruitPrice = quantity * 2.70;
                console.log(fruitPrice.toFixed(2)); break;
            case "pineapple":
                fruitPrice = quantity * 5.50;
                console.log(fruitPrice.toFixed(2)); break;
            case "grapes":
                fruitPrice = quantity * 3.85;
                console.log(fruitPrice.toFixed(2)); break;
            default:
                console.log("error"); break;
        }
    } else if (dayOfTheWeek === "Saturday" || dayOfTheWeek === "Sunday"){
        switch (fruit) {
            case "banana":
                fruitPrice = quantity * 2.70;
                console.log(fruitPrice.toFixed(2)); break;
            case "apple":
                fruitPrice = quantity * 1.25;
                console.log(fruitPrice.toFixed(2)); break;
            case "orange":
                fruitPrice = quantity * 0.90;
                console.log(fruitPrice.toFixed(2)); break;
            case "grapefruit":
                fruitPrice = quantity * 1.60;
                console.log(fruitPrice.toFixed(2)); break;
            case "kiwi":
                fruitPrice = quantity * 3.00;
                console.log(fruitPrice.toFixed(2)); break;
            case "pineapple":
                fruitPrice = quantity * 5.60;
                console.log(fruitPrice.toFixed(2)); break;
            case "grapes":
                fruitPrice = quantity * 4.20;
                console.log(fruitPrice.toFixed(2)); break;
            default:
                console.log("error"); break;
        } 
    } else 
    console.log("error");
}
fruitshop(["tomato", "Monday", "0.5"])