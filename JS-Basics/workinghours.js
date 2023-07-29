function workinghours(input) {
    let hour = Number(input[0]);
    let day = input[1];

    if (10 <= hour && hour <= 18) {
        if (day == "Monday") {
            console.log("open");

        } else if (day == "Tuesday") {
            console.log("open");

        } else if (day == "Wednesday") {
            console.log("open");

        } else if (day == "Thursday") {
            console.log("open");

        } else if (day == "Friday") {
            console.log("open");

        } else if (day == "Saturday") {
            console.log("open");
        } else 
        console.log("closed");


    } else
        console.log("closed");
}


workinghours(["11", "Sunday"])