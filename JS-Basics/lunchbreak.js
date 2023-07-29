function lunchBreak(input) {
    let show = input[0];
    let timePerEp = Number(input[1]);
    let timebreak = Number(input[2]);

    let lunch = timebreak / 8;
    let relax = timebreak / 4;

    let timeFree = timebreak - relax - lunch;
    let diff = Math.abs(timeFree - timePerEp);

    if (timeFree >= timePerEp) {
        console.log(`You have enough time to watch ${show} and left with ${Math.ceil(diff)} minutes free time.`)
    } else {
    console.log(`You don't have enough time to watch ${show}, you need ${Math.ceil(diff)} more minutes.`)
    }
}
lunchBreak(["Breaking bad",

"42",

"60"])
