function bitcoinMiner(input) {
    let boughtBitcoins = 0;
    let sum = 0;
    let firstDay = 0;

    let sumAll = 0;
    let goldPrice = 67.51;
    let bitcoinPrice = 11949.16;
    let bitcoinCount = 0;
    let bitcoinSum = 0;
    let day = 0;
    
    for (let i = 0; i < input.length; i++) {
        day++;
        let gramsOfGoldThisDay = Number(input[i]);

        if (day % 3 === 0) {
            gramsOfGoldThisDay = gramsOfGoldThisDay * 0.70;
        }
        let singleDay = gramsOfGoldThisDay * goldPrice;
        sumAll += singleDay;

        if (sumAll >= bitcoinPrice) {
            bitcoinCount++;
            boughtBitcoins = Math.floor(sumAll / bitcoinPrice);
            sumAll = sumAll - (boughtBitcoins * bitcoinPrice);
            bitcoinSum += boughtBitcoins;
        }
        if (bitcoinCount === 1) {
            firstDay = day;

        }

    }

    console.log(`Bought bitcoins: ${bitcoinSum}`);

    if (firstDay != 0) {
    console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }

    console.log(`Left money: ${sumAll.toFixed(2)} lv.`);
}
bitcoinMiner([3124.15, 504.212, 2511.124])
bitcoinMiner([100, 200, 300]);
