function towns(input) {
    let obj = {};
    for (let line of input) {
        let [town , latitude, longitude] = line.split(" | ");
        latitude = Number(latitude);
        longitude = Number(longitude);
        obj.town = town;
        obj.latitude = latitude.toFixed(2);
        obj.longitude = longitude.toFixed(2);
        console.log(obj);
    }
}
towns(['Sofia | 42.696552 | 23.32601',

'Beijing | 39.913818 | 116.363625'])