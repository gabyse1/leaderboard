export default class DataBoard {
  constructor() {
    this.data = [];
    this.url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
    this.idGame = '';
    this.message = '';
  }

  refreshScores = () => {
    this.data.sort((a, b) => b.score - a.score);
  }

  getScores = async () => {
    try {
      await fetch(`${this.url}games/${this.idGame}/scores/`)
        .then((response) => response.json())
        .then((data) => {
          this.data = data.result;
          this.refreshScores();
          if (this.data.length === 0) {
            this.data = [{ user: `Game with ID: ${this.idGame} is empty. </br> Add scores`, score: '' }];
          }
        });
    } catch {
      this.data = [{ user: 'Data is not available for now. Try again later.', score: '' }];
    }
    return this.data;
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

  addGame = async () => {
    try {
      if (!this.loadLocalStorage()) {
        await fetch(`${this.url}games/`, {
          method: 'POST',
          body: JSON.stringify({ name: "Gaby's game" }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
          .then((response) => response.json())
          .then((data) => {
            this.idGame = data.result.slice(14, 34);
            if (data.result === `Game with ID: ${this.idGame} added.`) {
              this.message = 'Successful';
              this.saveLocalStorage();
            } else this.message = data.result;
          });
      } else this.message = 'Successful';
    } catch {
      this.message = 'The game could not be created. Try it again later.';
    }
  }

  saveLocalStorage = () => {
    localStorage.setItem('GAMES', JSON.stringify({ idG: this.idGame, nameG: "Gaby's game" }));
  };

  loadLocalStorage = () => {
    const localGames = JSON.parse(localStorage.getItem('GAMES'));
    if (localGames && localGames.idG) {
      this.idGame = localGames.idG;
      return true;
    }
    return false;
  };
}