"use strict";
let displayMessage = function (message) {
  document.querySelector(".status").textContent = message;
};
let check = document.querySelector(".check");
let score = 20;
let highscore = 0;
document.querySelector(".score-value").textContent = score;
document.querySelector(".highscore").textContent = highscore;
// let number = Number(document.querySelector(".secret-value").textContent);
let number = Math.trunc(Math.random() * 20) + 1;
console.log(number);
check.addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  //if number matches
  if (guess == number) {
    document.querySelector(".secret-value").textContent = number;
    displayMessage("Wow Amazing 👏");
    document.querySelector("body").setAttribute("class", "bg-success");
    document.querySelector(".secret").style.width = "14rem";

    score > highscore
      ? ((highscore = score),
        (document.querySelector(".highscore").textContent = highscore))
      : "";
  } else if (!guess) {
    document.querySelector(".status").textContent = "no number";
  } else if (guess != number) {
    //if guess is not equal to the number
    displayMessage("Try again👎");
    score--;
    document.querySelector(".score-value").textContent = score;
    if (score == 0) {
      displayMessage("You lose");
      document.querySelector("body").setAttribute("class", "bg-danger");
      document.querySelector(".check").setAttribute("disabled", "");
      document.querySelector(".secret-value").textContent = number;
      document.querySelector(".secret").style.width = "14rem";
    } else if (guess > number) {
      displayMessage(
        guess - number > 5 ? "Too high" : "High and somewhere near!"
      );
      // guess - number > 5
      //   ? displayMessage("Too high")
      //   : displayMessage("high and somewhere near!!");
    } else if (guess < number) {
      displayMessage(
        number - guess > 5 ? "Too Low" : "Low and somewhere near!!"
      );
      // number - guess > 5
      //   ? displayMessage("Too Low")
      //   : displayMessage("Low and somewhere near!");
    }
  } else {
    //nothing at all
    document.querySelector(".status").textContent = "error";
  }
});

//resetting the game
let reset = document.querySelector(".again");

reset.addEventListener("click", function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score-value").textContent = score;
  displayMessage("Start Guessing...");
  document.querySelector(".secret").style.width = "9rem";
  document.querySelector(".secret-value").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").removeAttribute("class");
  document.querySelector(".check").removeAttribute("disabled", "");
});
let highReset = document.querySelector(".highReset");
highReset.addEventListener("click", function () {
  highscore = 0;
  document.querySelector(".highscore").textContent = 0;
});
