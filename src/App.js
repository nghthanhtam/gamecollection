import React from "react";
import "./App.css";
import { Link, Route } from "react-router-dom";
import GamesPage from "./GamesPage";
import GameFormPage from "./GameFormPage";

function App() {
  return (
    <div className="ui container">
      <div className="ui three item menu">
        <Link className="item" to="/">
          Home{" "}
        </Link>
        <Link className="item" to="/games">
          Games{" "}
        </Link>
        <Link className="item" to="/games/add">
          Add new game{" "}
        </Link>
      </div>
      <Route exact path="/games" component={GamesPage} />
      <Route path="/games/add" component={GameFormPage} />
      <Route path="/game/:_id" component={GameFormPage} />
    </div>
  );
}

export default App;
