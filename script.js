const startBtn = document.querySelector(".start-btn");
const cardButtons = document.querySelectorAll(".btn");
const board = document.getElementById("gameBoard");

const icons = ["⚽", "⚾", "🥎", "🏀", "🏐", "🏈", "🎱", "🏉", "🎳", "🥌"];

// Алгоритм Фишера-Йетса
function shuffleInPlace(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

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

  // вычисляем корень числа карточек, чтобы сетка была максимально квадратной
  const cols = Math.ceil(Math.sqrt(cardsCount));
  board.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

  // берём нужное количество иконок (половину от cardsCount)
  let selectedIcons = shuffleInPlace([...icons]).slice(0, cardsCount / 2);

  // создаём пары
  let cardIcons = [...selectedIcons, ...selectedIcons];

  // перемешиваем все карточки
  shuffleInPlace(cardIcons);

  cardIcons.forEach((icon) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.textContent = icon;
    board.appendChild(card);
  });
});
