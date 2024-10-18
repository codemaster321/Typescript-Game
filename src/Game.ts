type Player = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export default class Game {
  private ctx: CanvasRenderingContext2D;
  private player: Player = { x: 100, y: 100, width: 50, height: 50 }; // Player object
  private speed: number = 10;
  private canvasWidth: number;
  private canvasHeight: number;

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
    this.canvasWidth = ctx.canvas.width; // Set canvas width
    this.canvasHeight = ctx.canvas.height; // Set canvas height
    window.addEventListener("keydown", (e) => {
      console.log("Key pressed:", e.key); // Log the key pressed
      this.handleInput(e);
    });
  }

  handleInput(event: KeyboardEvent) {
    switch (event.key) {
      case "ArrowUp":
        // Move up only if it won't exceed the top boundary
        if (this.player.y - this.speed >= 0) {
          this.player.y -= this.speed;
        }
        break;
      case "ArrowDown":
        // Move down only if it won't exceed the bottom boundary
        if (
          this.player.y + this.player.height + this.speed <=
          this.canvasHeight
        ) {
          this.player.y += this.speed;
        }
        break;
      case "ArrowLeft":
        // Move left only if it won't exceed the left boundary
        if (this.player.x - this.speed >= 0) {
          this.player.x -= this.speed;
        }
        break;
      case "ArrowRight":
        // Move right only if it won't exceed the right boundary
        if (
          this.player.x + this.player.width + this.speed <=
          this.canvasWidth
        ) {
          this.player.x += this.speed;
        }
        break;
    }

    console.log(`Player Position: (${this.player.x}, ${this.player.y})`);
  }

  update() {}

  draw() {
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight); // Clear the canvas
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(
      this.player.x,
      this.player.y,
      this.player.width,
      this.player.height
    ); // Player square
  }
}
