const chai = require("chai");
const expect = chai.expect;

const bookSelection = {
  isGenreSuitable(genre, age) {
    if (age <= 12 && (genre === "Thriller" || genre === "Horror")) {
      return `Books with ${genre} genre are not suitable for kids at ${age} age`;
    } else {
      return `Those books are suitable`;
    }
  },
  isItAffordable(price, budget) {
    if (typeof price !== "number" || typeof budget !== "number") {
      throw new Error("Invalid input");
    }

    let result = budget - price;

    if (result < 0) {
      return "You don't have enough money";
    } else {
      return `Book bought. You have ${result}$ left`;
    }
  },
  suitableTitles(array, wantedGenre) {
    let resultArr = [];

    if (!Array.isArray(array) || typeof wantedGenre !== "string") {
      throw new Error("Invalid input");
    }
    array.map((obj) => {
      if (obj.genre === wantedGenre) {
        resultArr.push(obj.title);
      }
    });
    return resultArr;
  },
};
describe("check for errors", function () {
  describe("isGenreSuitable", function () {
    it("valid tests", function () {
      let genre1 = "Thriller";
      let genre2 = "Horror";

      let age1 = 12;
      let age2 = 42;

      let result1 = bookSelection.isGenreSuitable(genre1, age1);
      let result2 = bookSelection.isGenreSuitable(genre2, age2);

      expect(result1).to.equal(
        "Books with Thriller genre are not suitable for kids at 12 age"
      );
      expect(result2).to.equal("Those books are suitable");
    });
  });
  describe("isItAffordable", function () {
    it("valid tests", function () {
      let price = 5;
      let budget = 10;

      let result = bookSelection.isItAffordable(price, budget);

      expect(result).to.equal(`Book bought. You have 5$ left`);
    });
    it("invalid tests - not num 1", function () {
      let price = [];
      let budget = "23";

      let result = () => bookSelection.isItAffordable(price, budget);

      expect(result).to.throw("Invalid input");
    });
    it("invalid tests - not num 2", function () {
      let price = "";
      let budget = 32;

      let result = () => bookSelection.isItAffordable(price, budget);

      expect(result).to.throw("Invalid input");
    });
    it("invalid input - wrong output", function () {
      let price = 42;
      let budget = 32;

      let result = bookSelection.isItAffordable(price, budget);

      expect(result).to.equal("You don't have enough money");
    });
  });
  describe("suitableTitles", function () {
    it("invalid input - books is not an array", function () {
      let books = {};
      let wantedGenre = "az";

      let result = () => bookSelection.suitableTitles(books, wantedGenre);

      expect(result).to.throw("Invalid input");
    });
    it("invalid input - wantedGenre is not a string", function () {
      let books = [];
      let wantedGenre = 42;

      let result = () => bookSelection.suitableTitles(books, wantedGenre);

      expect(result).to.throw("Invalid input");
    });
    it("invalid input - both inputs are wrong", function () {
      let books = {};
      let wantedGenre = 4122;

      let result = () => bookSelection.suitableTitles(books, wantedGenre);

      expect(result).to.throw("Invalid input");
    });
    it("valid input 1", function () {
      let books = [{ title: "The Da Vinci Code", genre: "Comedy" }];
      let wantedGenre = "Comedy";

      let result = bookSelection.suitableTitles(books, wantedGenre);

      expect(result).to.deep.equal(['The Da Vinci Code']);
    });
  });
});
