export default class Game {
  static points = {
    1: 50,
    2: 100,
    3: 500,
    4: 1000,
  };

  score = 0;
  lines = 0;
  playfield = this.createPlayField();
  activeTetromino = this.createTetromino();
  nextTetromino = this.createTetromino();

  get level() {
    return Math.floor(this.lines * 0.1);
  }

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
      score: this.score,
      level: this.level,
      lines: this.lines,
      nextTetromino: this.nextTetromino,
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

  createTetromino() {
    const index = Math.floor(Math.random() * 7);
    const type = "IJLOSTZ"[index];
    const tetromino = {};

    switch (type) {
      case "I":
        tetromino.matrix = [
          [0, 0, 0, 0],
          [1, 1, 1, 1],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ];
        break;
      case "J":
        tetromino.matrix = [
          [0, 0, 0],
          [2, 2, 2],
          [0, 0, 2],
        ];
        break;
      case "L":
        tetromino.matrix = [
          [0, 0, 0],
          [3, 3, 3],
          [3, 0, 0],
        ];
        break;
      case "O":
        tetromino.matrix = [
          [0, 0, 0, 0],
          [0, 4, 4, 0],
          [0, 4, 4, 0],
          [0, 0, 0, 0],
        ];
        break;
      case "S":
        tetromino.matrix = [
          [0, 0, 0],
          [0, 5, 5],
          [5, 5, 0],
        ];
        break;
      case "T":
        tetromino.matrix = [
          [0, 0, 0],
          [0, 6, 0],
          [6, 6, 6],
        ];
        break;
      case "Z":
        tetromino.matrix = [
          [0, 0, 0],
          [7, 7, 0],
          [0, 7, 7],
        ];
        break;
      default:
        throw new Error("Unknown tetromino type");
    }

    tetromino.x = Math.floor((10 - tetromino.matrix[0].length) / 2);
    tetromino.y = -1;
    return tetromino;
  }

  moveTetrominoLeft() {
    this.activeTetromino.x--;
    this.hasCollision() && this.activeTetromino.x++;
  }

  moveTetrominoRight() {
    this.activeTetromino.x++;
    this.hasCollision() && this.activeTetromino.x--;
  }

  moveTetrominoDown() {
    this.activeTetromino.y++;

    if (this.hasCollision()) {
      this.activeTetromino.y--;
      this.lockTetromino();
      const clearedLines = this.clearLines();
      this.updateScore(clearedLines);
      this.updateTetrominos();
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

  clearLines() {
    const rows = 20;
    const columns = 10;
    let lines = [];

    for (let i = rows - 1; i >= 0; i--) {
      let numberOfBlocks = 0;
      for (let j = 0; j < columns; j++) {
        if (this.playfield[i][j]) {
          numberOfBlocks++;
        }
      }
      if (numberOfBlocks === 0) {
        break;
      } else if (numberOfBlocks < columns) {
        continue;
      } else if (numberOfBlocks === columns) {
        lines.unshift(i);
      }
    }

    for (let index of lines) {
      this.playfield.splice(index, 1);
      this.playfield.unshift(new Array(columns).fill(0));
    }

    return lines.length;
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

  updateScore(clearedLines) {
    if (clearedLines > 0) {
      this.score += Game.points[clearedLines] * this.level + 1;
      this.lines += clearedLines;
    }
    console.log(this.score);
    console.log(this.lines);
  }

  updateTetrominos() {
    this.activeTetromino = this.nextTetromino;
    this.nextTetromino = this.createTetromino();
  }
}
