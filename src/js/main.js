import "../assets/styles/index.scss";
import Game from "./components/game.js";
import View from "./components/view.js";
import Controller from "./components/controller.js";

const rootElement = document.querySelector("#root");

const game = new Game();
const view = new View(rootElement, 480, 640, 20, 10);
const controller = new Controller(game, view);

window.controller = controller;
