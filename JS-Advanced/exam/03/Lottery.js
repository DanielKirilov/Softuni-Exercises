let chai = require("chai");
let expect = chai.expect;

const lottery = {
  buyLotteryTicket(ticketPrice, ticketCount, buy) {
    if (buy === false) {
      throw new Error("Unable to buy lottery ticket!");
    } else {
      if (
        ticketPrice <= 0 ||
        ticketCount < 1 ||
        typeof ticketPrice !== "number" ||
        typeof ticketCount !== "number" ||
        typeof buy !== "boolean"
      ) {
        throw new Error("Invalid input!");
      } else {
        let totalPrice = ticketPrice * ticketCount;
        return `You bought ${ticketCount} tickets for ${totalPrice}$.`;
      }
    }
  },
  checkTicket(ticketNumbers, luckyNumbers) {
    if (
      !Array.isArray(ticketNumbers) ||
      !Array.isArray(luckyNumbers) ||
      ticketNumbers.length !== 6 ||
      luckyNumbers.length !== 6
    ) {
      throw new Error("Invalid input!");
    }

    const uniqueTicketNumbers = ticketNumbers.filter(
      (number, index, array) => array.indexOf(number) === index
    );
    let winningNumbers = 0;

    for (const number of uniqueTicketNumbers) {
      if (luckyNumbers.includes(number)) {
        winningNumbers++;
      }
    }

    if (winningNumbers >= 3 && winningNumbers < 6) {
      return "Congratulations you win, check your reward!";
    } else if (winningNumbers === 6) {
      return "You win the JACKPOT!!!";
    }
  },
  secondChance(ticketID, secondChanceWinningIDs) {
    if (
      typeof ticketID !== "number" ||
      !Array.isArray(secondChanceWinningIDs)
    ) {
      throw new Error("Invalid input!");
    }
    if (secondChanceWinningIDs.includes(ticketID)) {
      return "You win our second chance prize!";
    } else {
      return "Sorry, your ticket didn't win!";
    }
  },
};

describe("check", function () {
  describe("buyLotteryTicket", function () {
    it("check for false inputs - 1", function () {
      let ticketPrice = "";
      let ticketCount = 3;
      let buy = true;

      let result = () =>
        lottery.buyLotteryTicket(ticketPrice, ticketCount, buy);
      expect(result).to.throw("Invalid input!");
    });
    it("check for false inputs - 2", function () {
      let ticketPrice = 53;
      let ticketCount = 3;
      let buy = [];

      let result = () =>
        lottery.buyLotteryTicket(ticketPrice, ticketCount, buy);
      expect(result).to.throw("Invalid input!");
    });
    it("check for false inputs - 3", function () {
      let ticketPrice = 3;
      let ticketCount = [];
      let buy = true;

      let result = () =>
        lottery.buyLotteryTicket(ticketPrice, ticketCount, buy);
      expect(result).to.throw("Invalid input!");
    });
    it("check for false inputs - 4", function () {
      let ticketPrice = "";
      let ticketCount = [];
      let buy = "";

      let result = () =>
        lottery.buyLotteryTicket(ticketPrice, ticketCount, buy);
      expect(result).to.throw("Invalid input!");
    });
    it("if buy is false - 1", function () {
      let ticketPrice = "235";
      let ticketCount = 53;
      let buy = false;

      let result = () =>
        lottery.buyLotteryTicket(ticketPrice, ticketCount, buy);
      expect(result).to.throw("Unable to buy lottery ticket!");
    });
    it("if buy is false - 2", function () {
      let ticketPrice = 3;
      let ticketCount = 53;
      let buy = false;

      let result = () =>
        lottery.buyLotteryTicket(ticketPrice, ticketCount, buy);
      expect(result).to.throw("Unable to buy lottery ticket!");
    });
    it("correct output - 1", function () {
      let ticketPrice = 1;
      let ticketCount = 1;
      let buy = true;

      let result = lottery.buyLotteryTicket(ticketPrice, ticketCount, buy);
      expect(result).to.equal(`You bought 1 tickets for 1$.`);
    });
    it("correct output - 2", function () {
      let ticketPrice = 2;
      let ticketCount = 3;
      let buy = true;

      let result = lottery.buyLotteryTicket(ticketPrice, ticketCount, buy);
      expect(result).to.equal(`You bought 3 tickets for 6$.`);
    });
  });
  describe("checkTicket", function () {
    it("check for false inputs - 1", function () {
      let ticketNumbers = 3;
      let luckyNumbers = [];

      let result = () => lottery.checkTicket(ticketNumbers, luckyNumbers);
      expect(result).to.throw("Invalid input!");
    });
    it("check for false inputs - 2", function () {
      let ticketNumbers = [];
      let luckyNumbers = "asd";

      let result = () => lottery.checkTicket(ticketNumbers, luckyNumbers);
      expect(result).to.throw("Invalid input!");
    });
    it("check for false inputs - 3", function () {
      let ticketNumbers = {};
      let luckyNumbers = 2;

      let result = () => lottery.checkTicket(ticketNumbers, luckyNumbers);
      expect(result).to.throw("Invalid input!");
    });
    it("correct output - 1", function () {
      let ticketNumbers = [1, 2, 3, 4, 5, 6];
      let luckyNumbers = [1, 2, 3, 4, 5, 5];

      let result = lottery.checkTicket(ticketNumbers, luckyNumbers);
      expect(result).to.equal("Congratulations you win, check your reward!");
    });
    it("correct output - 2", function () {
      let ticketNumbers = [1, 2, 3, 4, 5, 6];
      let luckyNumbers = [1, 2, 3, 4, 5, 6];

      let result = lottery.checkTicket(ticketNumbers, luckyNumbers);
      expect(result).to.equal("You win the JACKPOT!!!");
    });
  });
  describe("secondChance", function () {
    it("check for false inputs - 1", function () {
      let ticketID = [];
      let secondChanceWinningIDs = 3;

      let result = () => lottery.secondChance(ticketID, secondChanceWinningIDs);
      expect(result).to.throw("Invalid input!");
    });
    it("check for false inputs - 2", function () {
      let ticketID = [];
      let secondChanceWinningIDs = [];

      let result = () => lottery.secondChance(ticketID, secondChanceWinningIDs);
      expect(result).to.throw("Invalid input!");
    });
    it("check for false inputs - 3", function () {
      let ticketID = 3;
      let secondChanceWinningIDs = 34;

      let result = () => lottery.secondChance(ticketID, secondChanceWinningIDs);
      expect(result).to.throw("Invalid input!");
    });
    it("check valid input - 1", function () {
      let ticketID = 3;
      let secondChanceWinningIDs = [1, 2, 3];

      let result = lottery.secondChance(ticketID, secondChanceWinningIDs);
      expect(result).to.equal("You win our second chance prize!");
    });
    it("check valid input - 2", function () {
      let ticketID = 4;
      let secondChanceWinningIDs = [1, 2, 3];

      let result = lottery.secondChance(ticketID, secondChanceWinningIDs);
      expect(result).to.equal("Sorry, your ticket didn't win!");
    });
  });
});
//"You win our second chance prize!"
//"Sorry, your ticket didn't win!"
