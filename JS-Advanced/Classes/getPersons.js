function getPersons() {
  let result = [];
  class Person {
    constructor(fName, lName, a, mail) {
      this.firstName = fName;
      this.lastName = lName;
      this.age = a;
      this.email = mail;
    }
    toString() {
      return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }
  }
  result.push(new Person("Anna", "Simpson", 22, "anna@yahoo.com"));
  result.push(new Person("SoftUni", undefined, undefined, undefined));
  result.push(new Person("Stephan", "Johnson", 25, undefined));
  result.push(new Person("Gabriel", "Peterson", 24, "g.p@gmail.com"));
  return result;
}
