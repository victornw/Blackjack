"use strict";

const cards = [
  1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
  10, 10, 10, 10, 10, 10, 10,
];
function randomCard() {
  let randomN = Math.trunc(Math.random() * 52);
  return cards[randomN];
}
//VARS
let current1 = document.querySelector("#current--0");
let current2 = document.querySelector("#current--1");
let rollBtn = document.querySelector(".btn-roll");
let holdBtn = document.querySelector(".btn-hold");
let score1 = document.querySelector("#score--0");
let score2 = document.querySelector("#score--1");
let stop1 = document.querySelector(".btn-stop1");
let stop2 = document.querySelector(".btn-stop2");
let allBuy1 = 0;
let allBuy2 = 0;
let player1 = document.querySelector(".player--0");
let player2 = document.querySelector(".player--1");
let stopGame = 0;
let newGame = document.querySelector(".btn-new");
let lock1 = 0;
let lock2 = 0;
let lock = 1;
// ---------------------------------------------------------------
rollBtn.addEventListener("click", function () {
  if (player1.classList.contains("player--active")) {
    let random = randomCard();
    current1.textContent = random;
    allBuy1 += random;
    score1.textContent = allBuy1;
    if (allBuy1 > 21) {
      alert("PLAYER 1 EXCEEDED THE 21 LIMIT! \n PLAYER 2 WINS 🎉");
      return resetGame();
      // changeToPlayer1();
    }
  } else {
    let random = randomCard();
    current2.textContent = random;
    allBuy2 += random;
    score2.textContent = allBuy2;
    if (allBuy2 > 21) {
      alert("PLAYER 2 EXCEEDED THE 21 LIMIT! \n PLAYER 1 WINS 🎉");
      return resetGame();
      // changeToPlayer1();
    }
  }
  changePlayer();
});

holdBtn.addEventListener("click", function () {
  console.log(lock, lock1, lock2);
  if (lock < 2) {
    if (player1.classList.contains("player--active")) {
      lock1++;
    } else if (player2.classList.contains("player--active")) {
      lock2++;
    }
  } else return gameStop();
  console.log("fodase");
  if (lock1 > 0) {
    lock += lock2;
  } else if (lock2 > 0) {
    lock += lock1;
  }
  changePlayer();
});

// stop1.addEventListener("click", function () {
//   if (player1.classList.contains("player--active")) {
//     stopGame++;
//     stop1.disabled = true;
//     gameStop();
//     changePlayer();
//   }
// });
// stop2.addEventListener("click", function () {
//   if (player2.classList.contains("player--active")) {
//     stopGame++;
//     gameStop();
//     stop2.disabled = true;
//     changePlayer();
//   }
// });

function gameStop() {
  if (lock > 2 || lock == 2) {
    if (allBuy1 > allBuy2) {
      alert("Player 1 win");
      resetGame();
    } else if (allBuy2 > allBuy1) {
      alert("Player 2 win");
      resetGame();
    } else if (allBuy1 === 21 && allBuy1 === allBuy2) {
      alert("Tie! both win");
      resetGame();
    } else if (allBuy1 == allBuy2) {
      alert("Tie! both lose");
      resetGame();
    }
  }
}

newGame.addEventListener("click", resetGame);

function resetGame() {
  stopGame = 0;
  document.querySelector("#current--0").textContent = "0";
  document.querySelector("#current--1").textContent = "0";
  document.querySelector("#score--0").textContent = "0";
  document.querySelector("#score--1").textContent = "0";
  allBuy1 = 0;
  allBuy2 = 0;
  lock = 1;
  lock1 = 0;
  lock2 = 0;
  playerStart();
}

function changePlayer() {
  if (player1.classList.contains("player--active")) {
    player1.classList.remove("player--active");
    player2.classList.add("player--active");
  } else if (player2.classList.contains("player--active")) {
    player1.classList.add("player--active");
    player2.classList.remove("player--active");
  }
}

function playerStart() {
  player1.classList.add("player--active");
  player2.classList.remove("player--active");
}
