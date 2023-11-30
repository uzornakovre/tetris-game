export default class View {
  constructor(element, width, height, rows, columns) {
    this.element = element;
    this.width = width;
    this.height = height;

    this.canvas = document.createElement("canvas");
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.canvas.className = "game__playfield";
    this.ctx = this.canvas.getContext("2d");

    this.tetrominoWidth = this.width / columns;
    this.tetrominoHeight = this.height / rows;

    this.element.appendChild(this.canvas);
  }

  render({ playfield }) {
    this.clearPlayfield();
    this.renderPlayfield(playfield);
  }

  clearPlayfield() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }

  renderPlayfield(playfield) {
    for (let y = 0; y < playfield.length; y++) {
      const line = playfield[y];
      for (let x = 0; x < line.length; x++) {
        const tetromino = line[x];

        if (tetromino) {
          this.renderTetromino(
            x * this.tetrominoWidth, // отступ по x
            y * this.tetrominoHeight, // отступ по y
            this.tetrominoWidth, // ширина блока
            this.tetrominoHeight, // высота блока)
            "red" // цвет блока
          );
        }
      }
    }
  }

  renderTetromino(x, y, width, height, color) {
    this.ctx.fillStyle = color; // цвет заливки
    this.ctx.strokeStyle = "yellow"; // цвет обводки
    this.ctx.lineWidth = 2; // ширина обводки

    this.ctx.fillRect(x, y, width, height);
    this.ctx.strokeRect(x, y, width, height);
  }
}
