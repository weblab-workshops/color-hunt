import React, { Component } from "react";

import "../../utilities.css";
import "../../input";
import "./Game.css";

class Game extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <>
        <div className="Game-body">
          <canvas id="game-canvas" width="800" height="800" />
        </div>
      </>
    );
  }
}

export default Game;
