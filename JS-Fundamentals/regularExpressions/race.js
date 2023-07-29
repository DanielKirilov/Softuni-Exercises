function race(input) {
    let patternName = /[a-zA-Z]/g;
    let patternDistance = /[0-9]/g;
    let validParticipants = input.shift();
    let result = {};

    for (let line of input) {
        if (line === "end of race") {
            break;
        }
        let distance = 0;
        let participant = line.match(patternName).join("");
        let distanceArr = line.match(patternDistance);
        for (let num of distanceArr) {
            distance += Number(num);
        }
        if (validParticipants.includes(participant)) {
            if (result.hasOwnProperty(participant)) {
                result[participant] += distance;
            } else {
                result[participant] = distance;
            }
        }
    }
    let sortedResult = Object.entries(result).sort((a, b) => b[1] - a[1]);
        console.log(`1st place: ${sortedResult[0][0]}`);
        console.log(`2nd place: ${sortedResult[1][0]}`);
        console.log(`3rd place: ${sortedResult[2][0]}`);
}
race(['George, Peter, Bill, Tom',

    'G4e@55or%6g6!68e!!@ ',

    'R1@!3a$y4456@',

    'B5@i@#123ll',

    'G@e54o$r6ge#',

    '7P%et^#e5346r',

    'T$o553m&6',

    'end of race'])