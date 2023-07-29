function demo(input) {

    let mackerel = Number(input[0]);
    let sprat = Number(input[1]);

    let bonitoPrice = Number(1.6 * mackerel);
    let safridPrice = Number(1.8 * sprat);
    let musselsPrice = 7.50;

    let bonitoKg = Number(input[2]);
    let safridKg = Number(input[3]);
    let musselsKg = Number(input[4]);

    let bonito = Number(bonitoKg * bonitoPrice);
    let safrid = Number(safridKg * safridPrice);
    let mussels = Number(musselsKg * musselsPrice);

    let fish = Number(bonito + safrid + mussels);

    console.log(fish.toFixed(2))

}
demo(["6.90","4.20","1.5","2.5","1"])