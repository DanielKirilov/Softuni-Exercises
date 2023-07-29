function tradecommisions(input) {

    let city = input[0];
    let sales = Number(input[1]);
    let totalSales = 0;

    if (0 <= sales && sales <= 500) {
        switch (city) {
            case "Sofia":
                totalSales = sales * 0.05
                console.log(totalSales.toFixed(2)); break;

            case "Varna":
                totalSales = sales * 0.045
                console.log(totalSales.toFixed(2)); break;

            case "Plovdiv":
                totalSales = sales * 0.055
                console.log(totalSales.toFixed(2)); break;

            default:
                console.log("error"); break;

        }

    } else if (500 < sales && sales <= 1000) {
        switch (city) {
            case "Sofia":
                totalSales = sales * 0.07
                console.log(totalSales.toFixed(2)); break;

            case "Varna":
                totalSales = sales * 0.075
                console.log(totalSales.toFixed(2)); break;

            case "Plovdiv":
                totalSales = sales * 0.08
                console.log(totalSales.toFixed(2)); break;

            default:
                console.log("error"); break;


        }

    } else if (1000 < sales && sales <= 10000) {
        switch (city) {
            case "Sofia":
                totalSales = sales * 0.08
                console.log(totalSales.toFixed(2)); break;

            case "Varna":
                totalSales = sales * 0.1
                console.log(totalSales.toFixed(2)); break;

            case "Plovdiv":
                totalSales = sales * 0.12
                console.log(totalSales.toFixed(2)); break;

            default:
                console.log("error"); break;


        }

    } else if (sales > 10000) {
        switch (city) {
            case "Sofia":
                totalSales = sales * 0.12
                console.log(totalSales.toFixed(2)); break;

            case "Varna":
                totalSales = sales * 0.13
                console.log(totalSales.toFixed(2)); break;

            case "Plovdiv":
                totalSales = sales * 0.145
                console.log(totalSales.toFixed(2)); break;

            default:
                console.log("error"); break;
        }

    } else
        console.log("error");

}
tradecommisions(["Sofia", "1500"])