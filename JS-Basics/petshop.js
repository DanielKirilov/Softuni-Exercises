function demo(input) {
    let dogfood = Number(input[0]);
    let catfood = Number(input[1]);

    let catfoodprice = Number(catfood * 4);
    let dogfoodprice = Number(dogfood * 2.50);

    let result = Number(dogfoodprice + catfoodprice);
 
    console.log(result);

}
demo(["5","4"])