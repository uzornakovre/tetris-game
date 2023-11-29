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

  movePieceLeft() {
    this.activePiece.x -= 1;
    this.hasCollision() && (this.activePiece.x += 1);
  }

  movePieceRight() {
    this.activePiece.x += 1;
    this.hasCollision() && (this.activePiece.x -= 1);
  }

  movePieceDown() {
    this.activePiece.y += 1;

    if (this.hasCollision()) {
      this.activePiece.y -= 1;
      this.lockPiece();
    }
  }

  hasCollision() {
    const { x, y, blocks } = this.activePiece;
    const playfield = this.playfield;

    for (let i = 0; i < blocks.length; i++) {
      for (let j = 0; j < blocks[i].length; j++) {
        if (
          blocks[i][j] && // если значение в матрице тетромино не равно нулю,
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

  lockPiece() {
    const { x, y, blocks } = this.activePiece;
    const playfield = this.playfield;

    for (let i = 0; i < blocks.length; i++) {
      for (let j = 0; j < blocks[i].length; j++) {
        if (blocks[i][j]) {
          // если значение в матрице тетромино не равно нулю
          playfield[y + i][x + j] = blocks[i][j]; // присваеваем нужные значения в поле
        }
      }
    }
  }
}
