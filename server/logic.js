const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
};

const getDistanceFromGoal = (player) => {
  return Math.abs(player.x - goal.x) + Math.abs(player.y - goal.y);
};

const getRandomLocation = () => {
  return {
    x: getRandomInt(-20, 20) * 20,
    y: getRandomInt(-20, 20) * 20,
  };
};

const getPlayerColor = (player) => {
  const dist = Math.min(getDistanceFromGoal(player) / 800, 1);
  const blueValue = (1 - dist) * 255;
  const redValue = dist * 255;
  return `rgb(${redValue}, 0, ${blueValue})`;
};

const goal = getRandomLocation();
const MAGNITUDE = 20;

const gameState = {
  players: {},
  winner: null,
};

const addPlayer = (id) => {
  if (!(id in gameState)) {
    gameState.players[id] = getRandomLocation();
  }
  gameState.color = getPlayerColor(gameState.players[id]);
};

const movePlayer = (id, dir) => {
  if (!(id in gameState.players) || gameState.winner) return;
  if (dir === "up") {
    gameState.players[id].y += MAGNITUDE;
  } else if (dir === "down") {
    gameState.players[id].y -= MAGNITUDE;
  } else if (dir === "left") {
    gameState.players[id].x -= MAGNITUDE;
  } else if (dir === "right") {
    gameState.players[id].x += MAGNITUDE;
  }
  gameState.players[id].color = getPlayerColor(gameState.players[id]);
  checkWin();
};

const checkWin = () => {
  Object.keys(gameState.players).forEach((key) => {
    if (gameState.players[key].x === goal.x && gameState.players[key].y === goal.y) {
      gameState.winner = key;
    }
  });
};

const removePlayer = (id) => {
  delete gameState.players[id];
};

module.exports = {
  gameState,
  addPlayer,
  movePlayer,
  removePlayer,
};
