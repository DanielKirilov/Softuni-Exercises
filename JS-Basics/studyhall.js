function demo(input) {
    let lenghtmeters = Number(input[0]);
    let widthmeters = Number(input[1]);

    let lenght = Number(lenghtmeters * 100);
    let width = Number(widthmeters * 100);

    let areahall = Number(lenght * width);

    let department = 2;
    let door = 1;
    let corridor = 100;
    WorkPlacesWidth = 70;
    WorkPlacesLenght = 120;

    let widthplaces = Number(width - corridor);
    let workplacesOne = Math.floor(Number(widthplaces / WorkPlacesWidth));
    let workplacesTwo = Math.floor(Number(lenght / WorkPlacesLenght));

    let workplaces = Number((workplacesOne * workplacesTwo) - (department+ door));


    console.log(workplaces);


}
demo(["15","8.9"])