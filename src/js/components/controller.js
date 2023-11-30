export default class Controller {
  constructor(game, view) {
    this.game = game;
    this.view = view;
    this.intervalId = null;
    this.isPlaying = false;
    document.addEventListener("keydown", this.handleKeyDown.bind(this));
    document.addEventListener("keyup", this.handleKeyUp.bind(this));
    this.view.renderStartScreen();
  }

  updateView() {
    const state = this.game.getState();

    if (state.isGameOver) {
      this.view.renderGameOverScreen(state);
    } else if (!this.isPlaying) {
      this.view.renderPauseScreen();
    } else {
      this.view.renderMainScreen(state);
    }
  }

  update() {
    this.game.moveTetrominoDown();
    this.updateView();
  }

  play() {
    this.isPlaying = true;
    this.startTimer();
    this.updateView();
  }

  pause() {
    this.isPlaying = false;
    this.stopTimer();
    this.updateView();
  }

  reset() {
    this.game.reset();
    this.play();
  }

  startTimer() {
    const speed = 1000 - this.game.getState().level * 100;
    if (!this.intervalId) {
      this.intervalId = setInterval(
        () => this.update(),
        speed > 0 ? speed : 100
      );
    }
  }

  stopTimer() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  handleKeyDown(evt) {
    const state = this.game.getState();

    switch (evt.key) {
      case "ArrowLeft":
        if (this.isPlaying) {
          this.game.moveTetrominoLeft();
          this.updateView();
        }
        break;
      case "ArrowUp":
        if (this.isPlaying) {
          this.game.rotateMatrix();
          this.updateView();
        }
        break;
      case "ArrowRight":
        if (this.isPlaying) {
          this.game.moveTetrominoRight();
          this.updateView();
        }
        break;
      case "ArrowDown":
        if (this.isPlaying) {
          this.game.moveTetrominoDown();
          this.updateView();
          this.stopTimer();
        }
        break;
      case "Enter":
        this.view.renderMainScreen(this.game.getState());
        if (state.isGameOver) {
          this.reset();
        } else if (this.isPlaying) {
          this.pause();
        } else this.play();
        break;
    }
  }

  handleKeyUp(evt) {
    if (evt.key === "ArrowDown" && this.isPlaying) {
      this.startTimer();
    }
  }
}
