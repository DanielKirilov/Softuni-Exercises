function netherRealms(input) {
    let inputPattern = /[, ]+/g;
    let demons = input.split(inputPattern);
    let healthPattern = /[^0-9.\/+*-]/g;
    let digitsPattern = /[-]?\d?\.?\d*/g;
    let symbolsPattern = /[*\/]/g;
    let allDemons = {};

    for (let demon of demons) {
        let demonDamage = 0;
        let demonHealth = 0;

        let characters = demon.match(healthPattern);
        let digits = demon.match(digitsPattern);
        let symbols = demon.match(symbolsPattern);
        if (healthPattern.test(demon)) {
            for (let char of characters) {
                let currentValue = char.charCodeAt();
                demonHealth += currentValue
            }
        }
        if (digitsPattern.test(demon)) {
            for (let digit of digits) {
                demonDamage += Number(digit);
            }
        }
        if (symbolsPattern.test(demon)) {
            for (let symbol of symbols) {
                if (symbol === "*") {
                    demonDamage *= 2;
                } else if(symbol === "/") {
                    demonDamage = demonDamage / 2;
                }
            }
        }
        let demonStatistics = demonHealth + " " + demonDamage;
        allDemons[demon] = demonStatistics;
    }
    let sortedDemon = Object.entries(allDemons).sort((a, b) => a[0].localeCompare(b[0]));

    for (let key of sortedDemon) {
        let demonHealth = key[1].split(" ")[0];
        let demonDamage = Number(key[1].split(" ")[1]);
        console.log(`${key[0]} - ${demonHealth} health, ${demonDamage.toFixed(2)} damage`);
    }

}
//netherRealms("M3ph-0.5s-0.5t0.0**")
netherRealms("m%%!@#q3131131! 3131qa3131a#@%$#DS")