function demo(input) {
    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);

    let window = Number(1.5 * 1.5);
    let door = Number(1.2 * 2);

    let sidewall = Number(x * y);
    let bothsidewalls = Number((2 * sidewall) - 2 * window)

    let backwall = Number(Math.pow(x, 2));
    let frontBackWall = Number(backwall * 2) - door;

    let walls = Number(frontBackWall + bothsidewalls);
    let greenpaint = Number(walls / 3.4);

    let sideroof = Number(2 * (x * y));
    let frontBackRoof = Number(2 * (x * h / 2));

    let roof = Number(sideroof + frontBackRoof);
    let redpaint = Number(roof / 4.3);

    console.log(greenpaint.toFixed(2));
    console.log(redpaint.toFixed(2));


}
demo(["6", "10", "5.2"])