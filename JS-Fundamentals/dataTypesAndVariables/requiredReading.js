function requiredReading(numberOfPages, pagesPerHour, daysNeeded) {
    totalTime = numberOfPages / pagesPerHour;
    timePerDay = totalTime / daysNeeded;
    console.log(timePerDay);
}
requiredReading(212, 20, 2)