function loadingBar(num) {
    let percentage = `${num}%`;
    let percentageSigns = "%".repeat(num / 10);
    let dots = ".".repeat(10 - (num / 10));

    if (num === 100) {
        console.log("100% Complete!");
        console.log(`[${percentageSigns}${dots}]`);
    } else {
        console.log(`${percentage} [${percentageSigns}${dots}]`);
        console.log("Still loading...");
    }
}
loadingBar(100)