function bonuspointexercise(input) {
    let Num = Number(input[0]);
    let bonus = 0;

    if (Num <= 100) {
        bonus = 5;
    } else if (Num >= 1000) {
    bonus = Num * 0.10
    } else 
    bonus = Num * 0.20
    if (Num % 2 == 0) {
        bonus = bonus + 1;
    } else if (Num % 10 == 5) {
        bonus = bonus + 2;
    }
    console.log(bonus);
    console.log(Num + bonus);
}
bonuspointexercise(["273"])