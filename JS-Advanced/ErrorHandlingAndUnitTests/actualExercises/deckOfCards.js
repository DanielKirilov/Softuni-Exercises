function printDeckOfCards(cards) {
  function createCard(face, suit) {
    let result = "";
    const validFaces = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
      "A",
    ];
    const validSuits = ["S", "H", "D", "C"];
    const SuitsRepresentation = {
      S: `\u2660`,
      H: `\u2665`,
      D: `\u2666`,
      C: `\u2663`,
    };
    if (checkIfFaceIsValid(face, suit)) {
      return (result += `${face}${SuitsRepresentation[suit]}`).toString();
    } else {
      wrongCard = face + suit;
      throw new Error();
    }
    function checkIfFaceIsValid(face, suit) {
      if (
        validFaces.includes(face) &&
        face.toUpperCase() == face &&
        (face.length == 1 || face.length == 2 ) &&
        validSuits.includes(suit)
      ) {
        return true;
      }
      return false;
    }
  }

  let finalResult = "";
  let wrongCard = "";
  try {
    for (let card of cards) {
      let suit = card[card.length - 1];
      let face = card.substring(0, card.length - 1);
      finalResult += createCard(face, suit) + " ";
    }
    console.log(finalResult.slice(0, finalResult.length - 1));
  } catch (error) {
    console.log(`Invalid card: ${wrongCard}`);
  }
}
printDeckOfCards(["AS", "10D", "KH", "2C"]);
printDeckOfCards(["10G", "3D", "10D", "2"]);
