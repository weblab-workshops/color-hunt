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

const getPlayerColor = (player) => {
  const dist = Math.min(getDistanceFromGoal(player) / 800, 1);
  const blueValue = (1 - dist) * 255;
  const redValue = dist * 255;
  return `rgb(${redValue}, 0, ${blueValue})`;
};

/** constants */
const goal = getRandomLocation();
const MAGNITUDE = 20;

/** game state */
const gameState = {
  players: {},
  winner: null,
};

/** game logic */

/** Adds a player to the game state, initialized with a random location */
const addPlayer = (id) => {
  if (!(id in gameState)) {
    gameState.players[id] = getRandomLocation();
  }
  gameState.players[id].color = getPlayerColor(gameState.players[id]);
};

/** Moves a player based off the sent data from the "move" socket msg */
const movePlayer = (id, dir) => {};

/** Checks whether a player has won, if a player won, change the game state */
const checkWin = () => {};

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
