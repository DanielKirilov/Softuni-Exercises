function record(input) {
    let worldRecord = Number(input[0]);
    let meters = Number(input[1]);
    let secondsForMeter = Number(input[2]);

    waterFlow = Math.floor(meters / 15);
    TotalTime = meters * secondsForMeter;
    TotalTime = TotalTime + waterFlow * 12.5;


    if (TotalTime < worldRecord) {
        console.log(`Yes, he succeeded! The new world record is ${TotalTime.toFixed(2)} seconds.`)
    } else {
        let diff = Math.abs(TotalTime - worldRecord);
        console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`)

    }
}

record(["55555.67", "3017", "5.03"])