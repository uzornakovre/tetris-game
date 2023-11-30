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

    this.playfieldBorderWidth = 4;
    this.playfieldX = this.playfieldBorderWidth;
    this.playfieldY = this.playfieldBorderWidth;
    this.playfieldWidth = (this.width * 2) / 3;
    this.playfieldHeight = this.height;
    this.playfieldInnerWidth =
      this.playfieldWidth - this.playfieldBorderWidth * 2;
    this.playfieldInnerHeight =
      this.playfieldHeight - this.playfieldBorderWidth * 2;

    this.blockWidth = this.playfieldInnerWidth / columns;
    this.blockHeight = this.playfieldInnerHeight / rows;

    this.InfoPanelX = this.playfieldWidth + 10;
    this.InfoPanelY = 0;
    this.infoPanelWidth = this.width / 3;
    this.infoPanelHeight = this.height;

    this.element.appendChild(this.canvas);
  }

  renderMainScreen(state) {
    this.clearPlayfield();
    this.renderPlayfield(state.playfield);
    this.renderInfoPanel(state);
  }

  renderStartScreen() {
    this.ctx.fillStyle = "yellow";
    this.ctx.font = '24px "Nintendo DS BIOS"';
    this.ctx.textAlign = "center";
    this.ctx.textBaseline = "middle";
    this.ctx.fillText("Press ENTER to START", this.width / 2, this.height / 2);
  }

  renderPauseScreen() {
    this.ctx.fillStyle = "rgba(0,0,0,0.6)";
    this.ctx.fillRect(0, 0, this.width, this.height);
    this.ctx.fillStyle = "yellow";
    this.ctx.font = '24px "Nintendo DS BIOS"';
    this.ctx.textAlign = "center";
    this.ctx.textBaseline = "middle";
    this.ctx.fillText("Press ENTER to resume", this.width / 2, this.height / 2);
  }

  renderGameOverScreen({ score }) {
    this.clearPlayfield();
    this.ctx.fillStyle = "rgba(0,0,0,0.6)";
    this.ctx.fillRect(0, 0, this.width, this.height);
    this.ctx.fillStyle = "yellow";
    this.ctx.font = '24px "Nintendo DS BIOS"';
    this.ctx.textAlign = "center";
    this.ctx.textBaseline = "middle";
    this.ctx.fillText("GAME OVER", this.width / 2, this.height / 2 - 50);
    this.ctx.fillText(`Score: ${score}`, this.width / 2, this.height / 2);
    this.ctx.fillText(
      "Press ENTER to restart",
      this.width / 2,
      this.height / 2 + 50
    );
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
            this.playfieldX + x * this.blockWidth, // отступ по x
            this.playfieldY + y * this.blockHeight, // отступ по y
            this.blockWidth, // ширина блока
            this.blockHeight, // высота блока)
            View.colors[block] // цвет блока
          );
        }
      }
    }
    this.ctx.strokeStyle = "yellow";
    this.ctx.lineWidth = this.playfieldBorderWidth;
    this.ctx.strokeRect(0, 0, this.playfieldWidth, this.playfieldHeight);
  }

  renderInfoPanel({ level, score, lines, nextTetromino }) {
    this.ctx.textAlign = "start";
    this.ctx.textBaseline = "top";
    this.ctx.fillStyle = "yellow";
    this.ctx.font = '20px "Nintendo DS BIOS"';

    this.ctx.fillText(`Level: ${level}`, this.InfoPanelX, this.InfoPanelY + 0);
    this.ctx.fillText(`Score: ${score}`, this.InfoPanelX, this.InfoPanelY + 40);
    this.ctx.fillText(`Lines: ${lines}`, this.InfoPanelX, this.InfoPanelY + 80);
    this.ctx.fillText("Next:", this.InfoPanelX, this.InfoPanelY + 120);
    this.ctx.fillText(
      "Press ENTER for pause",
      this.InfoPanelX,
      this.InfoPanelY + 220
    );
    this.ctx.fillText("Author:", this.InfoPanelX, this.InfoPanelY + 580);
    this.ctx.fillText(
      "Konstantin Filyaev",
      this.InfoPanelX,
      this.InfoPanelY + 600
    );

    for (let i = 0; i < nextTetromino.matrix.length; i++) {
      for (let j = 0; j < nextTetromino.matrix[i].length; j++) {
        const block = nextTetromino.matrix[i][j];

        if (block) {
          this.renderBlock(
            this.InfoPanelX + j * this.blockWidth * 0.5,
            this.InfoPanelY + 150 + i * this.blockHeight * 0.5,
            this.blockWidth * 0.5,
            this.blockWidth * 0.5,
            View.colors[block]
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
