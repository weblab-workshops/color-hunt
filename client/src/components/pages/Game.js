import React, { Component } from "react";

import "../../utilities.css";
import "../../input";
import "./Game.css";
import { socket } from "../../client-socket";
import { drawCanvas } from "../../render";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      winner: null,
    };
  }

  componentDidMount() {
    socket.on("update", (update) => {
      this.processUpdate(update);
    });
  }

  processUpdate = (update) => {};

  render() {
    let winnerModal = null;
    if (this.state.winner) {
      winnerModal = (
        <div className="Game-winner">the winner is {this.state.winner} yay cool cool</div>
      );
    }
    return (
      <>
        <div className="Game-body">
          <canvas id="game-canvas" width="800" height="800" />
          {winnerModal}
        </div>
      </>
    );
  }
}

export default Game;
