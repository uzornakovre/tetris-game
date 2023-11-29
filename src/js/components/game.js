import { PLAYFIELD, T } from "../../utils/constants";

export default class Game {
  score = 0;
  lines = 0;
  level = 0;
  playfield = PLAYFIELD;
  activeTetromino = {
    matrix: T,
    x: 0,
    y: 0,
  };

  moveTetrominoLeft() {
    this.activeTetromino.x -= 1;
    this.hasCollision() && (this.activeTetromino.x += 1);
  }

  moveTetrominoRight() {
    this.activeTetromino.x += 1;
    this.hasCollision() && (this.activeTetromino.x -= 1);
  }

  moveTetrominoDown() {
    this.activeTetromino.y += 1;

    if (this.hasCollision()) {
      this.activeTetromino.y -= 1;
      this.lockTetromino();
    }
  }

  hasCollision() {
    const { x, y, matrix } = this.activeTetromino;
    const playfield = this.playfield;

    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (
          matrix[i][j] && // если значение в матрице тетромино не равно нулю,
          (playfield[y + i] === undefined || // ..в поле есть значение с нужным индексом..
            playfield[y + i][x + j] === undefined ||
            playfield[y + i][x + j]) // ..и если значение в поле не равно 0..
        ) {
          return true; // ..тогда есть столкновение
        }
      }
    }
    return false; // в противном случае возвращаем false - столкновения нет
  }

  lockTetromino() {
    const { x, y, matrix } = this.activeTetromino;
    const playfield = this.playfield;

    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j]) {
          // если значение в матрице тетромино не равно нулю
          playfield[y + i][x + j] = matrix[i][j]; // присваеваем нужные значения в поле
        }
      }
    }
  }
}
