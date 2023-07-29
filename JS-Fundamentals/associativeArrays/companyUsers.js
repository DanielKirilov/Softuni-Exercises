function companyUsers(input) {
    let companies = [];
    let obj = {};
    let checkObj = {};
    let set = new Set();

    for (let line of input) {
        let employees = [];
        let [company, employee] = line.split(" -> ");
        if ((checkObj.hasOwnProperty(company)) && (set.has(employee))) {
            
        } else {
            employees.push(employee);
        }

        if (!(companies.includes(company))) {
            obj[company] = employees.join(" ");
        }
        else {
            employees.unshift(obj[company]);
            obj[company] = employees.join(" ");
        }
        companies.push(company);
        checkObj[company] = employee;
        set.add(employee);
    }
    let sortedObj = Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0]));

    for (let key of sortedObj) {
        console.log(key[0]);

        key[1].split(" ").forEach(x => console.log(`-- ${x}`))
    }
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'])
console.log("-----------------");
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'])