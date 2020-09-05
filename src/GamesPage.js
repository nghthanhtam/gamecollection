import React from "react";
import GameList from "./GameList";
import { connect } from "react-redux";
import { fetchGames, deleteGame } from "./actions/gameActions";
import PropTypes from "prop-types";

class GamesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      height: "200px",
    };
  }

  componentDidMount() {
    this.props.fetchGames();

    fetch("http://localhost:5000")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data: data.data.thing1 });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>{this.state.data} Games List</h1>
        <GameList games={this.props.games} deleteGame={this.props.deleteGame} />
      </div>
    );
  }
}

GamesPage.propTypes = {
  games: PropTypes.array.isRequired,
  fetchGames: PropTypes.func.isRequired,
  deleteGame: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    games: state.games,
  };
}

export default connect(mapStateToProps, { fetchGames, deleteGame })(GamesPage);
