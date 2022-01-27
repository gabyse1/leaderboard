import './scss/style.scss';

const refreshBtn = document.querySelector('#btn__refresh');
const inputForm = document.querySelector('#form__input');
const inputUser = document.querySelector('#inp__user');
const inputScore = document.querySelector('#inp__score');
const scoreList = document.querySelector('#score__list');
const formMessage = document.querySelector('#form__message');
const basicURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
let idGame = '';

const displayError = (err) => {
  formMessage.textContent = err;
  formMessage.classList.add('error-message', 'visible');
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
  if (inputScore.value === '' || +inputScore.value <= 0) {
    inputScore.focus();
    formMessage.textContent = 'Score field is required and must be a postitive number.';
    formMessage.classList.add('error-message');
    return false;
  }
  return true;
};

const buildScoreList = (arr) => {
  scoreList.innerHTML = '';
  arr.forEach((el) => {
    const listItem = document.createElement('li');
    listItem.classList.add('score__list-item');
    listItem.innerHTML = `<p class="score__item-name">${el.user}</p>
          <span class="score__item-score">${el.score}</span>`;
    scoreList.appendChild(listItem);
  });
};

const getScores = async () => {
  let data = [];
  try {
    const response = await fetch(`${basicURL}games/${idGame}/scores/`);
    const scores = await response.json();
    data = scores.result;
    data.sort((a, b) => b.score - a.score);

    if (data.length === 0) {
      data = [{ user: `Game with ID: ${idGame} is empty. </br> Add a score`, score: '' }];
    }
    buildScoreList(data);
  } catch {
    data = [{ user: 'Data is not available for now. Try again later.', score: '' }];
    buildScoreList(data);
  }
};

const addScore = async (user1, score1) => {
  try {
    const response = await fetch(`${basicURL}games/${idGame}/scores/`, {
      method: 'POST',
      body: JSON.stringify({ user: user1, score: +score1 }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    await response.json();
    getScores();
  } catch (err) {
    displayError('The score could not be saved. Try it again later.');
  }
};

const addGame = async () => {
  try {
    const response = await fetch(`${basicURL}games/`, {
      method: 'POST',
      body: JSON.stringify({ name: 'My cool new game' }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await response.json();
    idGame = data.result.slice(14, 34);
    getScores();
  } catch (err) {
    displayError('The game could not be created. Try it again later.');
  }
};

// events listener
refreshBtn.addEventListener('click', getScores);

inputForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (validateForm()) {
    addScore(inputUser.value, inputScore.value);
    inputUser.value = '';
    inputScore.value = '';
    formMessage.textContent = 'Score added successfully';
  }
  formMessage.classList.add('visible');
  setTimeout(() => {
    formMessage.classList.remove('visible');
  }, 5000);
});

window.addEventListener('load', addGame);
