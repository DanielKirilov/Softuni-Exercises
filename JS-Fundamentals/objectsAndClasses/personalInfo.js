function personalInfo(fName, lName, ageEnter) {
    let info = {
        firstName: fName,
        lastName : lName,
        age: ageEnter
    }
    return info
}
console.log(personalInfo("Peter", "Pan", "20"))