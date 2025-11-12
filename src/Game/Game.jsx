import { GameLayout } from './GameLayout';
import { connect } from 'react-redux';
import { restartGame } from '../actions';
import { Component } from 'react';
class GameContainer extends Component {
	handleReset = () => {
		this.props.restartGame();
	};

	render() {
		return <GameLayout onReset={this.handleReset} />;
	}
}

const mapDispatchToProps = (dispatch) => ({
	restartGame: () => dispatch(restartGame()),
});

export const Game = connect(null, mapDispatchToProps)(GameContainer);
