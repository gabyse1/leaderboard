import './scss/style.scss';
import DataBoard from './dataBoard.js';
import * as MODAL from './modal.js';

const data = new DataBoard();
const refreshBtn = document.querySelector('#btn__refresh');
const scoreForm = document.querySelector('#form__input');
const inputUser = document.querySelector('#inp__user');
const inputScore = document.querySelector('#inp__score');
const scoreList = document.querySelector('#score__list');
const formMsgScore = document.querySelector('#form__message-score');
const gameForm = document.querySelector('#form__game');
const inputGame = document.querySelector('#inp__game');
const selectGame = document.querySelector('#select__game');

const validateScoreForm = () => {
  formMsgScore.classList.remove('error-message');
  inputUser.value = inputUser.value.trim();
  inputScore.value = inputScore.value.trim().replace(/^(0+)/g, '');
  if (!MODAL.validString(inputUser.value)) {
    inputUser.focus();
    MODAL.displayMessage(formMsgScore, 'User field only admits alphanumeric, hyphens, underscores, and max 30 characters.');
    return false;
  }
  if (!MODAL.validNumber(inputScore.value)) {
    inputScore.focus();
    MODAL.displayMessage(formMsgScore, 'Supported scoring range: 1 - 9999999.');
    return false;
  }
  return true;
};

const getScoresList = () => {
  data.getScores().then((elements) => {
    scoreList.innerHTML = '';
    elements.forEach((el) => {
      const listItem = document.createElement('li');
      listItem.classList.add('score__list-item');
      listItem.innerHTML = `<p class="score__item-name">${el.user}</p>
          <span class="score__item-score">${el.score}</span>`;
      scoreList.appendChild(listItem);
    });
  });
};

const addNewScore = () => {
  data.addScore(inputUser.value, inputScore.value).then(() => {
    if (data.message !== 'Successful') MODAL.displayMessage(formMsgScore, data.message);
  });
};

const addNewGame = () => {
  data.addGame(inputGame.value).then(() => {
    if (data.message !== 'Successful') {
      MODAL.displayMessage(data.message);
    } else {
      MODAL.hideModalGame(data.getGame()[0].nameG);
      inputGame.value = '';
      getScoresList();
    }
  });
};

// EVENTS LISTENER
refreshBtn.addEventListener('click', getScoresList);

scoreForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (validateScoreForm()) {
    addNewScore();
    inputUser.value = '';
    inputUser.focus();
    inputScore.value = '';
    formMsgScore.textContent = 'Score added successfully';
  }
  MODAL.displayMessage(formMsgScore);
});

gameForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (MODAL.validateGameForm(inputGame)) addNewGame();
});

selectGame.addEventListener('change', (e) => {
  if (e.target.value !== '') {
    data.idGame = e.target.value;
    MODAL.hideModalGame(e.target.options[e.target.selectedIndex].text);
    getScoresList();
  }
});

window.addEventListener('load', MODAL.displayModalGame());