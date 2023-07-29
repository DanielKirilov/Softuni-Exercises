function demo(input) {
    let Name = (input[0]);
    let Projects = Number(input[1]);
    let Hours = Number(Projects * 3);

    let result = `The architect ${Name} will need ${Hours} hours to complete ${Projects} project/s.`

    console.log(result);


}
demo(["George" ,"4"])