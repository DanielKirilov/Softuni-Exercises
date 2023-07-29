function mania(input) {
    let numberOfGroups = Number(input[0]);
    let sumOfPeople = 0;
    let musalla = 0;
    let montBlanc = 0;
    let kilimanjaro = 0;
    let K2 = 0;
    let everest = 0;

    for (let index = 1; index <= numberOfGroups; index++) {

        let numberOfPeopleInGroup = Number(input[index]);
        sumOfPeople += numberOfPeopleInGroup;

        if (numberOfPeopleInGroup <= 5) {

            musalla += numberOfPeopleInGroup;

        } else if (numberOfPeopleInGroup <= 12 && numberOfPeopleInGroup >= 6) {

            montBlanc += numberOfPeopleInGroup;

        } else if (numberOfPeopleInGroup <= 25 && numberOfPeopleInGroup >= 13) {

            kilimanjaro += numberOfPeopleInGroup;

        } else if (numberOfPeopleInGroup <= 40 && numberOfPeopleInGroup >= 26) {

            K2 += numberOfPeopleInGroup;

        } else if (numberOfPeopleInGroup >= 41) {

            everest += numberOfPeopleInGroup;
        }
    }

    console.log(`${((musalla / sumOfPeople) * 100).toFixed(2)}%`);
    console.log(`${((montBlanc / sumOfPeople) * 100).toFixed(2)}%`);
    console.log(`${((kilimanjaro / sumOfPeople) * 100).toFixed(2)}%`);
    console.log(`${((K2 / sumOfPeople) * 100).toFixed(2)}%`);
    console.log(`${((everest / sumOfPeople) * 100).toFixed(2)}%`);


}
mania(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"])