import Game from "./Game";

const canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;

canvas.width = 1920;
canvas.height = 1080;

const game = new Game(ctx);

// Start the game loop
function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  game.update();
  game.draw();
  requestAnimationFrame(gameLoop);
}

gameLoop();
