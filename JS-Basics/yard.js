function demo(input) {

    let meters = Number(input[0]);
    let sum = Number(meters * 7.61);
    let discount = Number(sum * 0.18);
    let finalresult = Number(sum - discount);

    let resultmessage = `The final price is: ${finalresult} lv.`
    let discountmessage = `The discount is: ${discount} lv.`

    console.log(resultmessage);
    console.log(discountmessage);
}
demo(["550"])