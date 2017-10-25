// All code should be written in this file.

// Player One variables
let playerOneMoveOneType;
let playerOneMoveTwoType;
let playerOneMoveThreeType;

let playerOneMoveOneValue;
let playerOneMoveTwoValue;
let playerOneMoveThreeValue;


// Player Two variables
let playerTwoMoveOneType;
let playerTwoMoveTwoType;
let playerTwoMoveThreeType;

let playerTwoMoveOneValue;
let playerTwoMoveTwoValue;
let playerTwoMoveThreeValue;

// Let's set the player move function here...
let setPlayerMoves = (player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) => {
  // missing edge cases
  if ((moveOneValue + moveTwoValue + moveThreeValue) > 99) {
    return;
  }
  if ((moveOneValue < 1 ) || (moveTwoValue < 1) || (moveThreeValue < 1)) {
    return;
  }
  if (!moveOneType || !moveTwoType || !moveThreeType)  {
    return;
  }
  if (!moveOneValue || !moveTwoValue || !moveThreeValue)  {
    return;
  }
  let validMoveType = (moveType) => {
    return (moveType === "rock") || (moveType === "paper") || (moveType === "scissors");
  }
  if (!validMoveType(moveOneType) || !validMoveType(moveTwoType) || !validMoveType(moveThreeType)) {
    return;
  }
  // Players move valids imputs
  if (player === "Player One") {
    playerOneMoveOneType = moveOneType;
    playerOneMoveOneValue = moveOneValue;
    playerOneMoveTwoType = moveTwoType;
    playerOneMoveTwoValue = moveTwoValue;
    playerOneMoveThreeType = moveThreeType;
    playerOneMoveThreeValue = moveThreeValue;
  } else if (player === "Player Two") {
    playerTwoMoveOneType = moveOneType;
    playerTwoMoveOneValue = moveOneValue;
    playerTwoMoveTwoType = moveTwoType;
    playerTwoMoveTwoValue = moveTwoValue;
    playerTwoMoveThreeType = moveThreeType;
    playerTwoMoveThreeValue = moveThreeValue;
  }
};

// Let's set the round winner function here...
let getRoundWinner = (roundNumber) => {
  // Here is the switch to define the roundNumber...
  switch (roundNumber) {
    case 1:
      return getMoveWinner(playerOneMoveOneType,
                          playerOneMoveOneValue,
                          playerTwoMoveOneType,
                          playerTwoMoveOneValue);
    case 2:
      return getMoveWinner(playerOneMoveTwoType,
                           playerOneMoveTwoValue,
                           playerTwoMoveTwoType,
                           playerTwoMoveTwoValue);
    case 3:
      return getMoveWinner(playerOneMoveThreeType,
                           playerOneMoveThreeValue,
                           playerTwoMoveThreeType,
                           playerTwoMoveThreeValue);
    default:
      return null;
  }
}
  // correct winner with rock at player one
  let getMoveWinner = (playerOneMoveType, playerOneMoveValue, playerTwoMoveType, playerTwoMoveValue,) => {

    if (!playerOneMoveType || !playerOneMoveValue || !playerTwoMoveType || !playerTwoMoveValue) {
      return null;
    }

    if (playerOneMoveType === playerTwoMoveType) {
      if (playerOneMoveValue > playerTwoMoveValue) {
        return "Player One";
      } else if (playerOneMoveValue < playerTwoMoveValue) {
        return "Player Two";
      } else {
        return "Tie";
      }
    }

    if (playerOneMoveType === "rock") {
      if (playerTwoMoveType === "scissors") {
        return  "Player One";
      } else {
        return  "Player Two";
      }
    } else if (playerOneMoveType === "paper") {
      if (playerTwoMoveType === "rock") {
        return "Player One";
      } else {
        return "Player Two";
      }
    } else {
      if (playerTwoMoveType === 'paper') {
        return 'Player One';
      } else {
        return 'Player Two';
      }
    }
  }




// Let's set the computer moves function here...
let setComputerMoves = () => {

};

// Let's set the computer moves function here...
let getGameWinner = () => {

  if (!playerOneMoveOneType || !playerOneMoveTwoType ||
      !playerOneMoveThreeType || !playerOneMoveOneValue ||
      !playerOneMoveTwoValue || !playerOneMoveThreeValue ||
      !playerTwoMoveOneType || !playerTwoMoveTwoType ||
      !playerTwoMoveThreeType || !playerTwoMoveOneValue ||
      !playerTwoMoveTwoValue || !playerTwoMoveThreeValue) {
    return null;
  }

  let playerOneWins = 0;
  let playerTwoWins = 0;

  const roundOneWinner = getRoundWinner(1);
  const roundTwoWinner= getRoundWinner(2);
  const roundThreeWinner = getRoundWinner(3);

  let addWins = (winner) => {
    if (winner === "Player One") {
      playerOneWins = playerOneWins + 1;
    } else if (winner === "Player Two") {
      playerTwoWins = playerTwoWins + 1;
    }
  }

  addWins(roundOneWinner);
  addWins(roundTwoWinner);
  addWins(roundThreeWinner);

  if (playerOneWins > playerTwoWins) {
    return "Player One";
  } else if (playerOneWins < playerTwoWins) {
    return "Player Two";
  } else {
    return "Tie";
  }




};
