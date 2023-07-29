function daysInMonth(month, year) {
    let date = new Date(year, month, 0);
    let days = date.getDate();
    console.log(days);
}
daysInMonth(1, 2012)