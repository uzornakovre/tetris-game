import { T } from "../../utils/constants";

export default class Game {
  score = 0;
  lines = 0;
  level = 0;
  playfield = this.createPlayField();
  activeTetromino = {
    matrix: T,
    x: 0,
    y: 0,
  };

  getState() {
    const playfield = this.createPlayField();
    const { x, y, matrix } = this.activeTetromino;

    for (let i = 0; i < this.playfield.length; i++) {
      playfield[i] = [];
      for (let j = 0; j < this.playfield[i].length; j++) {
        playfield[i][j] = this.playfield[i][j];
      }
    }

    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j]) {
          playfield[y + i][x + j] = matrix[i][j];
        }
      }
    }

    return {
      playfield,
    };
  }

  createPlayField() {
    const playfield = [];
    for (let y = 0; y < 20; y++) {
      playfield[y] = [];
      for (let x = 0; x < 10; x++) {
        playfield[y][x] = 0;
      }
    }

    return playfield;
  }

  moveTetrominoLeft() {
    this.activeTetromino.x -= 1;
    this.hasCollision() && (this.activeTetromino.x += 1);
  }

  moveTetrominoRight() {
    this.activeTetromino.x += 1;
    console.log(this.activeTetromino);
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

  rotateMatrix() {
    const { matrix } = this.activeTetromino;
    const length = matrix.length;
    const rotatedMatrix = [];

    for (let i = 0; i < length; i++) {
      rotatedMatrix[i] = [];
      for (let j = 0; j < length; j++) {
        rotatedMatrix[i][j] = matrix[length - j - 1][i];
      }
    }

    this.activeTetromino.matrix = rotatedMatrix;

    if (this.hasCollision()) {
      this.activeTetromino.matrix = matrix;
    }
  }
}
