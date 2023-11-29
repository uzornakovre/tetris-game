import { PLAYFIELD, T } from "../../utils/constants";

export default class Game {
  score = 0;
  lines = 0;
  level = 0;
  playfield = PLAYFIELD;
  activePiece = {
    blocks: T,
    x: 0,
    y: 0,
  };
}
