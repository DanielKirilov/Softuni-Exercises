function demo(input) {
let deposit = input[0]
let index = 1;
let total = 0;

while (deposit !== "NoMoreMoney") {

        currentIncrase = Number(deposit);


if (currentIncrase < 0) {
            console.log("Invalid operation!");
            break;

        }
        total += currentIncrase;
        console.log(`Increase: ${currentIncrase.toFixed(2)}`);
        deposit = input[index]
        index++;

}
console.log(`Total: ${total.toFixed(2)}`);

}
demo(["120", "45.55", "-150"])