const startBtn = document.querySelector(".start-btn");
const cardButtons = document.querySelectorAll(".btn");
const board = document.getElementById("gameBoard");

// Выбор кол-ва карт в игре
cardButtons.forEach((button) => {
  button.addEventListener("click", () => {
    cardButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
  });
});

// Начало игры
startBtn.addEventListener("click", () => {
  const activeBtn = document.querySelector(".card-options button.active");
  const cardsCount = activeBtn.dataset.cards;

  board.innerHTML = "";

  for (let i = 1; i <= cardsCount; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    board.appendChild(card);
  }
});
