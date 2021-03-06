import React from "react";
import GameCard from "./GameCard";
import PropTypes from "prop-types";

export default function GameList({ games, deleteGame }) {
  const emptyMessage = <p>There are no games yet in your collection.</p>;

  const gameList = (
    <div className="ui four cards">
      {games.map((game) => (
        <GameCard game={game} key={game._id} deleteGame={deleteGame} />
      ))}
    </div>
  );

  return <div>{games.length === 0 ? emptyMessage : gameList}</div>;
}

GameList.propTypes = {
  games: PropTypes.array.isRequired,
  deleteGame: PropTypes.func.isRequired,
};
