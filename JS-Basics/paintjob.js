function demo(input) {

    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let hours = Number(input[3]);

    let nylonPrice = ((nylon + 2) * 1.50);
    let paintPrice = ((paint * 1.1) * 14.50);
    let thinnerPrice= (thinner * 5.00);
    let bagPrice = 0.40

    let materialsprice = Number(nylonPrice + paintPrice + thinnerPrice + bagPrice);

    let workers = (materialsprice * 0.3) * hours;

    let result = (workers + materialsprice);

    console.log(result); 
}
demo(["10 ","11 ","4 ","8 "])