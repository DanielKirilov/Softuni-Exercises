function timeplusfifteenmin(input) {

    let H = Number(input[0]);
    let M = Number(input[1]);
    let time = H * 60 + M + 15;
    let timeh = Math.floor(time / 60);
    let timem = time % 60;

    if (timeh > 23) {
        timeh = 0;
    }
    if (timem < 10) {
        console.log(`${timeh}:0${timem}`);
    } else
        console.log(`${timeh}:${timem}`);

}

timeplusfifteenmin(["23", "50"])