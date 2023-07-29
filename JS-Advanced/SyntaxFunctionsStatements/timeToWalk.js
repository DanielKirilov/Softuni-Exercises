function timeToWalk(steps, stepsLength, speed) {
    let distanceInMeters = steps * stepsLength;
    let speedMeterInSeconds = speed / 3.6;
    let time = distanceInMeters / speedMeterInSeconds;
    let rest = Math.floor(distanceInMeters / 500);

    let timeInMin = Math.floor(time / 60);
    let timeInSec = Number((time - (timeInMin * 60)).toFixed(0));
    let timeInH = Math.floor(time / 3600);
    timeInMin += rest;
    timeInH += Math.floor(timeInMin / 60);
    timeInMin = timeInMin  % 60;

    let formattedH = timeInH < 10 ? `0${timeInH}` : `${timeInH}`;
    let formattedMin = timeInMin < 10 ? `0${timeInMin}` : `${timeInMin}`;
    let formattedSec = timeInSec < 10 ? `0${timeInSec}` : `${timeInSec}`;

    console.log(`${formattedH}:${formattedMin}:${formattedSec}`);
}
timeToWalk(4000, 0.60, 5)