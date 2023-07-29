function worldTour(data) {
    let destinations = data.shift();
    let stop = false
    for (let i = 0; i < data.length; i++) {
        if (stop) {
            break;
        }
        let tokens = data[i].split(" ");
        let command = tokens[0];
        switch (command) {
            case "Add": {
                let values = tokens[1].split(":");
                let index = Number(values[1]);
                let newStop = values[2];

                if (checkValidation(index)) {
                    let beforeStr = destinations.substring(0, index);
                    let afterStr = destinations.substring(index);
                    destinations = beforeStr + newStop + afterStr;
                }
                console.log(destinations);
                break;
            }
            case "Remove": {
                let values = tokens[1].split(":");
                let startIndex = Number(values[1]);
                let endIndex = Number(values[2]);
                if (checkValidation(startIndex) && checkValidation(endIndex)) {
                    for (let i = startIndex; i <= endIndex; i++) {
                        destinations = destinations.replace(destinations[startIndex], "");
                    }
                }
                console.log(destinations);
                break;
            }
            case "Travel": {
                stop = true;
                break;
            }
            default: {
                let values = command.split(":");
                let strangeCommand = values[0];
                let oldDestination = values[1];
                let newDestination = values[2];
                if (strangeCommand === "Switch") {
                    if (destinations.includes(oldDestination)) {
                        
                            destinations = destinations.replaceAll(oldDestination, newDestination);
                        
                    }
                }
                console.log(destinations);
                break;

            }
        }
    }
    console.log(`Ready for world tour! Planned stops: \n${destinations}`);
    function checkValidation(index) {
        if (index >= 0 && index < destinations.length) {
            return true;
        } else {
            return false;
        }
    }

}
worldTour(["Hawai::Cyprys-GreeceHawai",
    "Switch:Hawai:Bulgaria",
    "Travel"])
console.log("--------------");

worldTour(["Albania:Bulgaria:Cyprus:Deuchland",
    "Add Stop:3:Nigeria",
    "Remove Stop:4:8",
    "Switch:Albania: Azərbaycan"])


