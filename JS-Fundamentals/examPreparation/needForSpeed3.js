function needForSpeed3(data) {
    let carsCollection = [];
    let numberOfCars = Number(data.shift());
    for (let i = 0; i < numberOfCars; i++) {
        let tokens = data.shift().split("|");
        let car = tokens[0];
        let mileage = Number(tokens[1]);
        let fuel = Number(tokens[2]);

        carsCollection.push({
            car: car,
            mileage: mileage,
            fuel: fuel,
        })
    }

    for (let line of data) {
        let tokens = line.split(" : ");
        let command = tokens[0];
        let values = tokens.slice(1);

        switch (command) {
            case "Drive": {
                let car = values[0];
                let distance = Number(values[1]);
                let fuel = Number(values[2]);

                for (let i = 0; i < carsCollection.length; i++) {
                    let element = carsCollection[i];
                    if (element["car"] == car) {
                        if (element["fuel"] >= fuel) {
                            element["mileage"] += distance;
                            element["fuel"] -= fuel;
                            console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
                        }
                        else {
                            console.log("Not enough fuel to make that ride");
                        }
                        if (element["mileage"] >= 100000) {
                            carsCollection.splice(i, 1);
                            console.log(`Time to sell the ${car}!`);
                        }
                    }
                }
                break;
            }
            case "Refuel": {
                let car = values[0];
                let additionalFuel = Number(values[1]);
                for (let element of carsCollection) {
                    if (element["car"] == car) {
                        if (element["fuel"] + additionalFuel < 75) {
                            element["fuel"] += additionalFuel; 
                            console.log(`${car} refueled with ${additionalFuel} liters`);
                        }
                        else {
                            let changedAdditionalFuel = 75 - element["fuel"];
                            element["fuel"] += changedAdditionalFuel; 
                            console.log(`${car} refueled with ${changedAdditionalFuel} liters`);
                        }
                    }
                }
                break;
            }
            case "Revert": {
                let car = values[0];
                let kilometers = Number(values[1]);

                for (let element of carsCollection) {
                    if (element["car"] == car) {
                        let newMileage = element["mileage"] - kilometers;

                        if (newMileage > 10000) {
                            console.log(`${car} mileage decreased by ${kilometers} kilometers`);
                            element["mileage"] = newMileage;
                        } else {
                            element["mileage"] = 10000;
                        }
                    }
                }
                break;
            }
            case "Stop": {
                for (let element of carsCollection) {
                    let car = element["car"];
                    let mileage = element["mileage"];
                    let fuel = element["fuel"];

                    console.log(`${car} -> Mileage: ${mileage} kms, Fuel in the tank: ${fuel} lt.`);
                }
                return;
            }
        }
    }
}
needForSpeed3([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
]
)