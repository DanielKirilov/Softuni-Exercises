function meetings(input) {
    let obj = {};
    for (let line of input) {
        let [weekDay, namePerson] = line.split(" ");
        if (!(obj.hasOwnProperty(weekDay))) {
            console.log(`Scheduled for ${weekDay}`);
            obj[weekDay] = namePerson;
        }
        else if(obj.hasOwnProperty(weekDay)) {
            console.log(`Conflict on ${weekDay}!`);
        }
    }
    for (let key of Object.keys(obj)) {
        console.log(`${key} -> ${obj[key]}`);
    }
} 
meetings(['Monday Peter',

'Wednesday Bill',

'Monday Tim',

'Friday Tim'])