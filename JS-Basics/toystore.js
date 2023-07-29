function toystore(input) {
    let PriceHoliday = Number(input[0]);
    let puzzlesNum = Number(input[1])
    let dollNum = Number(input[2]);
    let bearNum = Number(input[3]);
    let minionNum = Number(input[4]);
    let truckNum = Number(input[5]);

    num = dollNum + bearNum + minionNum + truckNum + puzzlesNum;

    price = dollNum * 3 + bearNum * 4.10 + minionNum * 8.20 + truckNum * 2 + puzzlesNum * 2.60;

    if (num >= 50) {
        price = price * 0.75;
    }
   
    price = price * 0.90;
    let diff = Math.abs(price - PriceHoliday);

    if (price >= PriceHoliday) {
        
        console.log(`Yes! ${diff.toFixed(2)} lv left.`)
    } else if (PriceHoliday > price) {
       
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`)
    }

}
toystore(["320", "8", "2", "5", "5", "1"])