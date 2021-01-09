const MAGNITUDE = 20;

const gameState = {
  players: {},
};

const addPlayer = (id) => {
  if (!(id in gameState)) {
    gameState.players[id] = {
      x: 0,
      y: 0,
    };
  }
};

const movePlayer = (id, dir) => {
  if (!(id in gameState.players)) return;
  if (dir === "up") {
    gameState.players[id].y += MAGNITUDE;
  } else if (dir === "down") {
    gameState.players[id].y -= MAGNITUDE;
  } else if (dir === "left") {
    gameState.players[id].x -= MAGNITUDE;
  } else if (dir === "right") {
    gameState.players[id].x += MAGNITUDE;
  }
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
