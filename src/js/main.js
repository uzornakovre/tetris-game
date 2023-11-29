import "../assets/styles/index.scss";
import { T } from "../utils/constants.js";
import Game from "./components/game.js";

const game = new Game();
window.T = T;

window.game = game;
