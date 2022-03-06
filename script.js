"use strict";

const cards = [
  1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
  10, 10, 10, 10, 10, 10, 10,
];
function randomCard() {
  let randomN = Math.trunc(Math.random() * 52);
  return cards[randomN];
}

let current1 = document.querySelector("#current--0").textContent;
let current2 = document.querySelector("#current--1").textContent;
let rollBtn = document.querySelector(".btn-roll");
let holdBtn = document.querySelector(".btn-hold");
let score1 = document.querySelector("#score--0").textContent;
let score2 = document.querySelector("#score--1").textContent;
let stop1 = document.querySelector(".btn-stop1");
let stop2 = document.querySelector(".btn-stop2");
let allBuy1 = 0;
let allBuy2 = 0;
let player1 = document.querySelector(".player--0");
let player2 = document.querySelector(".player--1");
let stopGame = 0;
let newGame = document.querySelector(".btn-new");

rollBtn.addEventListener("click", function () {
  if (player1.classList.contains("player--active")) {
    let random = randomCard();
    document.querySelector("#current--0").textContent = random;
    allBuy1 += random;
    document.querySelector("#score--0").textContent = allBuy1;
    if (allBuy1 > 21) {
      alert("Player 1 queimou");
    }
  } else {
    let random = randomCard();
    document.querySelector("#current--1").textContent = random;
    allBuy2 += random;
    document.querySelector("#score--1").textContent = allBuy2;
    if (allBuy2 > 21) {
      alert("Player 2 queimou");
    }
  }
  if (player1.classList.contains("player--active")) {
    player1.classList.remove("player--active");
    player2.classList.add("player--active");
  } else if (player2.classList.contains("player--active")) {
    player1.classList.add("player--active");
    player2.classList.remove("player--active");
  }
});

holdBtn.addEventListener("click", function () {
  if (player1.classList.contains("player--active")) {
    player1.classList.remove("player--active");
    player2.classList.add("player--active");
  } else if (player2.classList.contains("player--active")) {
    player1.classList.add("player--active");
    player2.classList.remove("player--active");
  }
});

stop1.addEventListener("click", function () {
  if (player1.classList.contains("player--active")) {
    stopGame++;
    stop1.disabled = true;
    gameStop();
    if (player1.classList.contains("player--active")) {
      player1.classList.remove("player--active");
      player2.classList.add("player--active");
    } else if (player2.classList.contains("player--active")) {
      player1.classList.add("player--active");
      player2.classList.remove("player--active");
    }
  }
});
stop2.addEventListener("click", function () {
  if (player2.classList.contains("player--active")) {
    stopGame++;
    gameStop();
    stop2.disabled = true;
    if (player1.classList.contains("player--active")) {
      player1.classList.remove("player--active");
      player2.classList.add("player--active");
    } else if (player2.classList.contains("player--active")) {
      player1.classList.add("player--active");
      player2.classList.remove("player--active");
    }
  }
});

function gameStop() {
  if (stopGame === 2) {
    if (allBuy1 > allBuy2) alert("Player 1 win");
    else if (allBuy2 > allBuy1) alert("Player 2 win");
    else if (allBuy1 === 21 && allBuy1 === allBuy2) alert("tie");
  }
}
console.log(current2);
newGame.addEventListener("click", function () {
  stopGame = 0;
  document.querySelector("#current--0").textContent = "0";
  document.querySelector("#current--1").textContent = "0";
  document.querySelector("#score--0").textContent = "0";
  document.querySelector("#score--1").textContent = "0";
  allBuy1 = 0;
  allBuy2 = 0;
  if (player2.classList.contains("player--active")) {
    player1.classList.add("player--active");
    player2.classList.remove("player--active");
  }
});
