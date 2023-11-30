export default class View {
  static colors = {
    1: "blue",
    2: "grey",
    3: "green",
    4: "violet",
    5: "brown",
    6: "red",
    7: "darkred",
  };
  constructor(element, width, height, rows, columns) {
    this.element = element;
    this.width = width;
    this.height = height;

    this.canvas = document.createElement("canvas");
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.canvas.className = "game__playfield";
    this.ctx = this.canvas.getContext("2d");

    this.blockWidth = this.width / columns;
    this.blockHeight = this.height / rows;

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
        const block = line[x];

        if (block) {
          this.renderBlock(
            x * this.blockWidth, // отступ по x
            y * this.blockHeight, // отступ по y
            this.blockWidth, // ширина блока
            this.blockHeight, // высота блока)
            View.colors[block] // цвет блока
          );
        }
      }
    }
  }

  renderBlock(x, y, width, height, color) {
    this.ctx.fillStyle = color; // цвет заливки
    this.ctx.strokeStyle = "yellow"; // цвет обводки
    this.ctx.lineWidth = 2; // ширина обводки

    this.ctx.fillRect(x, y, width, height);
    this.ctx.strokeRect(x, y, width, height);
  }
}
