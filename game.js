let score;
let scoreStr = localStorage.getItem("score");
resetScore(scoreStr);
function resetScore(scoreStr) {
  score = scoreStr
    ? JSON.parse(scoreStr)
    : {
        win: 0, 
        lose: 0,
        tie: 0,
      };
  score.displayScore = function () {
    return `Score:-  Win:${score.win}  Lose:${score.lose}  Tie:${score.tie}`;
  };
  display();
}
function generateComputerChoice() {
  let randomNumber = Math.random() * 3; // Generate a random number between 0 and 3
  if (randomNumber > 0 && randomNumber <= 1) {
    return "Bat";
  } else if (randomNumber > 1 && randomNumber <= 2) {
    return "Ball";
  } else {
    return "Stump";
  }
}
function getResult(userMove, computerMove) {
  if (userMove === "Bat") {
    if (computerMove === "Ball") {
      score.win++;
      return "You Win!";
    } else if (computerMove === "Stump") {
      score.lose++;
      return "You Lose!";
    } else if (computerMove === "Bat") {
      score.tie++;
      return `It's a Tie!`;
    }
  } else if (userMove === "Ball") {
    if (computerMove === "Stump") {
      score.win++;
      return "You Win!";
    } else if (computerMove === "Bat") {
      score.lose++;
      return "You Lose!";
    } else if (computerMove === "Ball") {
      score.tie++;
      return `It's a Tie!`;
    }
  } else {
    if (computerMove === "Bat") {
      score.win++;
      return "You Win!";
    } else if (computerMove === "Ball") {
      score.lose++;
      return "You Lose!";
    } else if (computerMove === "Stump") {
      score.tie++;
      return `It's a Tie!`;
    }
  }
}
function display(userchoice, computerChoice, resultMsg) {
  localStorage.setItem("score", JSON.stringify(score));
  document.querySelector("#user_move").innerText =
    userchoice !== undefined ? `You have chosen ${userchoice}` : " ";
  document.querySelector("#computer_move").innerText = computerChoice
    ? `Computer Choice is ${computerChoice}`
    : " ";
  document.querySelector("#result").innerText = resultMsg || " ";
  document.querySelector("#score").innerText = score.displayScore();
}
