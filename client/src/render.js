let canvas;

const convertCoord = (x, y) => {
  if (!canvas) return;
  return {
    drawX: canvas.width / 2 + x,
    drawY: canvas.height / 2 - y,
  };
};

const drawPlayer = (context, x, y) => {
  const { drawX, drawY } = convertCoord(x, y);
  context.beginPath();
  context.arc(drawX, drawY, 20, 0, 2 * Math.PI, false);
  context.fillStyle = "red";
  context.fill();
};

export const drawCanvas = (drawState) => {
  canvas = document.getElementById("game-canvas");
  if (!canvas) return;
  const context = canvas.getContext("2d");
  context.fillStyle = "black";
  context.fillRect(0, 0, canvas.width, canvas.height);
  Object.values(drawState.players).forEach((p) => {
    drawPlayer(context, p.x, p.y);
  });
};
