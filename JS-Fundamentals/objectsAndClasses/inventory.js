function inventory(input) {
    let res = [];
    for (let line of input) {
        let [hero, level, items] = line.split(" / ");
        let heroes = {
            hero: hero,
            level: level,
            items: items.split(", ")
        }
        res.push(heroes);
    }
    res.sort((levelA, levelB) => levelA.level - levelB.level);

    for (let heroes of res) {

        console.log(`Hero: ${heroes.hero}`)
        console.log(`level => ${heroes.level}`)
        console.log(`items => ${heroes.items.join(", ")}`);

    }
}
inventory([

    'Isacc / 25 / Apple, GravityGun',

    'Derek / 12 / BarrelVest, DestructionSword',

    'Hes / 1 / Desolator, Sentinel, Antara'

])