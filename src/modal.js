const modalBox = document.querySelector('#modal__box');
const changeGame = document.querySelector('#btn__change-game');
const formMsgGame = document.querySelector('#form__message-game');
let timerId = '';

const displayMessage = (eldom, msg) => {
  clearTimeout(timerId);
  if (msg) {
    eldom.textContent = msg;
    eldom.classList.add('error-message');
  }
  eldom.classList.add('visible');
  timerId = setTimeout(() => {
    eldom.classList.remove('error-message', 'visible');
  }, 10000);
};

const validString = (str) => {
  if (str.match(/^[a-zA-Z0-9À-ÿ\u00f1\u00d1\u00E0\u00FC_\- ]{1,30}$/)) return true;
  return false;
};

const validNumber = (str) => {
  if (str.match(/^[0-9]{1,7}$/)) return true;
  return false;
};

const validateGameForm = (eldom) => {
  eldom.value = eldom.value.trim();
  if (!validString(eldom.value)) {
    displayMessage(formMsgGame, 'Game field only admits alphanumeric, hyphens, underscores, and max 30 characters.');
    return false;
  }
  return true;
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
  title.innerHTML = `LEADERBOARD "${game}"`;
  modalBox.classList.remove('modal__box-display');
};

changeGame.addEventListener('click', displayModalGame);

export {
  displayModalGame, displayMessage, validateGameForm, validString, validNumber, hideModalGame,
};