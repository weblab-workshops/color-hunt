/** Utils! */

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

const getPlayerColor = (id) => {
  const player = gameState.players[id];
  const dist = Math.min(getDistanceFromGoal(player) / 800, 1);
  const blueValue = (1 - dist) * 255;
  const redValue = dist * 255;
  return `rgb(${redValue}, 0, ${blueValue})`;
};

/** constants */
const goal = getRandomLocation();

/** game state */
const gameState = {
  winner: null,
  players: {},
};

/** game logic */

/** Adds a player to the game state, initialized with a random location */
const addPlayer = (id) => {
  gameState.players[id] = getRandomLocation();
  gameState.players[id].color = getPlayerColor(id);
};

/** Moves a player based off the sent data from the "move" socket msg */
const movePlayer = (id, dir) => {
  if (dir === "up") {
    gameState.players[id].y += 20;
  } else if (dir === "down") {
    gameState.players[id].y -= 20;
  } else if (dir === "left") {
    gameState.players[id].x -= 20;
  } else if (dir === "right") {
    gameState.players[id].x += 20;
  }
  gameState.players[id].color = getPlayerColor(id);
  checkWin();
};

/** Checks whether a player has won, if a player won, change the game state */
const checkWin = () => {
  Object.keys(gameState.players).forEach((key) => {
    // check if they are on top of goal
    const player = gameState.players[key];
    if (player.x === goal.x && player.y === goal.y) {
      gameState.winner = key;
    }
  });
};

/** Remove a player from the game state if they DC */
const removePlayer = (id) => {
  delete gameState.players[id];
};

module.exports = {
  gameState,
  addPlayer,
  movePlayer,
  removePlayer,
};
