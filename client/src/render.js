let canvas;
/** utils */
const convertCoord = (x, y) => {
  if (!canvas) return;
  return {
    drawX: canvas.width / 2 + x,
    drawY: canvas.height / 2 - y,
  };
};

/** drawing functions */

const drawPlayer = (context, x, y, color) => {
  const { drawX, drawY } = convertCoord(x, y);
  context.beginPath();
  context.arc(drawX, drawY, 20, 0, 2 * Math.PI, false);
  context.fillStyle = color;
  context.fill();
};

/** main draw */
export const drawCanvas = (drawState) => {
  // get the canvas element
  canvas = document.getElementById("game-canvas");
  if (!canvas) return;
  const context = canvas.getContext("2d");

  // clear the canvas to black
  context.fillStyle = "black";
  context.fillRect(0, 0, canvas.width, canvas.height);

  // draw all the players
  Object.values(drawState.players).forEach((p) => {
    drawPlayer(context, p.x, p.y, p.color);
  });
};
