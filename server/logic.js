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
  // TODO Step 0
};

/** game logic */

/** Adds a player to the game state, initialized with a random location */
const addPlayer = (id) => {
  // TODO Step 0
};

/**
 * Moves a player based off the sent data from the "move" socket msg
 * id: the player to move
 * dir: "up", "down", "left", or "right", passed to server through socket from input.js
 */
const movePlayer = (id, dir) => {
  // TODO Step 1 move logic
  // TODO Step 2 check win on move
};

/** Checks whether a player has won, if a player won, change the game state */
const checkWin = () => {
  // TODO Step 2
};

/** Remove a player from the game state if they DC */
const removePlayer = (id) => {
  // TODO Step 0
};

module.exports = {
  gameState,
  addPlayer,
  movePlayer,
  removePlayer,
};
