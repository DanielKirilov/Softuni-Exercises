function sumseconds(input) {

let num1 = Number(input[0]);
let num2 = Number(input[1]);
let num3 = Number(input[2]);

timeSum = num1 + num2 + num3;

timeMin = Math.floor(timeSum / 60);
timeSec = timeSum % 60;

if (timeSec < 10) {
    console.log(`${timeMin}:0${timeSec}`)
} else 
console.log(`${timeMin}:${timeSec}`)
}
sumseconds(["35","45","44"])
