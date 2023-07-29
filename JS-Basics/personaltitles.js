function personaltitles(input) {

    age = Number(input[0]);
    gender = input[1];

    if (gender === "m") {
        if (age >= 16) {
            console.log("Mr.");
        } else if (age < 16) {
            console.log("Master")
        }

    } else if (gender === "f") {
        if (age >= 16) {
            console.log("Ms.");
        } else if (age < 16) {
            console.log("Miss");
        }
    }

}
personaltitles(["16", "f"])