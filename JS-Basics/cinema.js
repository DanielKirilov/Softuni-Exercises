function cinema(input) {

    let typeProjection = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);

    let price = 0;

    if(typeProjection === "Premiere") {

        price = rows * columns * 12;
        console.log(price.toFixed(2));

    } else if (typeProjection === "Normal") {

        price = rows * columns * 7.50;
        console.log(price.toFixed(2));

    } else if (typeProjection === "Discount") {

        price = rows * columns * 5;
        console.log(price.toFixed(2));

    }

}
cinema(["Premiere","10","12"])