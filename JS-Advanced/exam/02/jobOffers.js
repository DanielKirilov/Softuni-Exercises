class JobOffers {
  constructor(e, p) {
    this.employer = e;
    this.position = p;
    this.jobCandidates = [];
  }
  jobApplication(candidates) {
    let result = "You successfully added candidates: ";
    let index;
    let alreadyFound = false;
    let people = [];
    for (let i = 0; i < candidates.length; i++) {
      let candidate = candidates[i];
      let [name, education, yearsExperience] = candidate.split("-");
      yearsExperience = Number(yearsExperience);
      for (let j = 0; j < this.jobCandidates.length; j++) {
        let person = this.jobCandidates[j];
        if (person["name"] == name) {
          alreadyFound = true;
          index = j;
          break;
        }
      }
      if (alreadyFound) {
        if (this.jobCandidates[index]["yearsExperience"] < yearsExperience)
          this.jobCandidates[index]["yearsExperience"] = yearsExperience;
      } else {
        people.push(name);
        this.jobCandidates.push({ name, education, yearsExperience });
      }
    }
    result = `${result}${people.join(", ")}.`;
    return result;
  }
  jobOffer(chosenPerson) {
    let [candidateName, minimalExperience] = chosenPerson.split("-");
    minimalExperience = Number(minimalExperience);
    let isAvaialable = false;
    let candidateProperty;
    for (let candidate of this.jobCandidates) {
      if (candidate["name"] == candidateName) {
        isAvaialable = true;
        candidateProperty = candidate;
      }
    }
    if (isAvaialable) {
      if (candidateProperty["yearsExperience"] >= minimalExperience) {
        candidateProperty["yearsExperience"] = "hired";
        return `Welcome aboard, our newest employee is ${candidateName}.`;
      } else {
        throw new Error(
          `${candidateName} does not have enough experience as ${this.position}, minimum requirement is ${minimalExperience} years.`
        );
      }
    } else {
      throw new Error(`${candidateName} is not in the candidates list!`);
    }
  }
  salaryBonus(name) {
    let isAvaialable = false;
    let personProperty;
    for (let person of this.jobCandidates) {
      if (person["name"] == name) {
        isAvaialable = true;
        personProperty = person;
      }
    }
    if (isAvaialable) {
      if (personProperty["education"] == "Bachelor") {
        return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`;
      } else if (personProperty["education"] == "Master") {
        return `${name} will sign a contract for {this.employer}, as ${this.position} with a salary of $60,000 per year!`;
      } else {
        return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`;
      }
    } else {
      throw new Error(`${name} is not in the candidates list!`);
    }
  }
  candidatesDatabase() {
    let result = "Candidates list:";
    let resultPeople = [];
    if (this.jobCandidates.length == 0) {
      throw new Error("Candidate Database is empty!");
    }
    this.jobCandidates.sort((a, b) => a["name"].localeCompare(b["name"]));
    for (let candidate of this.jobCandidates) {
      resultPeople.push(`${candidate["name"]}-${candidate["yearsExperience"]}`);
    }
    for (let person of resultPeople) {
      result += `\n${person}`;
    }
    return result;
  }
}
let Jobs = new JobOffers("Google", "Strategy Analyst");
console.log(
  Jobs.jobApplication([
    "John Doe-Bachelor-10",
    "Peter Parker-Master-5",
    "Daniel Jones- Bachelor-18",
  ])
);
console.log(Jobs.jobOffer("John Doe-8"));
console.log(Jobs.jobOffer("Peter Parker-4"));
console.log(Jobs.salaryBonus("John Doe"));
console.log(Jobs.salaryBonus("Peter Parker"));
