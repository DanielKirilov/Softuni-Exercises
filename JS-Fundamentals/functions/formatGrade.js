function formatGrade(grade) {
    if (grade < 3.00) {
        result = "Fail";
        console.log(`${result} (2)`);
        return;

    } else if (grade < 3.50) {
        result = "Poor";
    } else if (grade < 4.50) {
        result = "Good";
    } else if (grade < 5.50) {
        result = "Very good";
    } else if (grade >= 5.50) {
        result = "Excellent";
    }
    console.log(`${result} (${grade.toFixed(2)})`);


}
formatGrade(3.33)
formatGrade(2.99)