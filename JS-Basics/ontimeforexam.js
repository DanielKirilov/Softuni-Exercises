function ontimeforexam(input) {

    let hoursExam = Number(input[0]);
    let minutesExam = Number(input[1]);

    let actualHours = Number(input[2]);
    let actualMinutes = Number(input[3]);

    let examTime = hoursExam * 60 + minutesExam;
    let actualTime = actualHours * 60 + actualMinutes;

    let diff = Math.abs(examTime - actualTime);
    let hourDiff = Math.floor(diff / 60);
    let minuteDiff = Math.ceil(diff % 60);

    if (examTime >= actualTime) {
        if (diff <= 30) {
            console.log("On Time");
            if (diff <= 30 && diff != 0) {
                console.log(`${diff} minutes before the start`);
            }
        } else if (diff > 30) {
            console.log("Early");

            if (diff <= 59) {
                console.log(`${minuteDiff} minutes before the start`)
            } else if (diff >= 60 && minuteDiff < 10) {
                console.log(`${hourDiff}:0${minuteDiff} hours before the start`);
            } else if (diff >= 60 && minuteDiff >= 10) {
                console.log(`${hourDiff}:${minuteDiff} hours before the start`);
            }
        }
    }
 else if (examTime < actualTime) {
    console.log("Late")
    if (diff <= 59) {
        console.log(`${minuteDiff} minutes after the start`)
    } else {
        if (minuteDiff < 10) {
            console.log(`${hourDiff}:0${minuteDiff} hours after the start`)
        } else {
            console.log(`${hourDiff}:${minuteDiff} hours after the start`)
        }
    }
}
}
ontimeforexam(["9", "00", "10", "30"])