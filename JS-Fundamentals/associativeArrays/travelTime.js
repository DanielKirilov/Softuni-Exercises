function travelTime(input) {
    let cityObj = {};
    let countryObj = {};

    for (let line of input) {
        let [country, city, cost] = line.split(" > ");
        cityObj = {};


        if (!(countryObj.hasOwnProperty(country))) {
            cityObj[city] = cost;
            countryObj[country] = cityObj;
        }
        else {
            if (cityObj[city] < cost && cityObj.hasOwnProperty(city)) {
                cityObj[city] = cost;
                continue;
            }
            cityObj[city] = cost;
            countryObj[country] = cityObj;
        }
    }
    let sortedCountries = Object.keys(countryObj).sort((a, b) => a.localeCompare(b));
    for (let key of sortedCountries) {
        let currentCity = countryObj[key].split(" > ")[0];
        console.log(`${key} -> ${currentCity} -> ${cityObj[currentCity]}`);
    }
}
travelTime([

    "Bulgaria > Sofia > 500",

    "Bulgaria > Sopot > 800",

    "France > Paris > 2000",

    "Albania > Tirana > 1000",

    "Bulgaria > Sofia > 200"

])