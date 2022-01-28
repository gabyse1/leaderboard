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

const displayMessage = (err) => {
  if (err) {
    formMsgScore.textContent = err;
    formMsgScore.classList.add('error-message');
  }
  formMsgScore.classList.add('visible');
  setTimeout(() => {
    formMsgScore.classList.remove('visible');
  }, 5000);
};

const validateForm = () => {
  formMsgScore.classList.remove('error-message');
  if (inputUser.value === '') {
    inputUser.focus();
    formMsgScore.textContent = 'User field is required.';
    formMsgScore.classList.add('error-message');
    return false;
  }
  if (inputScore.value === '' || inputScore.value <= 0) {
    inputScore.focus();
    formMsgScore.textContent = 'Score field must be a positive number.';
    formMsgScore.classList.add('error-message');
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
    if (data.message !== 'Successful') displayMessage(data.message);
  });
};

const addNewGame = () => {
  data.addGame(inputGame.value).then(() => {
    if (data.message !== 'Successful') {
      MODAL.displayModalMessage(data.message);
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
  if (validateForm()) {
    addNewScore();
    inputUser.value = '';
    inputScore.value = '';
    formMsgScore.textContent = 'Score added successfully';
  }
  displayMessage();
});

gameForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addNewGame();
});

selectGame.addEventListener('change', (e) => {
  if (e.target.value !== '') {
    data.idGame = e.target.value;
    MODAL.hideModalGame(e.target.options[e.target.selectedIndex].text);
    getScoresList();
  }
});

window.addEventListener('load', MODAL.displayModalGame());