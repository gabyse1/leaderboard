const modalBox = document.querySelector('#modal__box');
const changeGame = document.querySelector('#btn__change-game');

const displayModalMessage = (msg) => {
  const formMsg = document.querySelector('#form__message-game');
  formMsg.textContent = msg;
  formMsg.classList.add('error-message', 'visible');
  setTimeout(() => {
    formMsg.classList.remove('error-message', 'visible');
  }, 5000);
};

const createLS = () => {
  let games = JSON.parse(localStorage.getItem('GAMES'));
  if (!games) {
    localStorage.setItem('GAMES', JSON.stringify([]));
    games = JSON.parse(localStorage.getItem('GAMES'));
  }
  return games;
};

const addOptions = (value, desc) => {
  const selOption = document.createElement('option');
  selOption.setAttribute('value', value);
  selOption.textContent = desc;
  return selOption;
};

const displayModalGame = () => {
  const games = createLS();
  const selGames = document.querySelector('#select__game');
  selGames.innerHTML = '';
  if (games.length === 0) selGames.appendChild(addOptions('', 'There is not a game. Add a new one'));
  else selGames.appendChild(addOptions('', 'Game list'));
  games.forEach((game) => {
    selGames.appendChild(addOptions(game.idG, game.nameG));
  });
  modalBox.classList.add('modal__box-display');
};

const hideModalGame = (game) => {
  const title = document.querySelector('#title');
  title.innerHTML = `LEADERBOARD - ${game}`;
  modalBox.classList.remove('modal__box-display');
};

changeGame.addEventListener('click', displayModalGame);

export { displayModalGame, displayModalMessage, hideModalGame };