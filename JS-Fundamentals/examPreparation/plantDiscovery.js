function plantDiscovery(data) {
    let numberOfCurrentPlants = Number(data.shift());
    let plants = [];
    for (let i = 0; i < numberOfCurrentPlants; i++) {
        let tokens = data.shift().split("<->");
        let name = tokens[0];
        let rarity = Number(tokens[1]);
        let alreadyHere = false;
        for (let line of plants) {
            if (name === plants["plantName"]) {
                plants["rarity"] += 1;
                alreadyHere = true;
                break;
            }
        }
        if (alreadyHere) {
            break;
        }
        plants.push({
            plantName: name,
            rarity: rarity,
            rating: 0,
            ratingCount: 0,
        })

    }

    for (let i = 0; i < data.length; i++) {
        let el = data[i]
        let tokens = el.split(": ");
        let command = tokens[0];

        switch (command) {
            case "Rate": {
                let values = tokens[1].split(" - ");
                let plant = values[0];
                let value = Number(values[1]);
                let validName = false;
                for (let element of plants) {
                    if (element["plantName"] == plant) {
                        element["rating"] += value;
                        element["ratingCount"] += 1;
                        validName = true;
                    }
                }
                if (!validName) {
                    console.log("error");
                }
                break;
            }
            case "Update": {
                let values = tokens[1].split(" - ");
                let plant = values[0];
                let newRarity = Number(values[1]);
                let validName = false;
                for (let element of plants) {
                    if (element["plantName"] == plant) {
                        element["rarity"] = newRarity;
                        validName = true;
                    }
                }
                if (!validName) {
                    console.log("error");
                }
                break;
            }
            case "Reset": {
                let plant = tokens[1];
                let validName = false;
                for (let element of plants) {
                    if (element["plantName"] == plant) {
                        element["rating"] = 0;
                        element["ratingCount"] = 0;
                        validName = true;
                    }
                }
                if (!validName) {
                    console.log("error");
                }
                break;
            }
            case "Exhibition": {
                console.log("Plants for the exhibition:");
                for (let plant of plants) {
                    let name = plant["plantName"];
                    let rarity = plant["rarity"];
                    let rating = Number(plant["rating"]);
                    let ratingCount = plant["ratingCount"];
                    let averageRating = 0;
                    if (rating > 0) {
                        averageRating = rating / ratingCount;
                    }
                    console.log(`- ${name}; Rarity: ${rarity}; Rating: ${averageRating.toFixed(2)}`);
                }
            }
        }
    }

}
plantDiscovery(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"])
