function extractEmails(text) {
    let emailRegex = /(?<=\s|^)([A-Za-z0-9]+[A-Za-z0-9.\-_]*)@[a-z]+\-?[a-z]+(\.[a-z]+)+/g
    let emails = text.match(emailRegex);
    for (let email of emails) {
        console.log(email);
    }
}
extractEmails(`Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information d.bass@gmail.com.`)