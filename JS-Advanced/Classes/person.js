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
let person = new Person("Anna", "Simpson", 22, "anna@yahoo.com");
console.log(person.toString());
