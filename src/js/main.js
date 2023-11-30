import "../assets/styles/index.scss";
import Game from "./components/game.js";
import View from "./components/view.js";

const rootElement = document.querySelector("#root");

const game = new Game();
const view = new View(rootElement, 480, 640, 20, 10);

window.game = game;
window.view = view;

const handleKeyDown = (evt) => {
  switch (evt.key) {
    case "ArrowLeft":
      game.moveTetrominoLeft();
      view.render(game.getState());
      break;
    case "ArrowUp":
      game.rotateMatrix();
      view.render(game.getState());
      break;
    case "ArrowRight":
      game.moveTetrominoRight();
      view.render(game.getState());
      break;
    case "ArrowDown":
      game.moveTetrominoDown();
      view.render(game.getState());
      break;
  }
};

document.addEventListener("keydown", handleKeyDown);
