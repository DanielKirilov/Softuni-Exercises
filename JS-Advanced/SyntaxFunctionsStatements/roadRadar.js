function roadRadar(speed, place) {
    function motorway(speed) {
        let limit = 130;
        if (speed <= limit) {
            console.log(`Driving ${speed} km/h in a ${limit} zone`);
        }
        else {
            let difference = speed - limit;
            let status = "";
            if (difference <= 20) {
                status = "speeding"
            } else if (difference <= 40) {
                status = "excessive speeding";
            } else {
                status = "reckless driving"
            }
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`);
        }
    }
    function interstate(speed) {
        let limit = 90;
        if (speed <= limit) {
            console.log(`Driving ${speed} km/h in a ${limit} zone`);
        }
        else {
            let difference = speed - limit;
            let status = "";
            if (difference <= 20) {
                status = "speeding"
            } else if (difference <= 40) {
                status = "excessive speeding";
            } else {
                status = "reckless driving"
            }
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`);
        }
    }
    function city(speed) {
        let limit = 50;
        if (speed <= limit) {
            console.log(`Driving ${speed} km/h in a ${limit} zone`);
        }
        else {
            let difference = speed - limit;
            let status = "";
            if (difference <= 20) {
                status = "speeding"
            } else if (difference <= 40) {
                status = "excessive speeding";
            } else {
                status = "reckless driving"
            }
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`);
        }
    }
    function residential(speed) {
        let limit = 20;
        if (speed <= limit) {
            console.log(`Driving ${speed} km/h in a ${limit} zone`);
        }
        else {
            let difference = speed - limit;
            let status = "";
            if (difference <= 20) {
                status = "speeding"
            } else if (difference <= 40) {
                status = "excessive speeding";
            } else {
                status = "reckless driving"
            }
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`);
        }
    }
    switch(place) {
        case "motorway": motorway(speed); break;
        case "interstate": interstate(speed); break;
        case "city": city(speed); break;
        case "residential": residential(speed); break;
    }
}
roadRadar(40, 'city');
roadRadar(21, 'residential')
