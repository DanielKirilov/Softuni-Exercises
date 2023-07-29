function demo(input) {

    let veggieprice = Number(input[0]);
    let fruitprice = Number(input[1])
    let veggiekg = Number(input[2]);
    let fruitkg = Number(input[3]);

    let veggie = Number(veggiekg * veggieprice);
    let fruit = Number(fruitkg * fruitprice);

    let resultbgn = Number(veggie + fruit);
    let resulteuro = Number(resultbgn / 1.94);

    console.log(resulteuro.toFixed(2));

}
demo(["0.194","19.4","10","10"])