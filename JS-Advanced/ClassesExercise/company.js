class Company {
  constructor() {
    this.departments = {};
    this.biggestAverageSalary = 0;
  }
  checkInput(input) {
    if (input == "" || input == undefined || input == null || input <= 0) {
      return false;
    }
    return true;
  }
  addEmployee(name, salary, position, department) {
    if (
      this.checkInput(name) &&
      this.checkInput(salary) &&
      this.checkInput(position) &&
      this.checkInput(department)
    ) {
      if (this.departments.hasOwnProperty(department)) {
        let departmentName = this.departments[department];
        departmentName.employeeCount += 1;
        departmentName.totalSalary += salary;
        departmentName.employees.push({ name, salary, position });
        if (departmentName.isOneEmployeeAvgSalary == true) {
          this.biggestAverageSalary = 0;
          departmentName.isOneEmployeeAvgSalary = false;
        }
        if (
          departmentName.totalSalary / departmentName.employeeCount >
          this.biggestAverageSalary
        ) {
          departmentName.isOneEmployeeAvgSalary = true;
          this.biggestAverageSalary = (
            departmentName.totalSalary / departmentName.employeeCount
          ).toFixed(2);
        }
        return `New employee is hired. Name: ${name}. Position: ${position}`;
      } else {
        this.departments[department] = {};
        let departmentName = this.departments[department];
        departmentName.employeeCount = 1;
        departmentName.totalSalary = salary;
        departmentName.employees = [];
        departmentName.employees.push({ name, salary, position });
        departmentName.isOneEmployeeAvgSalary = false;
        if (
          departmentName.totalSalary / departmentName.employeeCount >
          this.biggestAverageSalary
        ) {
          departmentName.isOneEmployeeAvgSalary = true;
          this.biggestAverageSalary = (
            departmentName.totalSalary / departmentName.employeeCount
          ).toFixed(2);
        }
        return `New employee is hired. Name: ${name}. Position: ${position}`;
      }
    } else {
      throw new Error("Invalid input!");
    }
  }
  bestDepartment() {
    let result = "";
    for (let dep in this.departments) {
      if (
        (
          this.departments[dep]["totalSalary"] /
          this.departments[dep]["employeeCount"]
        ).toFixed(2) == this.biggestAverageSalary
      ) {
        result += `Best Department is: ${dep}\n`;
        result += `Average salary: ${this.biggestAverageSalary}\n`;

        let sortedEmployees = Array.from(
          this.departments[dep].employees.sort(
            (a, b) => b.salary - a.salary || a.name.localeCompare(b.name)
          )
        );
        for (let employee of sortedEmployees) {
          result += `${employee.name} ${employee.salary} ${employee.position}\n`;
        }
      }
    }
    return result.trim();
  }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
