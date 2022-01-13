import React from "react";
import Login from "./Login";
import Game from "./Game";

import "../../utilities.css";
import "./Skeleton.css";

const Skeleton = ({ userId, handleLogin }) => {
  return <>{userId ? <Game /> : <Login handleLogin={handleLogin} />}</>;
};

export default Skeleton;
