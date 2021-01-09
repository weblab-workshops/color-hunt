const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
};

const getRandomLocation = () => {
  return {
    x: getRandomInt(-20, 20) * 20,
    y: getRandomInt(-20, 20) * 20,
  };
};

const MAGNITUDE = 20;

const gameState = {
  players: {},
  winner: null,
};

const goal = getRandomLocation();

const addPlayer = (id) => {
  if (!(id in gameState)) {
    gameState.players[id] = getRandomLocation();
  }
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
