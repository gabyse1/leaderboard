import './scss/style.scss';
import DataBoard from './dataBoard.js';

const data = new DataBoard();
const refreshBtn = document.querySelector('#btn__refresh');
const inputForm = document.querySelector('#form__input');
const inputUser = document.querySelector('#inp__user');
const inputScore = document.querySelector('#inp__score');
const scoreList = document.querySelector('#score__list');
const formMessage = document.querySelector('#form__message');

const displayMessage = (err) => {
  if (err) {
    formMessage.textContent = err;
    formMessage.classList.add('error-message');
  }
  formMessage.classList.add('visible');
  setTimeout(() => {
    formMessage.classList.remove('visible');
  }, 5000);
};

const validateForm = () => {
  formMessage.classList.remove('error-message');
  if (inputUser.value === '') {
    inputUser.focus();
    formMessage.textContent = 'User field is required.';
    formMessage.classList.add('error-message');
    return false;
  }
  if (inputScore.value === '' || inputScore.value <= 0) {
    inputScore.focus();
    formMessage.textContent = 'Score field must be a positive number.';
    formMessage.classList.add('error-message');
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
    else getScoresList();
  });
};

const addNewGame = () => {
  data.addGame().then(() => {
    if (data.message !== 'Successful') displayMessage(data.message);
    else getScoresList();
  });
};

// events listener
refreshBtn.addEventListener('click', getScoresList);

inputForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (validateForm()) {
    addNewScore();
    inputUser.value = '';
    inputScore.value = '';
    formMessage.textContent = 'Score added successfully';
  }
  displayMessage();
});

window.addEventListener('load', addNewGame);
