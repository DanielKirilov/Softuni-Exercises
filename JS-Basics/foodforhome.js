function demo(input) {
    
    let ChickenMenu = Number(input[0]);
    let FishMenu = Number(input[1]);
    let VeganMenu = Number(input[2]);

    let ChickenMenuPrice = (ChickenMenu * 10.35);
    let FishMenuPrice = (FishMenu * 12.40);
    let VeganMenuPrice = (VeganMenu * 8.15);
    let Delivery = 2.50
     
    let MenuSum = (ChickenMenuPrice + FishMenuPrice + VeganMenuPrice);
    let Desert = (0.20 * MenuSum);
    let FinalPrice = (MenuSum + Desert + Delivery);

    console.log(FinalPrice);
}
demo(["2 ","4 ","3 "])