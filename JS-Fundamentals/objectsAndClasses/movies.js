function names(input) {
    let director = "";
    let date = "";
    let name = "";
    let moviesObj = {};
    for (let line of input) {

        line = line.split(" ");

        if (line.includes("addMovie")) {
            name = line.slice(1).join(" ");
            moviesObj.name = name;

            for (let secondLine of input) {
                if (secondLine.includes(`${name} directedBy`)) {
                    director = secondLine.replace(`${name} directedBy `,"");
                    moviesObj.director = director;
                }

                if (secondLine.includes(`${name} onDate`)) {
                    date = secondLine.split(" ").slice(-1).join(" ");
                    moviesObj.date = date;
                }
            }
        }
        if (Object.keys(moviesObj).length >= 3) {
            console.log(JSON.stringify(moviesObj));
        }
        moviesObj = {}
    }

}
names([
    'addMovie Fast and Furious',

    'addMovie Godfather',

    'Inception directedBy Christopher Nolan',

    'Godfather directedBy Francis Ford Coppola',

    'Godfather onDate 29.07.2018',

    'Fast and Furious onDate 30.07.2018',

    'Batman onDate 01.08.2018',

    'Fast and Furious directedBy Rob Cohen'
])
console.log("----------------");
names([
    'addMovie The Avengers',

    'addMovie Superman',

    'The Avengers directedBy Anthony Russo',

    'The Avengers onDate 30.07.2010',

    'Captain America onDate 30.07.2010',

    'Captain America directedBy Joe Russo'
])