function demo(input) {
    let Pages = Number(input[0]);
    let PagesPerHour = Number(input[1]);
    let Hours = Number(input[2]);

    let HoursNeededTwoDays = Number(Pages / PagesPerHour);
    let HoursNeededOneDays = Number(HoursNeededTwoDays / Hours);

    console.log(HoursNeededOneDays);
}
demo(["212 ","20 ","2 "])