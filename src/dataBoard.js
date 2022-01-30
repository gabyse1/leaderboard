export default class DataBoard {
  constructor() {
    this.games = [];
    this.scores = [];
    this.url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
    this.idGame = '';
    this.message = '';
  }

  refreshScores = () => {
    this.scores.sort((a, b) => b.score - a.score);
  }

  getScores = async () => {
    try {
      await fetch(`${this.url}games/${this.idGame}/scores/`)
        .then((response) => response.json())
        .then((data) => {
          this.scores = data.result;
          this.scores.sort((a, b) => b.score - a.score);
          if (this.scores.length === 0) {
            this.scores = [{ user: `Game with ID: ${this.idGame} is empty. </br> Add scores`, score: '' }];
          }
        });
    } catch {
      this.scores = [{ user: 'Data is not available for now. Try again later.', score: '' }];
    }
    return this.scores;
  }

  addScore = async (user1, score1) => {
    try {
      await fetch(`${this.url}games/${this.idGame}/scores/`, {
        method: 'POST',
        body: JSON.stringify({ user: user1, score: score1 }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.result === 'Leaderboard score created correctly.') this.message = 'Successful';
          else this.message = data.result;
        });
    } catch {
      this.message = 'The score could not be saved. Try it again later.';
    }
  }

  addGame = async (game) => {
    try {
      if (!this.existGame(game)) {
        await fetch(`${this.url}games/`, {
          method: 'POST',
          body: JSON.stringify({ name: game }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
          .then((response) => response.json())
          .then((data) => {
            this.idGame = data.result.slice(14, 34);
            if (data.result === `Game with ID: ${this.idGame} added.`) {
              this.message = 'Successful';
              this.saveLocalStorage(game);
            } else this.message = data.result;
          });
      }
    } catch {
      this.message = 'The game could not be created. Try it again later.';
    }
  }

  existGame = (game) => {
    const localGames = JSON.parse(localStorage.getItem('GAMES'));
    if (localGames) {
      this.games = localGames;
      const filterGame = this.games.filter((el) => el.nameG.toLowerCase() === game.toLowerCase());
      if (filterGame.length > 0) {
        this.message = 'A game with this name already exists.';
        return true;
      }
    }
    return false;
  };

  getGame = () => {
    const gn = this.games.filter((el) => el.idG === this.idGame);
    return gn;
  }

  saveLocalStorage = (game) => {
    this.games.push({ idG: this.idGame, nameG: game });
    localStorage.setItem('GAMES', JSON.stringify(this.games));
  };

  loadLocalStorage = () => {
    const localGames = JSON.parse(localStorage.getItem('GAMES'));
    if (localGames) this.games = localGames;
  };
}