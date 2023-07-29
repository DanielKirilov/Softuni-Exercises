function playingCards(face, suit) {
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
  const validSuits = ["S", "H", " D", "C"];
  const SuitsRepresentation = {
    S: `\u2660`,
    H: `\u2665`,
    D: `\u2666`,
    C: `\u2663`,
  };
  if (checkIfFaceIsValid(face)) {
    return (result += `${face}${SuitsRepresentation[suit]}`).toString();
  } else {
    throw new Error();
  }
  function checkIfFaceIsValid(face) {
    if (
      validFaces.includes(face) &&
      face.toUpperCase() == face &&
      (face.length == 1 || face.length == 2)
    ) {
      return true;
    }
    return false;
  }
}
console.log(playingCards("A", "S"));
console.log(playingCards("10", "H"));
// console.log(playingCards("1", "C"));
